import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from 'next';
import Image from "next/image";
import { TrendingUp, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'The Power of SIPs: Building Wealth One Step at a Time',
  description: 'Discover how Systematic Investment Plans (SIPs) help in wealth creation through rupee cost averaging and compounding, especially in volatile markets.',
  keywords: ['SIP', 'Systematic Investment Plan', 'wealth creation', 'rupee cost averaging', 'compounding', 'financial discipline', 'mutual funds', 'investing for beginners'],
  alternates: {
    canonical: '/blog/power-of-sips',
  },
};

export default function PowerOfSipsPage() {
  const pageTitleString = "The Power of SIPs: Building Wealth One Step at a Time";
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
            Published: April 20, 2025 | Read Time: 4 min
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg mb-6 sm:mb-8">
            <Image
              src="https://images.pexels.com/photos/8062358/pexels-photo-8062358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="A sapling growing into a tree, symbolizing gradual financial growth through SIPs"
              fill
              className="object-cover"
              data-ai-hint="growth sapling"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 text-left">
            <p className="lead text-base sm:text-lg">
              Systematic Investment Plans (SIPs) are a disciplined approach to investing, allowing individuals to invest fixed amounts regularly. This method is especially effective in volatile markets, as it averages out the cost of investments over time.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-3 sm:!mb-4">Key Insights</h2>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <BarChart3 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">Rupee Cost Averaging</h3>
                  <p className="text-sm sm:text-base">Investing regularly means buying more units when prices are low and fewer when prices are high, reducing the average cost per unit.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">Compounding Benefits</h3>
                  <p className="text-sm sm:text-base">Reinvesting returns leads to exponential growth over time.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">Financial Discipline</h3>
                  <p className="text-sm sm:text-base">SIPs encourage regular saving and investing habits, essential for long-term wealth creation.</p>
                </div>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-3 sm:!mb-4">Real-Life Application</h2>
            <p className="text-sm sm:text-base">
              An investor starting a monthly SIP of ₹5,000 in a diversified mutual fund in 2015 would have invested ₹6,00,000 over ten years. Assuming an average annual return of 12%, the investment would grow to approximately ₹11,61,695 by 2025.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-3 sm:!mb-4">Conclusion</h2>
            <p className="text-sm sm:text-base">
              SIPs are a powerful tool for building wealth over time. Their simplicity and effectiveness make them suitable for investors of all levels.
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


