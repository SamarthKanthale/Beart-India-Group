import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, CheckCircle, Percent, FileText, Users, Calculator, Search } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Home Loans - Realize Your Dream | Beart India Group',
  description: 'Secure competitive home loans with Beart India Group. Guidance on eligibility, documentation, and application process for purchasing or constructing your house.',
  keywords: ['home loans India', 'housing finance', 'property loan', 'mortgage India', 'Beart India loans', 'EMI calculator'],
  alternates: {
    canonical: '/services/loans/home-loans',
  },
};

export default function HomeLoansPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-xl animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
            <Home className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
              Home Loans
            </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Facilitating competitive home loans to help you realize your dream of owning a house, with guidance through the application process.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/31425035/pexels-photo-31425035/free-photo-of-hand-holding-house-key-above-wallet-with-coins.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hand holding house key above wallet with coins"
              fill
              className="object-cover"
              data-ai-hint="house key wallet"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Buying a home is one of the most significant financial decisions in life. A home loan provides the necessary financial assistance to purchase or construct a house. Navigating the various loan options, interest rates, and documentation requirements can be overwhelming. We assist you in finding the right home loan product and guide you through the process.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Our Home Loan Services</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">EMI Calculators:</span> Estimate your potential Equated Monthly Installment based on loan amount, rate, and tenure.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Pre-Eligibility Checker:</span> Assess your likely loan eligibility based on income and credit profile (API integration needed - requires partnership with lenders like HDFC, ICICI, CredAvenue).</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Document Checklist &amp; Support:</span> Providing a comprehensive list of required documents (KYC, income proof, property papers) and guidance.</span>
              </li>
              <li className="flex items-start gap-2">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Lender Tie-Ups &amp; Comparison:</span> Facilitating connections with partner banks/NBFCs and helping compare their offers.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Tools &amp; Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Link href="/calculators/emi" className="block w-full h-full">
                <Button variant="outline" className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent w-full h-full flex flex-col items-start justify-start text-left text-sm sm:text-base">
                  <Calculator className="h-5 w-5 sm:h-6 sm:w-6 mb-2 text-primary" />
                  <h4 className="font-semibold text-foreground">Home Loan EMI Calculator</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground overflow-visible whitespace-normal break-words">Estimate your monthly EMI payments.</p>
                  <span className="text-primary font-medium text-xs sm:text-sm mt-auto self-start">Open Calculator <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" /></span>
                </Button>
              </Link>

              <div className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent animate-in zoom-in-95 duration-500 delay-100 flex flex-col items-start justify-start text-left">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mb-2 text-primary" />
                <h4 className="font-semibold text-foreground text-sm sm:text-base">Eligibility Check (Coming Soon)</h4>
                <p className="text-xs sm:text-sm text-muted-foreground overflow-visible whitespace-normal break-words">Get a quick preliminary eligibility assessment.</p>
                <Button variant="link" size="sm" className="p-0 h-auto text-primary text-xs sm:text-sm mt-auto" asChild disabled>
                  <Link href="#">Check Eligibility <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" /></Link>
                </Button>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">How We Help</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Percent className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Comparison of Offers:</span> Helping you compare interest rates, processing fees, tenure options, and other terms from various banks and financial institutions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Eligibility Assessment:</span> Assisting in understanding your loan eligibility based on income, credit score, and other factors.</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Documentation Guidance:</span> Providing clarity on the required documents for the loan application process.</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Application Support:</span> Guiding you through the application submission and follow-up process.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Loan Transfer Assistance:</span> Guidance on balance transfer options if you wish to switch your existing home loan to a lender offering better terms.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Types of Home Loans Facilitated</h2>
            <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm">
              <li>Purchase of New/Resale Property</li>
              <li>Construction Loans</li>
              <li>Home Improvement/Extension Loans</li>
              <li>Balance Transfer Loans</li>
              <li>Top-up Loans</li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Key Considerations</h2>
            <p>
              Factors like interest rate type (fixed vs. floating), loan tenure, processing fees, pre-payment charges, and lender credibility should be carefully evaluated. Home loans also offer significant tax benefits on both principal repayment and interest payment under relevant sections of the Income Tax Act.
            </p>
            <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
              <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                <Link href="/contact?service=HomeLoans">
                  Find Your Home Loan <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <LeadGenerationForm serviceTitle="Home Loans" className="mt-12 border-t pt-8" />
        </CardContent>
      </Card>
    </div>
  );
}
