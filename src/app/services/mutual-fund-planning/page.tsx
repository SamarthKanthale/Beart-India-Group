import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowRight, CheckCircle, Target as TargetIcon, PieChart, Clock, TrendingUp, Calculator, Search } from "lucide-react"; 
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; 
import SipCalculatorPage from "@/components/calculators/SipCalculatorPage"; // Direct calculator component, NOT a popup

async function getMutualFundExamples() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return [
    { id: 'MF001', name: 'Example Large Cap Fund', category: 'Equity: Large Cap', link: '#' },
    { id: 'MF002', name: 'Example Flexi Cap Fund', category: 'Equity: Flexi Cap', link: '#' },
    { id: 'MF003', name: 'Example Liquid Fund', category: 'Debt: Liquid', link: '#' },
    { id: 'MF004', name: 'Example Aggressive Hybrid Fund', category: 'Hybrid: Aggressive', link: '#' },
  ];
}

export default async function MutualFundPlanningPage() {
  const funds = await getMutualFundExamples();

  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <BarChart3 className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
            <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
              Mutual Fund Planning
            </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategically select and manage mutual funds aligned with your financial goals, risk appetite, and investment horizon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Mutual funds offer a powerful way to diversify your investments and access professional fund management. However, choosing the right funds from thousands of options can be daunting. Our Mutual Fund Planning service simplifies this process, guiding you towards a portfolio designed for optimal returns based on your unique financial situation.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Our Approach</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-2">
                <TargetIcon className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Goal-Based Planning:</span> We start by understanding your financial objectives (e.g., retirement, education, wealth creation) and time horizon.</span>
              </li>
              <li className="flex items-start gap-2">
                <PieChart className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Risk Profiling:</span> Assessing your comfort level with market fluctuations to recommend suitable fund categories (equity, debt, hybrid).</span>
              </li>
              <li className="flex items-start gap-2">
                <Search className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Fund Selection & Review:</span> Utilizing research and analysis to select high-quality funds with consistent track records and strong management. We provide comparison tools. (Requires API integration with CAMS/KFintech/BSE Star MF).</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Model Portfolio Construction:</span> Building diversified model portfolios based on risk profiles.</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">SIP & Lumpsum Strategy:</span> Advising on the optimal investment approach, whether through Systematic Investment Plans (SIPs) or lump-sum investments, aided by calculators.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Regular Monitoring & Guidance:</span> Periodically reviewing your portfolio performance and providing guidance on adjustments.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Tools & Resources (Examples)</h2>

            <div className="border rounded-lg p-6 bg-secondary">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <Calculator className="h-5 w-5 text-[hsl(var(--accent-investment))]" />
                SIP Calculator
              </h3>
              <p className="mb-4 text-muted-foreground">
                Use this calculator to estimate the future value of your SIP investments.
              </p>
              <SipCalculatorPage /> {/* FULL EMBEDDED COMPONENT */}
            </div>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4">Benefits</h2>
            <ul className="space-y-2 list-disc list-inside">
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
