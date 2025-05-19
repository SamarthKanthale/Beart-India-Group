import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Umbrella, HeartPulse } from "lucide-react"; 
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Solutions - Life & Health Coverage | Beart India Group',
  description: 'Protect your financial well-being with Beart India Group. Explore tailored Life Insurance and Health Insurance plans to secure what matters most.',
  keywords: ['insurance solutions India', 'life insurance plans', 'health insurance coverage', 'Beart India insurance services', 'financial protection'],
  alternates: {
    canonical: '/services/insurance',
  },
};

const insuranceServices = [
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
];

export default function InsurancePage() {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
      <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
        <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-8 w-8 text-[hsl(var(--accent-investment))]" />
            <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-investment))]">
            Insurance Solutions
            </CardTitle>
        </div>
        <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
          Protecting what matters most – your life, health, and financial well-being – through tailored insurance plans.
        </CardDescription>
      </CardHeader>
      <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
          <p>
            Insurance provides a crucial safety net against life's uncertainties. Whether it's safeguarding your family's future in your absence or ensuring access to quality healthcare without financial strain, the right insurance plan is a cornerstone of sound financial planning. Beart India helps you understand and choose appropriate insurance solutions.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Our Insurance Offerings</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {insuranceServices.map((service, index) => (
                <Link key={service.title} href={service.link} className="block hover:shadow-md transition-shadow duration-200 rounded-lg group">
                    <div className="p-4 border rounded-lg bg-card h-full flex flex-col animate-in fade-in zoom-in-95 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                      <h3 className="flex items-center gap-2 font-semibold text-lg text-foreground mb-2 group-hover:text-[hsl(var(--accent-investment))]">
                        <service.icon className="h-5 w-5 text-[hsl(var(--accent-investment))]" /> {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-grow mb-3">
                        {service.description}
                      </p>
                      <span className="text-[hsl(var(--accent-investment))] font-medium text-sm mt-auto self-start">Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" /></span>
                    </div>
                </Link>
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Why Choose Us for Insurance?</h2>
            <ul className="space-y-2 sm:space-y-3 list-disc list-inside text-xs sm:text-sm">
              <li><span className="font-semibold">Needs-Based Advice:</span> We help assess your requirements to suggest suitable coverage.</li>
              <li><span className="font-semibold">Plan Comparison:</span> Assistance in comparing features and premiums from various insurers.</li>
              <li><span className="font-semibold">Holistic Approach:</span> Integrating insurance planning within your overall financial strategy.</li>
              <li><span className="font-semibold">Claim Assistance Guidance:</span> Providing support information during the claim process (as per insurer guidelines).</li>
            </ul>
            <p className="text-sm italic mt-4">Disclaimer: Insurance is the subject matter of solicitation. Beart India Group acts as a facilitator/introducer for insurance products. Policy issuance is at the sole discretion of the insurance company.</p>


            <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
              <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                <Link href="/contact?service=Insurance">
                  Discuss Your Insurance Needs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}

