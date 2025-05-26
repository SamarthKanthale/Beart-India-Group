'use server';

import { z } from 'zod';
import { initializeFirebaseAdminApp } from '@/lib/firebase-admin-init';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

const APP_NAME = 'Beart India';

type ActionResult = {
  success: boolean;
  data?: any;
  error?: string;
};

const LeadSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number is required'),
  investmentAmount: z.string().optional(),
  loanAmount: z.string().optional(),
  message: z.string().optional(),
  serviceTitle: z.string().min(1, 'Service title is required'),
});

export async function submitLeadAction(formData: FormData): Promise<ActionResult> {
  const rawData = {
    name: formData.get('name')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    phone: formData.get('phone')?.toString() ?? '',
    investmentAmount: formData.get('investmentAmount')?.toString() ?? undefined,
    loanAmount: formData.get('loanAmount')?.toString() ?? undefined,
    message: formData.get('message')?.toString() ?? '',
    serviceTitle: formData.get('serviceTitle')?.toString() ?? '',
  };

  const validationResult = LeadSchema.safeParse(rawData);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.errors
      .map((e) => `${e.path.join('.')}: ${e.message}`)
      .join('; ');
    console.error('Lead Form Validation Error:', validationResult.error.flatten());
    return { success: false, error: `Validation failed: ${errorMessages}` };
  }

  const validatedData = validationResult.data;

  try {
    console.log(`Initializing Firebase Admin for ${APP_NAME}...`);
    const app = await initializeFirebaseAdminApp(APP_NAME);
    console.log(`Firebase Admin for ${APP_NAME} initialized.`);

    const db = getFirestore(app);
    console.log(
      `Attempting to save lead for ${validatedData.serviceTitle} to Firestore for ${APP_NAME}:`,
      validatedData
    );

    // Remove undefined fields before saving to Firestore
    const dataToSave = Object.fromEntries(
      Object.entries({
        ...validatedData,
        submittedAt: Timestamp.now(),
      }).filter(([_, value]) => value !== undefined)
    );

    await db.collection('leads').add(dataToSave);


    console.log(
      `Lead for ${validatedData.serviceTitle} saved to Firestore successfully:`,
      validatedData
    );
    return { success: true, data: validatedData };
  } catch (error: any) {
    console.error(`Error in submitLeadAction for ${APP_NAME}:`, error.message);
    if (error.message.includes('Failed to initialize')) {
      return { success: false, error: `Firebase initialization failed: ${error.message}` };
    }
    return { success: false, error: 'Failed to save lead data due to a server error. Please try again.' };
  }
}
