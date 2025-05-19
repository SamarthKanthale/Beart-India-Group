import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, BarChart3, Globe, Users, Briefcase, ScrollText, Package, Link as LinkIcon, ReceiptText, Home, GraduationCap, Library, Presentation, Umbrella, HeartPulse } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';
import { StockMarquee } from "@/components/layout/stock-marquee"; 

export const metadata: Metadata = {
  title: 'Investment Services - Grow Your Wealth | Beart India Group',
  description: 'Explore a range of investment services from Beart India Group, including Mutual Funds, Equity Advisory, NRI Services, AIF, PMS, NCDs, Smallcase, Bonds, and more. Achieve your financial goals with expert guidance.',
  keywords: ['investment services India', 'financial planning', 'mutual fund advisory', 'equity investments', 'NRI portfolio management', 'AIF India', 'PMS India', 'NCD investment', 'Smallcase portfolios', 'Beart India Group'],
  alternates: {
    canonical: '/services/investment',
  },
};


const investmentServices = [
    {
      title: "Mutual Fund Planning",
      icon: BarChart3,
      description: "Strategically select and manage mutual funds aligned with your financial goals, risk appetite, and investment horizon. We help simplify the complex choices.",
      link: "/services/investment/mutual-fund-planning",
    },
    {
      title: "Equity Portfolio Advisory",
      icon: TrendingUp,
      description: "Build and manage a robust equity portfolio with our expert, research-backed advisory services focused on long-term wealth creation and stock selection.",
      link: "/services/investment/equity-portfolio-advisory",
    },
     {
      title: "NRI Investment Services",
      icon: Globe,
      description: "Seamlessly invest in India from anywhere in the world with specialized services for Non-Resident Indians, navigating regulations and opportunities.",
      link: "/services/investment/nri-investment-services",
    },
     {
      title: "Wealth Building Workshops",
      icon: Users,
      description: "Empower yourself with financial literacy through interactive workshops covering investment fundamentals, mutual funds, stock markets, and financial planning.",
      link: "/services/investment/wealth-building-workshops",
    },
    {
      title: "Alternative Investment Funds",
      icon: Briefcase,
      description: "Access sophisticated investment avenues like venture capital, private equity, and hedge funds. Minimum investment typically 1 Cr.",
      link: "/services/investment/alternative-investment-funds", 
    },
    {
      title: "Portfolio Management Services",
      icon: Presentation, 
      description: "Professional management of your equity portfolio tailored to your investment objectives. Minimum investment typically 50L.",
      link: "/services/investment/portfolio-management-services", 
    },
    {
      title: "Non-Convertible Debentures",
      icon: ScrollText,
      description: "Invest in corporate debt instruments offering potentially higher returns than traditional fixed deposits. Minimum investment typically 10L.",
      link: "/services/investment/non-convertible-debentures", 
    },
    {
      title: "Smallcase Portfolios",
      icon: Package,
      description: "Invest in curated baskets of stocks or ETFs based on specific themes, strategies, or ideas. Minimum investment typically 2.5L.",
      link: "/services/investment/smallcase-portfolios", 
    },
     {
      title: "Life Insurance",
      icon: Umbrella,
      description: "Secure your family's financial future with comprehensive life insurance plans.",
      link: "/services/insurance/life-insurance",
    },
    {
      title: "Health Insurance",
      icon: HeartPulse, 
      description: "Protect yourself and loved ones against rising medical costs with suitable health coverage.",
      link: "/services/insurance/health-insurance",
    },
    {
      title: "Bonds",
      icon: LinkIcon, 
      description: "Diversify your portfolio with government and corporate bonds offering fixed income streams.",
      link: "/services/investment/bonds", 
    },
    {
      title: "Invoice Discounting / FDs",
      icon: ReceiptText,
      description: "Explore alternative fixed-income options like invoice discounting and corporate fixed deposits.",
      link: "/services/investment/invoice-discounting", 
    },
    {
      title: "Home Loans",
      icon: Home,
      description: "Assistance in securing competitive home loans to fulfill your dream of owning a house.",
      link: "/services/loans/home-loans", 
    },
    {
      title: "Education Loans",
      icon: GraduationCap,
      description: "Facilitating education loans to support academic aspirations without financial burden.",
      link: "/services/loans/education-loans", 
    },
    {
      title: "Loan Against Mutual Funds",
      icon: Library, 
      description: "Leverage your mutual fund investments to avail loans for various financial needs.",
      link: "/services/loans/loan-against-mutual-funds", 
    },
];

const getProcessedTitle = (title: string) => {
  return title.replace(/\s*\(.*?\)\s*/g, '').trim();
};

export default function InvestmentServicesOverviewPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 w-full">
      <StockMarquee />
      <Card className="mx-auto shadow-none border-0 animate-in fade-in zoom-in-95 duration-500 w-full"> 
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
              <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))] whitespace-nowrap">
              Beart India Investment Solutions
              </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Comprehensive financial advisory and investment management services to help you achieve your wealth creation goals.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              At Beart India Investment Solutions, we partner with you to navigate the complexities of the financial markets. Our expert advisors, backed by Aditya Birla Money, provide personalized strategies and a wide array of investment products. We are committed to transparency, long-term growth, and empowering you with the knowledge to make confident financial decisions.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Explore Our Investment Services</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> 
                {investmentServices.map((service, index) => (
                  <Link key={service.title} href={service.link} className="block hover:shadow-md transition-shadow duration-200 rounded-lg group">
                      <div className="p-4 border rounded-lg bg-card h-full flex flex-col animate-in fade-in zoom-in-95 duration-500 text-left" style={{ animationDelay: `${index * 100}ms` }}>
                        <h4 className="flex items-center gap-2 font-semibold text-base sm:text-lg text-foreground mb-2 group-hover:text-[hsl(var(--accent-investment))]">
                          <service.icon className="h-5 w-5 text-[hsl(var(--accent-investment))]" /> {getProcessedTitle(service.title)}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground flex-grow mb-3">
                          {service.description} 
                        </p>
                        <span className="text-[hsl(var(--accent-investment))] font-medium text-xs sm:text-sm mt-auto self-start">Learn More <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" /></span>
                      </div>
                  </Link>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Why Partner with Us?</h2>
              <ul className="space-y-2 sm:space-y-3 list-disc list-inside text-xs sm:text-sm">
                <li><span className="font-semibold">Expert Guidance:</span> Leverage the knowledge of certified professionals partnered with Aditya Birla Money.</li>
                <li><span className="font-semibold">Personalized Approach:</span> Strategies tailored to your unique financial situation and aspirations.</li>
                <li><span className="font-semibold">Transparency & Trust:</span> Clear communication and ethical practices form the bedrock of our client relationships.</li>
                <li><span className="font-semibold">Long-Term Focus:</span> We prioritize sustainable growth and building lasting financial security for our clients.</li>
                <li><span className="font-semibold">Comprehensive Solutions:</span> A diverse range of products from mutual funds to specialized investments and loans.</li> 
              </ul>


              <div className="text-center !mt-10 sm:!mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
                <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                  <Link href="/contact?service=InvestmentSolutions">
                    Start Your Investment Journey <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
