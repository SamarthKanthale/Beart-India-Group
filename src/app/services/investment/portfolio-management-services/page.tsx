import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Presentation, ArrowRight, CheckCircle, UserCheck, TrendingUp, Scale, DollarSign, Search, BarChart, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; 
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Portfolio Management Services (PMS) - Beart India Group',
  description: 'Professional and personalized Portfolio Management Services (PMS) for HNIs. Tailored equity or debt portfolios with a minimum investment of 50 Lakhs INR by Beart India Group.',
  keywords: ['PMS India', 'Portfolio Management Services', 'HNI investments India', 'SEBI registered PMS', 'discretionary PMS', 'Beart India PMS'],
  alternates: {
    canonical: '/services/investment/portfolio-management-services',
  },
};


export default function PortfolioManagementServicesPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <Presentation className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Portfolio Management Services (PMS)
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Professional and personalized management of your equity or debt portfolio to meet specific investment objectives. (Minimum Investment: 50 Lakhs INR)
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/7873554/pexels-photo-7873554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Portfolio management dashboard with charts and graphs"
              fill
              className="object-cover"
              data-ai-hint="financial dashboard"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Portfolio Management Services (PMS) offer tailored investment solutions for High Net Worth Individuals (HNIs) seeking customized portfolio management. Unlike mutual funds, PMS provides individual portfolios held in the investor's name, allowing for greater flexibility and personalized strategies managed by professional fund managers.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Key Features</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <UserCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Personalized Investment Strategy:</span> Portfolios are constructed based on individual risk profiles, financial goals, and investment horizons.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Active Management:</span> Professional fund managers actively monitor the portfolio and make investment decisions based on research and market outlook.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Scale className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Flexibility:</span> Offers potential for concentrated bets and strategies not typically available in mutual funds. Can include equity, debt, or hybrid strategies.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Transparency:</span> Investors hold securities directly in their Demat accounts, providing clear visibility of holdings and transactions. Regular reporting is provided.</span>
              </li>
               <li className="flex items-start gap-2">
                 <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Higher Minimum Investment:</span> SEBI mandates a minimum investment of INR 50 Lakhs for PMS.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Types of PMS</h2>
             <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm">
                <li><span className="font-semibold">Discretionary PMS:</span> The portfolio manager takes investment decisions independently on behalf of the investor.</li>
                <li><span className="font-semibold">Non-Discretionary PMS:</span> The portfolio manager suggests investment ideas, but the final decision rests with the investor.</li>
                <li><span className="font-semibold">Advisory PMS:</span> The manager only provides investment advice; execution is handled by the investor.</li>
             </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Our PMS Advisory Services</h2>
             <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <UserCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Risk Profiling & Eligibility Check:</span> Detailed assessment of your risk appetite, financial goals, and confirmation of eligibility (minimum 50 Lakhs investment).</span>
              </li>
               <li className="flex items-start gap-2">
                 <MessageCircleQuestion className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">PMS Strategy Consultation:</span> Evaluating different PMS strategies (Large-cap, Mid-cap, Multi-cap, Thematic, Debt) and manager track records.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Search className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  {/* Replace with actual API call logic below */}
                 <span><span className="font-semibold text-foreground">Advisor Connect:</span> Connecting you with SEBI-registered PMS providers whose strategies align with your objectives.</span>
              </li>
              <li className="flex items-start gap-2">
                 <BarChart className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Performance Report Summaries:</span> Helping you understand and interpret the performance reports provided by the PMS manager.</span>
              </li>
            </ul>

             <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Who Should Consider PMS?</h2>
             <p>
               PMS is suitable for sophisticated investors with a substantial investment amount (above 50 Lakhs INR) who seek personalized portfolio strategies, direct ownership of securities, and professional management expertise.
             </p>

          </div>

          <LeadGenerationForm serviceTitle="Portfolio Management Services (PMS)" className="mt-12 border-t pt-8"/>

        </CardContent>
      </Card>
    </div>
  );
}
