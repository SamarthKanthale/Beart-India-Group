'use server';

import { z } from 'zod';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase-admin/firestore';
import { initializeFirebaseAdminApp } from '@/lib/firebase-admin-init';


// Define the schema for lead data validation
const LeadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string()
    .optional()
    .refine(val => {
    if (val === undefined || val === null || val.trim() === "") return true; 
    return /^[+]?\d{10,15}$/.test(val.trim()); 
  }, { 
    message: "Invalid phone number format. Expected 10-15 digits, optionally starting with +."
  }),
  investmentAmount: z.string().optional(), 
  loanAmount: z.string()
    .optional()
    .transform(val => (val === undefined || val === null || val.trim() === "" ? undefined : val.trim()))
    .refine(val => {
      if (val === undefined) return true; 
      const num = Number(val);
      return !isNaN(num) && num > 0;
    }, {
      message: "Loan amount must be a positive number if provided.",
    }),
  message: z.string().min(5, "Message should be at least 5 characters"),
  serviceTitle: z.string().min(1, "Service title is missing"),
});

interface ActionResult {
    success: boolean;
    error?: string;
    data?: z.infer<typeof LeadSchema>;
}

const APP_NAME = "leadApp";

export async function submitLeadAction(formData: FormData): Promise<ActionResult> {
  const rawData = {
    name: formData.get('name'), 
    email: formData.get('email'), 
    phone: formData.get('phone'), 
    investmentAmount: formData.get('investmentAmount'), 
    loanAmount: formData.get('loanAmount'), 
    message: formData.get('message'), 
    serviceTitle: formData.get('serviceTitle'), 
  };

   const validationResult = LeadSchema.safeParse(rawData);

   if (!validationResult.success) {
     const errorMessages = validationResult.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('; ');
     console.error("Lead Form Validation Error:", validationResult.error.flatten());
     return { success: false, error: `Validation failed: ${errorMessages}` };
   }

    const validatedData = validationResult.data;

  try {
      console.log(`Initializing Firebase Admin for ${APP_NAME}...`);
      const app = initializeFirebaseAdminApp(APP_NAME);
      console.log(`Firebase Admin for ${APP_NAME} initialized.`);

      const db = getFirestore(app);
      console.log(`Attempting to save lead for ${validatedData.serviceTitle} to Firestore for ${APP_NAME}:`, validatedData);
      await addDoc(collection(db, "leads"), {
        ...validatedData,
        submittedAt: serverTimestamp(), 
      });

      console.log(`Lead for ${validatedData.serviceTitle} saved to Firestore successfully:`, validatedData);
      return { success: true, data: validatedData };

  } catch (error: any) {
      console.error(`Error in submitLeadAction for ${APP_NAME}:`, error.message);
      if (error.message.includes("Failed to initialize")) {
        // Specific error from initializeFirebaseAdminApp
         return { success: false, error: `Firebase initialization failed: ${error.message}` };
      }
      return { success: false, error: "Failed to save lead data due to a server error. Please try again." };
  }
}