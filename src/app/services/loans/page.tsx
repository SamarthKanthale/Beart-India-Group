import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandCoins, ArrowRight, Home, GraduationCap, Library } from "lucide-react"; 
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loan Facilitation Services - Home, Education, MF | Beart India Group',
  description: 'Beart India Group assists in securing Home Loans, Education Loans, and Loans Against Mutual Funds. Expert guidance through the application process to find competitive terms.',
  keywords: ['loan services India', 'home loan assistance', 'education loan India', 'loan against mutual funds', 'Beart India Group loans', 'financial support India'],
  alternates: {
    canonical: '/services/loans',
  },
};


const loanServices = [
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

export default function LoansPage() {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
      <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
        <div className="flex items-center gap-2 mb-4">
            <HandCoins className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
            Loan Facilitation Services
            </CardTitle>
        </div>
        <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
          Guiding you through the process of securing various types of loans to meet your financial goals and requirements.
        </CardDescription>
      </CardHeader>
      <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
          <p>
            Whether you're looking to buy a home, fund your education, or leverage your existing investments, securing the right loan can be a complex process. Beart India assists clients by facilitating access to various loan products through our network of financial institution partners. We aim to simplify the application process and help you find competitive terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Our Loan Services</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {loanServices.map((service, index) => (
                <Link key={service.title} href={service.link} className="block group">
                    <div className="p-4 border rounded-lg bg-card h-full flex flex-col animate-in fade-in zoom-in-95 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                      <h3 className="flex items-center gap-2 font-semibold text-lg text-foreground mb-2 group-hover:text-primary">
                        <service.icon className="h-5 w-5 text-primary" /> {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-grow mb-3">
                        {service.description}
                      </p>
                      <span className="text-primary font-medium text-sm mt-auto self-start">Learn More <ArrowRight className="inline-block ml-1 h-4 w-4" /></span>
                    </div>
                </Link>
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Why Use Our Facilitation Services?</h2>
            <ul className="space-y-2 sm:space-y-3 list-disc list-inside text-xs sm:text-sm">
              <li><span className="font-semibold">Guidance:</span> Understand the different loan options and eligibility criteria.</li>
              <li><span className="font-semibold">Comparison:</span> Assistance in comparing offers from various lenders (where applicable).</li>
              <li><span className="font-semibold">Process Support:</span> Help in navigating the documentation and application process.</li>
              <li><span className="font-semibold">Leverage Network:</span> Access to loans facilitated through our partnerships.</li>
            </ul>
            <p className="text-sm italic mt-4">Disclaimer: Beart India Group acts as a facilitator and does not directly provide loans. Loan approval is subject to the terms and conditions of the respective financial institutions.</p>


            <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
              <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                <Link href="/contact?service=Loans">
                  Discuss Your Loan Requirements <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}

