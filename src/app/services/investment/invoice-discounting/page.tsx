

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReceiptText, ArrowRight, CheckCircle, Clock, TrendingUp, Banknote, Building, HelpCircle, Search, Activity, Percent } from "lucide-react"; 
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; 
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoice Discounting & Corporate FDs - Beart India Group',
  description: 'Explore alternative fixed-income options like invoice discounting and corporate fixed deposits for potentially higher yields with Beart India Group.',
  keywords: ['invoice discounting India', 'corporate FDs India', 'fixed income alternatives', 'KredX', 'TradeCred', 'Beart India finance'],
  alternates: {
    canonical: '/services/investment/invoice-discounting',
  },
};


export default function InvoiceDiscountingFDsPage() {

  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-xl animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <ReceiptText className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Invoice Discounting & Corporate FDs
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Explore alternative fixed-income options like invoice discounting and corporate fixed deposits for potentially higher yields.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/5900178/pexels-photo-5900178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Financial documents and calculator representing invoice discounting and FDs"
              fill
              className="object-cover"
              data-ai-hint="financial documents calculator"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Invoice Discounting</h2>
             <p>
               Invoice discounting is a form of short-term borrowing often used by businesses to improve their working capital and cash flow. Investors can participate by funding these invoices through specialized platforms. Essentially, you are lending money against unpaid invoices raised by businesses (sellers) to reputable corporations (buyers), expecting repayment once the buyer pays the invoice.
             </p>
            <ul className="space-y-2 sm:space-y-3 list-none">
               
                 <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Short Tenure:</span> Investments typically range from 30 to 120 days, aligned with invoice payment cycles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Potentially Higher Yields:</span> Often provides higher returns compared to traditional FDs or liquid funds due to the associated risks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <Building className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                     <span><span className="font-semibold text-foreground">Risk Factor:</span> The primary risk is the delay or default in payment by the buyer of the goods/services (the corporate debtor). Due diligence on the platform and the underlying corporates is essential.</span>
                  </li>
            </ul>

            
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Our Invoice Discounting Services</h2>
             <ul className="space-y-2 sm:space-y-3 list-none">
                <li className="flex items-start gap-2">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                   {/* Replace with actual API call logic below */}
                  <span><span className="font-semibold text-foreground">Curated Deal Listing:</span> Showcasing selected invoice discounting opportunities from our partner platforms (e.g., KredX, TradeCred - Placeholder).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Risk Level Indicator:</span> Providing an indicative risk assessment based on the buyer's creditworthiness (where available).</span>
                </li>
                 <li className="flex items-start gap-2">
                  <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Onboarding Helpdesk:</span> Assisting new investors with the KYC and onboarding process on partner platforms.</span>
                </li>
              </ul>

             <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Corporate Fixed Deposits (Corporate FDs)</h2>
             <p>
                Corporate FDs are fixed deposit schemes offered by companies (including NBFCs and Housing Finance Companies) directly to the public. They function similarly to bank FDs but typically offer slightly higher interest rates.
             </p>
             <ul className="space-y-2 sm:space-y-3 list-none">
                
                  <li className="flex items-start gap-2">
                    <Percent className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Higher Interest Rates:</span> Generally offer better rates than bank FDs for similar tenures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Banknote className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Fixed Returns:</span> Interest rate is fixed at the time of investment for the chosen tenure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Credit Risk:</span> Unlike bank FDs (which are insured up to 5 Lakhs by DICGC), corporate FDs carry credit risk associated with the issuing company. Higher-rated companies (AAA, AA) are considered safer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Liquidity:</span> Premature withdrawal options might be available but often come with penalties.</span>
                  </li>
             </ul>
              

             <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Investment Considerations</h2>
             <p>
               Both invoice discounting and corporate FDs offer potential for higher fixed income but come with higher risks than traditional bank deposits. Thorough assessment of the platform/company's credibility, credit ratings (for FDs), and the underlying businesses/invoices (for discounting) is crucial. These are suitable for investors with a moderate to high-risk appetite seeking portfolio diversification.
             </p>

            
          </div>

            
           <LeadGenerationForm serviceTitle="Invoice Discounting / Corporate FDs" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}
