import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight, CheckCircle, TrendingUp, RefreshCw, Users, BarChart3, DollarSign, Calculator, Search, Target as TargetIcon } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smallcase Portfolios - Beart India Group',
  description: 'Invest in curated baskets of stocks or ETFs (Smallcases) based on themes or strategies with Beart India Group. Managed by SEBI-registered professionals.',
  keywords: ['smallcase India', 'thematic investing', 'ETF portfolios', 'managed stock baskets', 'Beart India smallcase', 'Windmill Capital'],
  alternates: {
    canonical: '/services/investment/smallcase-portfolios',
  },
};

export default function SmallcasePortfoliosPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-xl animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
            <Package className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
            <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
              Smallcase Portfolios
            </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Invest in baskets of stocks or ETFs based on specific themes, strategies, or ideas, managed by SEBI-registered professionals. (Minimum Investment varies)
          </CardDescription>
        </CardHeader>

        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/3943727/pexels-photo-3943727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Collection of diverse items in packages representing Smallcase portfolios"
              fill
              className="object-cover"
              data-ai-hint="packages items"
              priority
            />
          </div>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Smallcases are modern investment products that help you build a diversified, low-cost, and long-term portfolio. Each smallcase is a curated basket of stocks or Exchange Traded Funds (ETFs) reflecting a specific market theme, investment strategy, or objective. These portfolios are created and managed by SEBI-registered investment advisors or research analysts.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Key Features</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Package className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Thematic & Strategic Baskets:</span> Invest in ideas like 'Make in India', 'Electric Mobility', dividend yield strategies, momentum investing, etc.</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Professionally Managed:</span> Portfolios are created and managed by SEBI-registered experts.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Diversification:</span> Provides diversification within a theme or strategy by holding multiple stocks/ETFs.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Direct Ownership:</span> Stocks/ETFs are held directly in your own Demat account.</span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Regular Rebalancing:</span> Managers review and rebalance the portfolios periodically based on the underlying strategy. You receive rebalance updates to execute.</span>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Variable Minimums:</span> Minimum investment amounts vary per smallcase, making it accessible for different investment sizes.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Our Smallcase Services</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Portfolio Discovery & Comparison:</span> Helping you explore and compare smallcases based on themes, risk levels, and manager philosophy (Requires Smallcase API integration).</span>
              </li>
              <li className="flex items-start gap-2">
                <TargetIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Goal-Based Recommendations:</span> Suggesting suitable smallcases aligned with your specific financial goals (e.g., long-term growth, dividend income).</span>
              </li>
              <li className="flex items-start gap-2">
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">SIP Integration Guidance:</span> Assisting in understanding how to invest via SIPs in smallcases through your broker.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Tools & Resources</h2>
            <div className="grid md:grid-cols-1 gap-4 mt-4">
              <Link href="/calculators/sip">
                <Button
                  variant="outline"
                  className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent w-full h-full flex flex-col items-start justify-start text-left text-sm sm:text-base"
                >
                  <Calculator className="h-5 w-5 sm:h-6 sm:w-6 mb-2 text-[hsl(var(--accent-investment))]" />
                  <h4 className="font-semibold text-foreground">SIP Calculator</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground overflow-visible whitespace-normal break-words">
                    Estimate potential returns on your systematic investments.
                  </p>
                  <span className="text-[hsl(var(--accent-investment))] font-medium text-xs sm:text-sm mt-auto self-start">
                    Go to Calculator <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </span>
                </Button>
              </Link>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">How it Works</h2>
            <p>
              You can browse various smallcases on the platform, understand their underlying methodology, and invest using your existing Demat and trading account through a supported broker. You pay a fee (often subscription-based) to the smallcase manager for their research and management services.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Who Is It For?</h2>
            <p>
              Smallcases are suitable for investors looking for theme-based or strategy-driven equity exposure with professional oversight, direct ownership, and transparency, typically with an investment horizon of 3+ years.
            </p>
          </div>

          <LeadGenerationForm serviceTitle="Smallcase Portfolios" className="mt-12 border-t pt-8" />
        </CardContent>
      </Card>
    </div>
  );
}
