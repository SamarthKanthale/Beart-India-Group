import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, CheckCircle, Landmark, FileText, Users } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'NRI Investment Services - Beart India Group',
  description: 'Seamlessly invest in India with specialized services for Non-Resident Indians (NRIs). Navigate regulations, taxation, and manage your portfolio effectively with Beart India Group.',
  keywords: ['NRI investment India', 'FEMA guidelines for NRI', 'NRE NRO accounts', 'NRI mutual funds', 'NRI equity investing', 'Beart India NRI services'],
  alternates: {
    canonical: '/services/investment/nri-investment-services',
  },
};


export default function NRIInvestmentServicesPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <Globe className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               NRI Investment Services
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Seamlessly invest in India from anywhere in the world with our specialized services tailored for Non-Resident Indians (NRIs).
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/14832158/pexels-photo-14832158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Globe and financial documents representing NRI investment services"
              fill
              className="object-cover"
              data-ai-hint="global finance"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Investing back in India offers significant growth opportunities for NRIs. However, navigating the specific regulations (like FEMA guidelines) and identifying suitable investment avenues can be challenging from abroad. Beart India provides comprehensive support to help NRIs make informed investment decisions and manage their portfolios effectively.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">How We Assist NRIs</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Regulatory Guidance:</span> Assistance in understanding FEMA regulations, repatriation rules, and taxation implications for NRI investments.</span>
              </li>
               <li className="flex items-start gap-2">
                <Landmark className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Bank Account Setup:</span> Guidance on opening NRE (Non-Resident External) and NRO (Non-Resident Ordinary) accounts required for investing.</span>
              </li>
              <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Investment Options:</span> Advisory on permissible investments including mutual funds (equity, debt, hybrid), direct equity, Portfolio Management Services (PMS), and real estate (within regulatory limits).</span>
              </li>
              <li className="flex items-start gap-2">
                 <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Portfolio Management:</span> Personalized portfolio construction and ongoing management tailored to NRI needs and goals.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Dedicated Support:</span> Seamless communication and support across time zones to address queries and provide updates.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Why Invest in India as an NRI?</h2>
             <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm">
                 <li>Benefit from one of the world's fastest-growing major economies.</li>
                 <li>Diversify your global investment portfolio.</li>
                 <li>Potential for higher returns compared to many developed markets.</li>
                 <li>Invest in familiar territory with strong long-term prospects.</li>
             </ul>


             <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
               <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                  <Link href="/contact?service=NRIInvestment">
                    Explore NRI Investment Options <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
