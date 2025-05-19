'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label"; // Replaced by FormLabel
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitLeadAction } from "@/app/actions/submit-lead";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface LeadGenerationFormProps {
  serviceTitle: string;
  className?: string;
}

const leadFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string()
    .optional()
    .refine(val => {
      if (val === undefined || val === null || val.trim() === "") return true; 
      return /^[+]?\d{10,15}$/.test(val.trim()); 
    }, {
      message: "Invalid phone number format (10-15 digits, optionally starting with +)."
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
      message: "Loan amount must be a positive number if provided."
    }),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

export function LeadGenerationForm({ serviceTitle, className }: LeadGenerationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      investmentAmount: "",
      loanAmount: "",
      message: "",
    },
  });

  async function onSubmit(values: LeadFormValues) {
    setIsSubmitting(true);
    const formData = new FormData();

    formData.append('name', values.name);
    formData.append('email', values.email);
    if (values.phone && values.phone.trim() !== "") formData.append('phone', values.phone.trim());

    if (values.investmentAmount && values.investmentAmount !== "Not Applicable" && values.investmentAmount !== "") {
        formData.append('investmentAmount', values.investmentAmount);
    }
    
    if (values.loanAmount && values.loanAmount.trim() !== "") {
         formData.append('loanAmount', values.loanAmount.trim());
    }
    formData.append('message', values.message);
    formData.append('serviceTitle', serviceTitle);

    try {
      const result = await submitLeadAction(formData);

      if (result.success) {
        toast({
          title: "Inquiry Submitted!",
          description: `Thank you for your interest in ${serviceTitle}. We will get back to you soon.`,
          variant: "default",
        });
        form.reset();
      } else {
         toast({
          title: "Submission Failed",
          description: result.error || "An error occurred. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
       console.error("Form submission error:", error);
       toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Interested in {serviceTitle}?</CardTitle>
        <CardDescription className="text-sm sm:text-base">Fill out the form below, and we&apos;ll get in touch.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} disabled={isSubmitting} className="text-sm sm:text-base"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} disabled={isSubmitting} className="text-sm sm:text-base"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+91-XXXXXXXXXX" {...field} disabled={isSubmitting} className="text-sm sm:text-base"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {(serviceTitle.includes("Investment") || serviceTitle.includes("Mutual Fund") || serviceTitle.includes("AIF") || serviceTitle.includes("PMS") || serviceTitle.includes("NCD") || serviceTitle.includes("Smallcase") || serviceTitle.includes("Bonds") || serviceTitle.includes("Invoice Discounting")) && (
              <FormField
                control={form.control}
                name="investmentAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Estimated Investment Amount (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value} disabled={isSubmitting}>
                      <FormControl>
                        <SelectTrigger className="text-sm sm:text-base">
                          <SelectValue placeholder="Select amount" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="< 5L">&lt; 5 Lakhs</SelectItem>
                        <SelectItem value="5L-25L">5 - 25 Lakhs</SelectItem>
                        <SelectItem value="25L-50L">25 - 50 Lakhs</SelectItem>
                        <SelectItem value="50L-1Cr">50 Lakhs - 1 Crore</SelectItem>
                        <SelectItem value="> 1Cr">&gt; 1 Crore</SelectItem>
                        <SelectItem value="Not Applicable">Not Applicable / Undecided</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {(serviceTitle.includes("Loan")) && (
              <FormField
                control={form.control}
                name="loanAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Estimated Loan Amount (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        type="text" 
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="e.g., 500000" 
                        {...field}
                        onChange={event => field.onChange(event.target.value)} 
                        value={field.value || ''} // Ensure value is not null/undefined
                        disabled={isSubmitting} 
                        className="text-sm sm:text-base"
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Your Message/Query</FormLabel>
                  <FormControl>
                    <Textarea placeholder={`Tell us more about your requirements for ${serviceTitle}...`} rows={4} {...field} disabled={isSubmitting} className="text-sm sm:text-base"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="btn-cta-custom w-full text-sm sm:text-base" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}


