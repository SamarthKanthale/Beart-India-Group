import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollText, ArrowRight, CheckCircle, TrendingUp, ShieldCheck, Percent, Banknote, Search, FileText, Activity, DollarSign } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; 
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Non-Convertible Debentures (NCDs) - Beart India Group',
  description: 'Invest in NCDs for fixed income. Learn about Non-Convertible Debentures, features, risks, and application process with Beart India Group.',
  keywords: ['NCD India', 'Non-Convertible Debentures', 'corporate debt India', 'fixed income NCD', 'NCD investment', 'Beart India NCDs'],
   alternates: {
    canonical: '/services/investment/non-convertible-debentures',
  },
};


export default function NonConvertibleDebenturesPage() {

  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <ScrollText className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Non-Convertible Debentures (NCDs)
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Invest in corporate debt instruments offering potentially higher fixed returns compared to traditional fixed deposits. (Typical Minimum Investment: 10,000 INR in public issues, practical allocation often higher)
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/14907452/pexels-photo-14907452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Financial documents or bonds representing NCD investments"
              fill
              className="object-cover"
              data-ai-hint="financial document"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Non-Convertible Debentures (NCDs) are fixed-income securities issued by corporations to raise funds from the public. Unlike convertible debentures, NCDs cannot be converted into equity shares of the issuing company. They offer a fixed interest rate (coupon) for a specified tenure and return the principal amount upon maturity.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Key Features</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
               <li className="flex items-start gap-2">
                <Percent className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Fixed Income:</span> Provide regular interest payments (monthly, quarterly, annually, or cumulative) at a predetermined rate.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Potentially Higher Returns:</span> Often offer higher interest rates compared to bank fixed deposits (FDs) due to the associated credit risk.</span>
              </li>
              <li className="flex items-start gap-2">
                 <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Secured vs. Unsecured:</span> NCDs can be secured (backed by company assets) or unsecured. Secured NCDs are generally considered safer.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Banknote className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Credit Rating:</span> Rated by credit rating agencies (like CRISIL, ICRA) indicating the issuer's creditworthiness and ability to repay. Higher ratings (e.g., AAA, AA) suggest lower risk.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Listing & Liquidity:</span> Many NCDs are listed on stock exchanges (NSE/BSE), providing a degree of liquidity before maturity, although liquidity can vary.</span>
              </li>
                <li className="flex items-start gap-2">
                 <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Minimum Investment:</span> Face value is often low (e.g., Rs 1,000), but the minimum application size for public issues is typically around INR 10,000.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">NCD Services We Offer</h2>
             <ul className="space-y-2 sm:space-y-3 list-none">
               <li className="flex items-start gap-2">
                 <Search className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  {/* Replace with actual API call logic below */}
                 <span><span className="font-semibold text-foreground">Active Issue Listing:</span> Providing information on currently available public NCD issues (Data integration placeholder).</span>
               </li>
                <li className="flex items-start gap-2">
                 <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Risk-Return Analysis:</span> Helping compare NCDs based on credit ratings, coupon rates, security status, and tenure.</span>
               </li>
                <li className="flex items-start gap-2">
                 <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Application Assistance:</span> Guidance on the application process through ASBA (Applications Supported by Blocked Amount) via your bank account.</span>
               </li>
             </ul>

             <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Investment Considerations</h2>
             <p>
               Investors should carefully assess the credit rating, tenure, coupon rate, and security status of the NCD before investing. Higher yields usually come with higher risk. NCDs are suitable for investors seeking fixed returns higher than FDs and who understand credit risk. Interest earned is generally taxable as per the investor's income tax slab.
             </p>
          </div>

           <LeadGenerationForm serviceTitle="Non-Convertible Debentures (NCDs)" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}
