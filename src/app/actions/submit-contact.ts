// src/app/actions/submit-contact.ts
'use server';

import { z } from 'zod';
import { getFirestore, Firestore } from 'firebase-admin/firestore'; // Import Firestore module
import { initializeFirebaseAdminApp } from '@/lib/firebase-admin-init';

// Schema for contact form validation
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

interface ContactActionResult {
  success: boolean;
  error?: string;
  data?: z.infer<typeof ContactFormSchema>;
}

const APP_NAME = "contactApp";

export async function submitContactFormAction(formData: FormData): Promise<ContactActionResult> {
  const rawData = {
    name: formData.get('name')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    subject: formData.get('subject')?.toString() || '',
    message: formData.get('message')?.toString() || '',
  };

  const validationResult = ContactFormSchema.safeParse(rawData);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.errors
      .map(e => `${e.path.join('.')}: ${e.message}`)
      .join(', ');
    console.error("❌ Contact Form Validation Error:", validationResult.error.flatten());
    return { success: false, error: `Validation failed: ${errorMessages}` };
  }

  const validatedData = validationResult.data;

  try {
    console.log(`⚙️ Initializing Firebase Admin for ${APP_NAME}...`);
    const app = await initializeFirebaseAdminApp(APP_NAME);
    console.log(`✅ Firebase Admin for ${APP_NAME} initialized.`);

    const db = getFirestore(app); // Get Firestore instance from initialized app
    const contactRef = db.collection('contacts'); // Correct way to access collection

    console.log(`📥 Saving contact form data to Firestore for ${APP_NAME}:`, validatedData);
    await contactRef.add({
      ...validatedData,
      submittedAt: Firestore.FieldValue.serverTimestamp(), // Use FieldValue.serverTimestamp()
    });

    console.log("✅ Contact form data saved to Firestore successfully.");
    return { success: true, data: validatedData };
  } catch (error: any) {
    console.error(`🔥 Error in submitContactFormAction for ${APP_NAME}:`, error.message);
    if (error.message.includes("Failed to initialize")) {
      return { success: false, error: `Firebase initialization failed: ${error.message}` };
    }
    return { success: false, error: "Failed to process your message due to a server error. Please try again." };
  }
}
