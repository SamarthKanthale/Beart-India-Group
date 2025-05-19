

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPulse, ArrowRight, CheckCircle, Hospital, DollarSign, Users, Calculator, FileText } from "lucide-react"; 
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; 
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Insurance - Beart India Group',
  description: 'Secure your family with comprehensive health insurance plans. Compare quotes and find the best coverage for medical expenses with Beart India Group.',
  keywords: ['health insurance India', 'medical insurance', 'family health plan', 'cashless hospitalization', 'Beart India insurance'],
  alternates: {
    canonical: '/services/insurance/health-insurance',
  },
};


export default function HealthInsurancePage() {

  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <HeartPulse className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Health Insurance
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Protect yourself and your family against the financial burden of rising medical costs with comprehensive health insurance coverage.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/7163956/pexels-photo-7163956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Doctor with stethoscope - Health Insurance"
              fill
              className="object-cover"
              data-ai-hint="doctor stethoscope"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              In an era of escalating healthcare expenses, health insurance acts as a vital safety net, ensuring you can access quality medical treatment without exhausting your savings. It covers hospitalization expenses, pre and post-hospitalization costs, daycare procedures, and sometimes even OPD consultations, depending on the plan.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Benefits of Health Insurance</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
                  <li className="flex items-start gap-2">
                    <Hospital className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Coverage for Medical Expenses:</span> Pays for hospitalization costs including room rent, doctor fees, nursing charges, diagnostic tests, medicines, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Financial Security:</span> Protects your savings from being depleted due to unexpected medical emergencies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Cashless Facility:</span> Avail treatment at network hospitals without paying upfront (subject to policy terms and approvals).</span>
                  </li>
                   <li className="flex items-start gap-2">
                     <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Family Coverage:</span> Options available to cover your entire family (spouse, children, parents) under a single plan (Family Floater).</span>
                  </li>
                   <li className="flex items-start gap-2">
                     <HeartPulse className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Preventive Healthcare:</span> Many plans offer benefits for annual health check-ups.</span>
                  </li>
                     <li className="flex items-start gap-2">
                     <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Tax Benefits:</span> Premiums paid are eligible for tax deductions under Section 80D of the Income Tax Act (subject to limits and conditions).</span>
                  </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Our Health Insurance Services</h2>
             <ul className="space-y-2 sm:space-y-3 list-none">
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Needs Analysis:</span> Helping you determine the appropriate sum insured and coverage type based on family size, age, location, and health conditions.</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  {/* Replace with actual API call logic below */}
                  <span><span className="font-semibold text-foreground">Instant Quote Generation:</span> Providing approximate premium quotes from top insurers based on your details (API integration needed - requires partnership with providers like Policybazaar, Turtlemint, or InsuranceDekho).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Plan Comparison:</span> Assisting in comparing features like room rent limits, co-payments, waiting periods, network hospitals, and claim settlement ratios.</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Claim Support Assistance:</span> Providing guidance and information during the claim filing process (as per insurer guidelines - requires broker/PoSP registration).</span>
                </li>
              </ul>


             <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Choosing the Right Plan</h2>
             <p>We assist you in selecting the right health insurance plan by considering factors such as:</p>
             <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm">
                    <li>Coverage amount (Sum Insured) based on your city, family size, and lifestyle.</li>
                    <li>Individual vs. Family Floater plans.</li>
                    <li>Network hospitals in your vicinity.</li>
                    <li>Inclusions, exclusions, waiting periods, and sub-limits.</li>
                    <li>Co-payment clauses and deductibles.</li>
                    <li>Availability of riders (e.g., critical illness cover, maternity cover).</li>
             </ul>
              <p>
               Having adequate health insurance is essential for financial well-being. We help you compare plans from various insurers to find the best fit for your needs and budget.
              </p>
          </div>

           <LeadGenerationForm serviceTitle="Health Insurance" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}
