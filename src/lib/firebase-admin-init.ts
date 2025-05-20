// src/lib/firebase-admin-init.ts
'use server';

import { cert, getApps, initializeApp, App as FirebaseAdminApp } from 'firebase-admin/app';

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

  // ✅ Primary method: Use GOOGLE_APPLICATION_CREDENTIALS_JSON
  const credsJsonString = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (credsJsonString) {
    console.log(`Firebase Admin SDK (${appName}): Attempting to initialize with GOOGLE_APPLICATION_CREDENTIALS_JSON.`);
    try {
      const serviceAccount = JSON.parse(credsJsonString);
      if (typeof serviceAccount === 'object' && serviceAccount !== null && serviceAccount.project_id) {
        const app = initializeApp({ credential: cert(serviceAccount) }, appName);
        adminApps[appName] = app;
        console.log(`Firebase Admin SDK (${appName}): Initialized successfully using GOOGLE_APPLICATION_CREDENTIALS_JSON.`);
        return app;
      } else {
        throw new Error('Parsed credentials are not a valid service account object.');
      }
    } catch (error: any) {
      console.error(`Firebase Admin SDK (${appName}): Failed to initialize from GOOGLE_APPLICATION_CREDENTIALS_JSON: ${error.message}`);
      throw new Error(`Firebase Admin SDK (${appName}): Invalid JSON in GOOGLE_APPLICATION_CREDENTIALS_JSON.`);
    }
  }

  // ❌ No other method available
  throw new Error(
    `Firebase Admin SDK (${appName}): Initialization failed. 'GOOGLE_APPLICATION_CREDENTIALS_JSON' environment variable is not set or invalid.
Please configure your service account key JSON as an environment variable in Netlify.`
  );
}
