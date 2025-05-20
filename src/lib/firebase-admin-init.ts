// src/lib/firebase-admin-init.ts
'use server';

import { cert, getApps, initializeApp, App as FirebaseAdminApp } from 'firebase-admin/app';

const adminApps: { [key: string]: FirebaseAdminApp } = {};

/**
 * Initializes and returns a named Firebase Admin app using credentials from environment variables.
 * Works best with GOOGLE_APPLICATION_CREDENTIALS_JSON on Netlify.
 */
export async function initializeFirebaseAdminApp(appName: string): FirebaseAdminApp {
  // Reuse already initialized instance
  if (adminApps[appName]) {
    return adminApps[appName];
  }

  // Reuse existing global app (if any)
  const existingApp = getApps().find(app => app.name === appName);
  if (existingApp) {
    adminApps[appName] = existingApp;
    return existingApp;
  }

  // Try loading credentials from Netlify environment variable
  const credsJsonString = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
  if (!credsJsonString) {
    throw new Error(
      `Firebase Admin SDK (${appName}): Missing 'GOOGLE_APPLICATION_CREDENTIALS_JSON' environment variable. 
Please add it to your Netlify project settings as a plain JSON string.`
    );
  }

  try {
    const serviceAccount = JSON.parse(credsJsonString);
    if (!serviceAccount.project_id || !serviceAccount.client_email || !serviceAccount.private_key) {
      throw new Error('Invalid service account format.');
    }

    const app = initializeApp({ credential: cert(serviceAccount) }, appName);
    adminApps[appName] = app;
    return app;
  } catch (error: any) {
    throw new Error(
      `Firebase Admin SDK (${appName}): Failed to initialize with GOOGLE_APPLICATION_CREDENTIALS_JSON.\n` +
      `Details: ${error.message}`
    );
  }
}
