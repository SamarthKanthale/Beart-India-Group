'use server';

import { cert, getApps, initializeApp, App as FirebaseAdminApp } from 'firebase-admin/app';
import fs from 'fs';
import path from 'path';

const adminApps: { [key: string]: FirebaseAdminApp } = {};

export async function initializeFirebaseAdminApp(appName: string): FirebaseAdminApp {
  if (adminApps[appName]) {
    console.log(`Firebase Admin SDK (${appName}): Reusing existing initialized app.`);
    return adminApps[appName];
  }

  const existingApp = getApps().find(app => app.name === appName);
  if (existingApp) {
    adminApps[appName] = existingApp;
    console.log(`Firebase Admin SDK (${appName}): Found existing app instance.`);
    return existingApp;
  }

  // 1. Use GOOGLE_APPLICATION_CREDENTIALS_JSON
  const credsJsonString = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (credsJsonString) {
    try {
      const serviceAccount = JSON.parse(credsJsonString);
      if (serviceAccount?.project_id) {
        const app = initializeApp({ credential: cert(serviceAccount) }, appName);
        adminApps[appName] = app;
        console.log(`Firebase Admin SDK (${appName}): Initialized using GOOGLE_APPLICATION_CREDENTIALS_JSON.`);
        return app;
      } else {
        console.warn(`Firebase Admin SDK (${appName}): Invalid service account object in JSON env var.`);
      }
    } catch (e: any) {
      console.warn(`Firebase Admin SDK (${appName}): Failed to parse JSON env var: ${e.message}`);
    }
  }

  // 2. Fallback to local serviceAccountKey.json
  const localKeyPath = path.resolve(process.cwd(), 'secrets', 'serviceAccountKey.json');
  if (fs.existsSync(localKeyPath)) {
    try {
      const content = fs.readFileSync(localKeyPath, 'utf8');
      const serviceAccount = JSON.parse(content);
      if (serviceAccount?.project_id) {
        const app = initializeApp({ credential: cert(serviceAccount) }, appName);
        adminApps[appName] = app;
        console.log(`Firebase Admin SDK (${appName}): Initialized using local serviceAccountKey.json.`);
        return app;
      } else {
        console.warn(`Firebase Admin SDK (${appName}): Invalid service account JSON in local file.`);
      }
    } catch (e: any) {
      console.warn(`Firebase Admin SDK (${appName}): Error reading/parsing local key: ${e.message}`);
    }
  }

  // 3. Use default ADC (Application Default Credentials) for cloud environments
  if (
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    (process.env.GOOGLE_CLOUD_PROJECT && (process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production' || process.env.NETLIFY_ENV === 'production'))
  ) {
    try {
      const app = process.env.GOOGLE_APPLICATION_CREDENTIALS
        ? initializeApp({ credential: cert(require(process.env.GOOGLE_APPLICATION_CREDENTIALS)) }, appName)
        : initializeApp({}, appName); // ADC
      adminApps[appName] = app;
      console.log(`Firebase Admin SDK (${appName}): Initialized using ADC or GOOGLE_APPLICATION_CREDENTIALS.`);
      return app;
    } catch (e: any) {
      console.error(`Firebase Admin SDK (${appName}): Failed with ADC or file path: ${e.message}`);
    }
  }

  throw new Error(
    `Firebase Admin SDK (${appName}): Failed to initialize. All credential methods exhausted.\n` +
    `1. Set GOOGLE_APPLICATION_CREDENTIALS_JSON (JSON string of service account).\n` +
    `2. Place a valid secrets/serviceAccountKey.json in project root.\n` +
    `3. Ensure cloud environment provides credentials or GOOGLE_APPLICATION_CREDENTIALS file path.\n` +
    `Checked local path: ${localKeyPath}`
  );
}
