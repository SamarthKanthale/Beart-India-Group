import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from 'next';
import Image from "next/image";
import { BarChartBig, CheckSquare, TrendingUpIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Understanding Nifty 50: A Barometer of India’s Economic Health',
  description: 'Explore the Nifty 50 index, its composition, and its role as an investment benchmark and indicator of market sentiment and India’s economic health.',
  keywords: ['Nifty 50', 'Indian stock market', 'economic health India', 'investment benchmark', 'market sentiment', 'sector representation', 'stock market basics'],
  alternates: {
    canonical: '/blog/understanding-nifty-50',
  },
};

export default function UnderstandingNifty50Page() {
  const pageTitleString = "Understanding Nifty 50: A Barometer of India’s Economic Health";
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
            Published: February 28, 2025 | Read Time: 6 min
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg mb-6 sm:mb-8">
            <Image
              src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="A dashboard gauge labeled ‘Nifty 50’, indicating market performance"
              fill
              className="object-cover"
              data-ai-hint="dashboard gauge"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 text-left">
            <p className="lead text-base sm:text-lg">
              The Nifty 50 index comprises 50 of India’s largest and most liquid stocks across various sectors. It serves as a benchmark for the Indian equity market and reflects the country’s economic health.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-3 sm:!mb-4">Key Insights</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <BarChartBig className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">Sector Representation</h3>
                  <p className="text-sm sm:text-base">The index includes companies from sectors like IT, finance, energy, and consumer goods, providing a comprehensive market overview.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">Investment Benchmark</h3>
                  <p className="text-sm sm:text-base">Many mutual funds and ETFs use the Nifty 50 as a benchmark, making it a critical reference point for investors.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUpIcon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">Market Sentiment Indicator</h3>
                  <p className="text-sm sm:text-base">Movements in the Nifty 50 often indicate broader market trends and investor sentiment.</p>
                </div>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-3 sm:!mb-4">Real-Life Application</h2>
            <p className="text-sm sm:text-base">
              In 2020, during the pandemic-induced market crash, the Nifty 50 fell significantly. However, by the end of 2021, it had recovered and reached new highs, reflecting the resilience of the Indian economy and the importance of long-term investment perspectives.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-3 sm:!mb-4">Conclusion</h2>
            <p className="text-sm sm:text-base">
              Understanding the Nifty 50 provides valuable insights into market dynamics and economic trends, aiding investors in making informed decisions.
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


