
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from 'next';
import Image from "next/image";
import { Lightbulb, TrendingUp, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Navigating Market Volatility: Turning Uncertainty into Opportunity',
  description: 'Learn how market volatility, such as the Nifty 50 drop on May 9, 2025, can present investment opportunities. Insights on market corrections and strategic investing.',
  keywords: ['market volatility', 'investment opportunity', 'Nifty 50', 'market corrections', 'strategic investment', 'diversification', 'India-Pakistan situation', 'financial growth'],
  alternates: {
    canonical: '/blog/navigating-market-volatility',
  },
};

export default function NavigatingMarketVolatilityPage() {
  const pageTitleString = "Navigating Market Volatility: Turning Uncertainty into Opportunity";
  const colonIndex = pageTitleString.indexOf(':');

  return (
    <div className="container mx-auto flex-grow py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <Card className="w-full max-w-3xl mx-auto shadow-xl animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary animate-in fade-in slide-in-from-top-8 duration-700">
            {colonIndex !== -1 ? (
              <>
                {pageTitleString.substring(0, colonIndex).trim()}
                <br />
                {pageTitleString.substring(colonIndex + 1).trim()}
              </>
            ) : (
              pageTitleString
            )}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-2 animate-in fade-in slide-in-from-top-10 duration-700 delay-100">
            Published: May 10, 2025 | Read Time: 5 min
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg mb-6 sm:mb-8">
            <Image
              src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Roller coaster with stock market symbols representing market ups and downs"
              fill
              className="object-cover"
              data-ai-hint="market volatility"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 text-left">
            <p className="lead text-base sm:text-lg">
              Recent geopolitical tensions, particularly the escalating India-Pakistan situation, have led to significant market volatility. On May 9, 2025, the Nifty 50 index dropped by 1.10%, closing at 24,008.00. Such fluctuations can be unsettling, but they also present unique opportunities for savvy investors.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-3 sm:!mb-4">Key Insights</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">Understanding Market Corrections</h3>
                  <p className="text-sm sm:text-base">Market downturns are natural and often temporary. Historically, markets have rebounded, offering substantial gains to those who remained invested.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">Strategic Investment</h3>
                  <p className="text-sm sm:text-base">Rather than reacting impulsively, consider this an opportunity to invest in fundamentally strong stocks at lower prices.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">Diversification is Crucial</h3>
                  <p className="text-sm sm:text-base">Spreading investments across various sectors can mitigate risks associated with market volatility.</p>
                </div>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-3 sm:!mb-4">Real-Life Application</h2>
            <p className="text-sm sm:text-base">
              Consider the 2020 market dip during the COVID-19 pandemic. Investors who maintained their positions or invested during the downturn saw significant returns as markets recovered in the following years.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-3 sm:!mb-4">Conclusion</h2>
            <p className="text-sm sm:text-base">
              While market volatility can be challenging, it also offers opportunities for wealth creation. Staying informed and making strategic decisions can turn uncertainty into financial growth.
            </p>
            
            <p className="!mt-8 text-sm italic">
              Note: For personalized investment strategies and more information, feel free to <Link href="/contact" className="text-primary hover:underline">reach out to Beart India’s expert advisors</Link>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
