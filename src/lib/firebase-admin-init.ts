// src/lib/firebase-admin-init.ts
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

  // 1. Try GOOGLE_APPLICATION_CREDENTIALS_JSON (expects JSON string content)
  const credsJsonString = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (credsJsonString) {
    console.log(`Firebase Admin SDK (${appName}): Attempting to initialize with GOOGLE_APPLICATION_CREDENTIALS_JSON env var.`);
    try {
      const serviceAccount = JSON.parse(credsJsonString);
      if (typeof serviceAccount === 'object' && serviceAccount !== null && serviceAccount.project_id) {
        const app = initializeApp({ credential: cert(serviceAccount) }, appName);
        adminApps[appName] = app;
        console.log(`Firebase Admin SDK (${appName}): Initialized successfully using GOOGLE_APPLICATION_CREDENTIALS_JSON env var.`);
        return app;
      } else {
        console.warn(`Firebase Admin SDK (${appName}): GOOGLE_APPLICATION_CREDENTIALS_JSON env var parsed but was not a valid service account object.`);
      }
    } catch (e: any) {
      console.warn(`Firebase Admin SDK (${appName}): Failed to parse GOOGLE_APPLICATION_CREDENTIALS_JSON env var or initialize: ${e.message}.`);
    }
  } else {
    console.log(`Firebase Admin SDK (${appName}): GOOGLE_APPLICATION_CREDENTIALS_JSON env var not set. Proceeding to next method.`);
  }

  // 2. Try local serviceAccountKey.json file as a fallback (for local dev)
  const projectRoot = process.cwd();
  const localKeyPath = path.resolve(projectRoot, 'secrets', 'serviceAccountKey.json');
  console.log(`Firebase Admin SDK (${appName}): Current working directory for local key path resolution: ${projectRoot}`);
  console.log(`Firebase Admin SDK (${appName}): Attempting local path for service account key: ${localKeyPath}`);
  
  if (fs.existsSync(localKeyPath)) {
    console.log(`Firebase Admin SDK (${appName}): Found local service account key file at ${localKeyPath}.`);
    try {
      const serviceAccountFileContent = fs.readFileSync(localKeyPath, 'utf8');
      const serviceAccount = JSON.parse(serviceAccountFileContent);
      if (typeof serviceAccount === 'object' && serviceAccount !== null && serviceAccount.project_id) {
        const app = initializeApp({ credential: cert(serviceAccount) }, appName);
        adminApps[appName] = app;
        console.log(`Firebase Admin SDK (${appName}): Initialized successfully using local serviceAccountKey.json.`);
        return app;
      } else {
        console.warn(`Firebase Admin SDK (${appName}): Local serviceAccountKey.json loaded but was not a valid service account object. Check file content.`);
      }
    } catch (e: any) {
      console.warn(`Firebase Admin SDK (${appName}): Failed to parse or initialize from local secrets/serviceAccountKey.json at ${localKeyPath}: ${e.message}.`);
    }
  } else {
    console.log(`Firebase Admin SDK (${appName}): Local key file not found at ${localKeyPath}. Proceeding to next method.`);
  }
  
  // 3. Fallback for Google Cloud environments (e.g., Cloud Run, Cloud Functions, Vercel/Netlify with service account attached)
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS || (process.env.GOOGLE_CLOUD_PROJECT && (process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production' || process.env.NETLIFY_ENV === 'production'))) {
    console.log(`Firebase Admin SDK (${appName}): Attempting Application Default Credentials (ADC) or GOOGLE_APPLICATION_CREDENTIALS file path for cloud environment.`);
    try {
      const app = process.env.GOOGLE_APPLICATION_CREDENTIALS 
        ? initializeApp({ credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS) }, appName)
        : initializeApp({}, appName); // ADC
      adminApps[appName] = app;
      console.log(`Firebase Admin SDK (${appName}): Initialized successfully with ADC or GOOGLE_APPLICATION_CREDENTIALS file path.`);
      return app;
    } catch (e: any) {
      console.error(`Firebase Admin SDK (${appName}): Error initializing with ADC or GOOGLE_APPLICATION_CREDENTIALS file path:`, e.message);
    }
  } else {
     console.log(`Firebase Admin SDK (${appName}): Not attempting ADC or GOOGLE_APPLICATION_CREDENTIALS file path (required env vars not set for this method).`);
  }

  throw new Error(
    `Firebase Admin SDK (${appName}): Failed to initialize. All credential methods exhausted.
    Please ensure one of the following is correctly configured:
    1. GOOGLE_APPLICATION_CREDENTIALS_JSON environment variable: Set with the JSON content of your service account key.
    2. Local 'serviceAccountKey.json' file: Place it in a 'secrets' folder at your project root (resolved path was: ${localKeyPath}). Ensure it's valid JSON.
    3. Cloud Environment (Vercel, Netlify, GCP): Ensure GOOGLE_APPLICATION_CREDENTIALS environment variable (file path) is set by the provider, or Application Default Credentials are available for GCP environments.
    Current project root (process.cwd()) for local file check: ${projectRoot}`
  );
}
