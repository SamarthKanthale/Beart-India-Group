import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, CheckCircle, Lightbulb, Wrench, CloudCog, Network } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Consulting Services - Beart India Group',
  description: 'Expert technical consulting from Beart India Group. Guidance on digital strategy, infrastructure, technology stack, troubleshooting, and optimization.',
  keywords: ['technical consulting India', 'digital strategy consulting', 'IT infrastructure planning', 'technology stack advice', 'Beart India tech consulting'],
  alternates: {
    canonical: '/services/software/technical-consulting',
  },
};

export default function TechnicalConsultingPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <Code className="h-8 w-8 text-[hsl(var(--accent-software))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-software))]">
               Technical Consulting
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Expert guidance to navigate complex technology decisions, optimize your digital infrastructure, and solve technical challenges.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Making the right technology choices is critical for business efficiency and growth. Whether you're planning a new project, facing technical hurdles, or looking to optimize your existing setup, our Technical Consulting service provides the expertise you need to make informed decisions and achieve your objectives.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Areas of Expertise</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Digital Strategy & Roadmap:</span> Aligning technology initiatives with business goals, identifying opportunities, and creating a clear roadmap for implementation.</span>
              </li>
              <li className="flex items-start gap-2">
                <CloudCog className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Infrastructure Planning:</span> Advising on hosting solutions (shared, VPS, cloud), server configurations, scalability planning, and cost optimization.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Network className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Technology Stack Selection:</span> Guidance on choosing the right programming languages, frameworks, databases, and tools for your web applications or software projects.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Troubleshooting & Optimization:</span> Diagnosing performance bottlenecks, security vulnerabilities, and other technical issues, and recommending solutions.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Vendor & Solution Evaluation:</span> Providing unbiased assessments of third-party software, platforms, or service providers.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">How It Works</h2>
             <p>
               Our consulting engagements typically start with a discovery session to understand your specific needs and challenges. We then provide tailored recommendations, strategic advice, or hands-on support, depending on the scope of the engagement. We focus on practical, cost-effective solutions aligned with your business objectives.
             </p>


             <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
               <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                  <Link href="/contact?service=TechConsulting">
                    Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
