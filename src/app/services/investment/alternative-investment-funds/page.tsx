import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight, CheckCircle, ShieldCheck, TrendingUp, DollarSign, Search, UserCheck, BarChart, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; 
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alternative Investment Funds (AIF) - Beart India Group',
  description: 'Explore sophisticated Alternative Investment Funds (AIFs) like venture capital, private equity, and hedge funds with Beart India Group. Minimum investment 1 Crore INR.',
  keywords: ['AIF India', 'Alternative Investment Funds', 'venture capital India', 'private equity India', 'hedge funds India', 'HNI investments', 'Beart India Group AIF'],
  alternates: {
    canonical: '/services/investment/alternative-investment-funds',
  },
};

export default function AlternativeInvestmentFundsPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <Briefcase className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Alternative Investment Funds (AIF)
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Access sophisticated investment avenues like venture capital, private equity, and hedge funds. (Minimum Investment: 1 Crore INR)
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Financial instruments and money representing Alternative Investment Funds"
              fill
              className="object-cover"
              data-ai-hint="finance credit card"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Alternative Investment Funds (AIFs) represent a category of pooled investment funds in India that invest in assets beyond traditional options like stocks, bonds, and cash. These are typically accessible to sophisticated investors seeking diversification and potentially higher returns through investments in venture capital, private equity, hedge funds, real estate, or infrastructure projects.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Key Characteristics</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Sophisticated Strategies:</span> Employ complex trading strategies, invest in unlisted securities, or focus on niche markets.</span>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Higher Minimum Investment:</span> SEBI mandates a minimum investment, typically INR 1 Crore, making AIFs suitable for High Net Worth Individuals (HNIs) and institutional investors.</span>
              </li>
              <li className="flex items-start gap-2">
                 <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Regulatory Framework:</span> Governed by SEBI (Alternative Investment Funds) Regulations, 2012, ensuring investor protection and transparency.</span>
              </li>
              <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Potential for Higher Returns:</span> Aims to generate alpha (returns above market benchmarks), often associated with higher risk.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Diversification:</span> Offers exposure to asset classes with low correlation to traditional markets.</span>
              </li>
            </ul>

             <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Categories of AIFs</h2>
             <p>AIFs are broadly classified into three categories by SEBI:</p>
             <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm">
                <li><span className="font-semibold">Category I:</span> Invests in startups, early-stage ventures, SMEs, social ventures, infrastructure. (e.g., Venture Capital Funds, SME Funds).</li>
                <li><span className="font-semibold">Category II:</span> Includes funds not falling under Category I or III, typically Private Equity funds or Debt funds. Does not employ leverage.</li>
                <li><span className="font-semibold">Category III:</span> Employs diverse or complex trading strategies, may use leverage. (e.g., Hedge Funds, Long-Short Funds).</li>
             </ul>

            
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Our AIF Advisory Services</h2>
             <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <UserCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Risk Profiling & Eligibility Check:</span> Understanding your risk tolerance and confirming eligibility based on SEBI norms (HNIs, accredited investors).</span>
              </li>
               <li className="flex items-start gap-2">
                 <MessageCircleQuestion className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Strategy Consultation:</span> Discussing various AIF categories and strategies (VC, PE, Hedge, Debt) to align with your investment outlook.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Search className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                  {/* Replace with actual API call logic below */}
                 <span><span className="font-semibold text-foreground">Advisor Connect:</span> Facilitating introductions to SEBI-registered AIF managers and advisors based on your chosen strategy.</span>
              </li>
              <li className="flex items-start gap-2">
                 <BarChart className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Performance Reporting:</span> Assisting in understanding performance reports and summaries provided by the AIF manager.</span>
              </li>
            </ul>


             <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Important Considerations</h2>
             <p>
               Investing in AIFs involves higher risks compared to traditional investments. Investors should have a high-risk appetite, a long-term investment horizon, and understand the complexities involved. Due diligence on the fund manager and strategy is crucial.
             </p>
          </div>
           <LeadGenerationForm serviceTitle="Alternative Investment Funds (AIF)" className="mt-12 border-t pt-8"/>
        </CardContent>
      </Card>
    </div>
  );
}
