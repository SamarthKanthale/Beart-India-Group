
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Umbrella, ArrowRight, CheckCircle, Users, HeartPulse, Gift, Calculator, FileText } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Life Insurance - Secure Your Family | Beart India Group',
  description: 'Secure your family\'s financial future with comprehensive life insurance plans. Explore term plans, ULIPs, and endowment plans with Beart India Group.',
  keywords: ['life insurance India', 'term plan', 'ULIP', 'endowment plan', 'family protection', 'Beart India insurance'],
  alternates: {
    canonical: '/services/insurance/life-insurance',
  },
};


export default function LifeInsurancePage() {

  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-center pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
             <Umbrella className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Life Insurance
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure your family's financial future with comprehensive life insurance plans tailored to your needs and responsibilities.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Family protected under an umbrella, symbolizing life insurance"
              fill
              className="object-cover"
              data-ai-hint="family protection"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Life insurance is a crucial financial tool designed to provide financial protection to your loved ones in the event of your unfortunate demise. It ensures that your family can maintain their lifestyle, meet financial obligations, and achieve long-term goals even in your absence.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4">Why Life Insurance is Essential</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
                 <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Family Protection:</span> Provides a lump sum or regular income to your dependents to cover living expenses, debts, and future needs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Goal Accomplishment:</span> Ensures funds are available for major life goals like children's education or marriage, even if you are not around.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <HeartPulse className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Debt Management:</span> Helps pay off outstanding loans (home loan, car loan, personal loan), preventing financial burden on your family.</span>
                  </li>
                   <li className="flex items-start gap-2">
                     <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Legacy Planning:</span> Can be used to leave behind a financial legacy or inheritance for your heirs.</span>
                  </li>
                    <li className="flex items-start gap-2">
                     <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Tax Benefits:</span> Premiums paid and maturity/death benefits received are often eligible for tax deductions/exemptions under relevant sections of the Income Tax Act (subject to conditions).</span>
                  </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Life Insurance Services</h2>
             <ul className="space-y-2 sm:space-y-3 list-none">
                <li className="flex items-start gap-2">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Human Life Value (HLV) Calculation:</span> Helping you estimate the ideal life cover amount based on your income, expenses, liabilities, and future goals.</span>
                </li>
                 <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Term Plan Recommendations:</span> Advising on pure-risk term insurance plans offering high coverage at affordable premiums.</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  {/* Replace with actual API call logic below */}
                  <span><span className="font-semibold text-foreground">Premium Quote Generation:</span> Providing indicative premium quotes for term plans from leading insurers (API integration needed - requires partnership with providers like Policybazaar, Turtlemint, or InsuranceDekho).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Claim Support Assistance:</span> Offering guidance and information to beneficiaries during the claim process (requires broker/PoSP registration).</span>
                </li>
              </ul>


             <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4">Types of Life Insurance</h2>
             <p>We offer advice and facilitate various types of life insurance plans, including:</p>
             <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm">
                  <li><span className="font-semibold">Term Insurance:</span> Pure protection plan offering high coverage at affordable premiums for a specific term.</li>
                  <li><span className="font-semibold">Endowment Plans:</span> Combination of insurance and savings, providing a lump sum on maturity or death.</li>
                  <li><span className="font-semibold">ULIPs (Unit Linked Insurance Plans):</span> Combines insurance with investment in market-linked funds.</li>
                  <li><span className="font-semibold">Whole Life Insurance:</span> Provides coverage for the entire lifetime of the insured.</li>
                  <li><span className="font-semibold">Money Back Plans:</span> Provide periodic payouts during the policy term along with maturity benefits.</li>
             </ul>
              <p>
               Choosing the right life insurance depends on your age, income, dependents, liabilities, and financial goals. We help you assess your needs and select the most suitable plan and coverage amount.
              </p>

          </div>

           <LeadGenerationForm serviceTitle="Life Insurance" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}
