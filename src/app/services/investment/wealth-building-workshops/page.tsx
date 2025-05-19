import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, CheckCircle, BookOpen, TrendingUp, Lightbulb } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Wealth Building Workshops - Beart India Investment Solutions',
  description: 'Empower yourself with financial literacy through Beart India\'s interactive workshops on investment fundamentals, mutual funds, stock markets, and financial planning.',
  keywords: ['wealth building workshops', 'financial literacy India', 'investment education', 'mutual fund workshop', 'stock market basics', 'Beart India workshops'],
  alternates: {
    canonical: '/services/investment/wealth-building-workshops',
  },
};


export default function WealthBuildingWorkshopsPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <Users className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
               Wealth Building Workshops
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Empowering individuals with the knowledge and skills needed to make informed investment decisions and build long-term financial security.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/6285124/pexels-photo-6285124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="People attending a financial literacy workshop"
              fill
              className="object-cover"
              data-ai-hint="workshop people"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Financial literacy is the foundation of successful wealth building. Our workshops are designed to demystify the world of investments, equipping participants with practical knowledge and actionable strategies. Whether you are a beginner taking your first steps or an experienced investor looking to refine your approach, our sessions provide valuable insights.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Workshop Topics Include</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Investment Fundamentals:</span> Understanding different asset classes (equity, debt, gold, real estate), risk vs. return, and the power of compounding.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Mutual Funds Explained:</span> Types of mutual funds, how SIPs work, selecting the right funds, and common pitfalls to avoid.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Introduction to Stock Markets:</span> Basics of stock investing, understanding market indices, and fundamental vs. technical analysis overview.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Financial Planning Essentials:</span> Goal setting, budgeting, insurance planning, and integrating investments into a holistic financial plan.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-investment))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Behavioral Finance:</span> Understanding how emotions impact investment decisions and strategies to overcome common biases.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Who Should Attend?</h2>
             <p>
               These workshops are beneficial for anyone looking to improve their financial knowledge and investment skills, including salaried professionals, business owners, students, homemakers, and NRIs. We offer sessions tailored to different experience levels.
             </p>


             <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
               <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                  <Link href="/contact?interest=Workshops">
                    Inquire About Upcoming Workshops <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
