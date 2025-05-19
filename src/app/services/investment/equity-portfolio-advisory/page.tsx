import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Equity Portfolio Advisory - Beart India Investment Solutions",
  description: "Expert, research-backed equity portfolio advisory for long-term wealth creation. Personalized strategies and active management for your stock investments with Beart India.",
  keywords: ["equity portfolio advisory", "stock investment India", "portfolio management", "long-term wealth creation", "Beart India", "Aditya Birla Money sub-broker"],
  alternates: {
    canonical: '/services/investment/equity-portfolio-advisory',
  },
};

export default function EquityPortfolioAdvisoryPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <TrendingUp className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Equity Portfolio Advisory
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Build and manage a robust equity portfolio with our expert, research-backed advisory services focused on long-term wealth creation.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg"
              alt="Stock market charts and graphs on a screen, representing equity portfolio advisory"
              fill
              className="object-cover"
              data-ai-hint="stock market chart"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Investing directly in the stock market requires careful analysis and strategic planning. Our Equity Portfolio Advisory service provides you with personalized guidance based on thorough research and market insights. We help you identify high-potential stocks, build a diversified portfolio aligned with your risk tolerance, and actively manage your investments to maximize long-term growth.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Key Features</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Personalized Strategy:</span> Portfolio construction tailored to your financial goals, investment horizon, and risk profile.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Research-Driven Insights:</span> Recommendations based on in-depth fundamental and technical analysis of companies and market trends.</span>
              </li>
              <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Active Monitoring & Rebalancing:</span> Continuous tracking of your portfolio and timely adjustments to adapt to market conditions and maintain alignment with your goals.</span>
              </li>
              <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Regular Updates & Reviews:</span> Transparent reporting and periodic reviews to discuss performance and strategy.</span>
              </li>
              <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Focus on Long-Term Wealth:</span> Emphasis on quality stocks and disciplined investing for sustainable wealth creation.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-8 sm:!mt-10 !mb-3 sm:!mb-4 text-left">Who Is This For?</h2>
             <p>
               This service is ideal for investors who want direct exposure to the equity market but seek professional expertise for stock selection and portfolio management. It's suitable for both experienced investors looking for enhanced advisory and those new to direct equity investing.
             </p>


             <div className="text-center !mt-10 sm:!mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
               <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                  <Link href="/contact?service=EquityPortfolioAdvisory">
                    Discuss Your Equity Goals <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
