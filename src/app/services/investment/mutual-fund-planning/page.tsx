import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowRight, Target as TargetIcon, PieChart, Clock, TrendingUp, Calculator, Search } from "lucide-react"; 
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mutual Fund Planning - Beart India Investment Solutions",
  description: "Strategic mutual fund planning and advisory services. Select and manage mutual funds aligned with your financial goals, risk appetite, and investment horizon with Beart India.",
  keywords: ["mutual fund planning", "SIP investment", "equity funds", "debt funds", "hybrid funds", "goal-based investing", "Beart India", "Aditya Birla Money sub-broker"],
  alternates: {
    canonical: '/services/investment/mutual-fund-planning',
  },
};

export default function MutualFundPlanningPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-xl animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
            <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
              Mutual Fund Planning
            </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Strategically select and manage mutual funds aligned with your financial goals, risk appetite, and investment horizon.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/6052793/pexels-photo-6052793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Abstract representation of mutual fund planning or financial growth"
              fill
              className="object-cover"
              data-ai-hint="financial planning growth"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Mutual funds offer a powerful way to diversify your investments and access professional fund management. However, choosing the right funds from thousands of options can be daunting. Our Mutual Fund Planning service simplifies this process, guiding you towards a portfolio designed for optimal returns based on your unique financial situation.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Our Approach</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <TargetIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Goal-Based Planning:</span> We start by understanding your financial objectives (e.g., retirement, education, wealth creation) and time horizon.</span>
              </li>
              <li className="flex items-start gap-2">
                <PieChart className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Risk Profiling:</span> Assessing your comfort level with market fluctuations to recommend suitable fund categories (equity, debt, hybrid).</span>
              </li>
              <li className="flex items-start gap-2">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Fund Selection &amp; Review:</span> Utilizing research and analysis to select high-quality funds with consistent track records and strong management. We provide comparison tools. (Requires API integration with CAMS/KFintech/BSE Star MF).</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Model Portfolio Construction:</span> Building diversified model portfolios based on risk profiles.</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">SIP &amp; Lumpsum Strategy:</span> Advising on the optimal investment approach, whether through Systematic Investment Plans (SIPs) or lump-sum investments, aided by calculators.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Regular Monitoring &amp; Guidance:</span> Periodically reviewing your portfolio performance and providing guidance on adjustments.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Tools & Resources</h2>

            <div className="grid md:grid-cols-1 gap-4 mt-4">
              <Link href="/calculators/sip">
                <Button variant="outline" className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent w-full h-full flex flex-col items-start justify-start text-left text-sm sm:text-base">
                  <Calculator className="h-5 w-5 sm:h-6 sm:w-6 mb-2 text-[hsl(var(--accent-investment))]" />
                  <h4 className="font-semibold text-foreground">SIP Calculator</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground overflow-visible whitespace-normal break-words">
                    Estimate future value of your SIP investments.
                  </p>
                  <span className="text-[hsl(var(--accent-investment))] font-medium text-xs sm:text-sm mt-auto self-start">
                    Go to Calculator <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </span>
                </Button>
              </Link>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Benefits</h2>
            <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm">
              <li>Access to professionally managed funds.</li>
              <li>Diversification across various stocks and bonds.</li>
              <li>Potential for long-term wealth creation.</li>
              <li>Convenience through SIPs.</li>
              <li>Expert guidance simplifies complex choices.</li>
              <li>Goal-based investing approach.</li>
            </ul>
          </div>

          <LeadGenerationForm serviceTitle="Mutual Fund Planning" className="mt-12 border-t pt-8" />
        </CardContent>
      </Card>
    </div>
  );
}
