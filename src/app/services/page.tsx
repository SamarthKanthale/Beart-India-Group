import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Server, ShieldCheck, HandCoins } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Beart India Group',
  description: 'Discover comprehensive financial, software, insurance, and loan services offered by Beart India Group. Tailored solutions for individuals and businesses.',
  keywords: ['Beart India Group services', 'financial advisory India', 'software solutions India', 'insurance plans', 'loan assistance', 'investment services'],
  alternates: {
    canonical: '/services',
  },
};

const serviceCategories = [
  {
    title: "Investment Solutions",
    icon: TrendingUp,
    description: "Expert financial advisory and a wide range of investment products to grow your wealth.",
    link: "/services/investment",
    colorClass: "text-[hsl(var(--accent-investment))]",
  },
  {
    title: "Software Solutions",
    icon: Server,
    description: "Reliable digital infrastructure including hosting, Google Workspace, and technical consulting for SMEs.",
    link: "/services/software",
    colorClass: "text-[hsl(var(--accent-software))]",
  },
  {
    title: "Insurance Solutions",
    icon: ShieldCheck,
    description: "Comprehensive life and health insurance plans to protect your financial well-being.",
    link: "/services/insurance",
    colorClass: "text-primary", // Using primary for insurance
  },
  {
    title: "Loan Facilitation",
    icon: HandCoins,
    description: "Assistance in securing home, education, and loans against mutual funds to meet your needs.",
    link: "/services/loans",
    colorClass: "text-primary", // Using primary for loans
  },
];

export default function ServicesOverviewPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Our Comprehensive Services
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Beart India Group offers a holistic suite of services designed to empower your financial journey and digital presence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {serviceCategories.map((category, index) => (
          <Link key={category.title} href={category.link} className="block group">
            <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <category.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${category.colorClass}`} />
                  <CardTitle className={`text-xl sm:text-2xl font-semibold ${category.colorClass}`}>
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {category.description}
                </p>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button variant="link" className={`p-0 h-auto font-medium text-sm sm:text-base ${category.colorClass} group-hover:underline`}>
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
        <Button size="lg" className="btn-cta-custom text-base sm:text-lg" asChild>
          <Link href="/contact">
            Get in Touch for a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

