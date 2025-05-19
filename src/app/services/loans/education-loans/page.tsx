import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Banknote,
  Globe,
  FileText,
  Calculator,
  Search,
  Users,
  Percent,
} from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Education Loans - Fund Your Future | Beart India Group",
  description:
    "Secure education loans for studies in India and abroad. Beart India Group assists with eligibility, documentation, and finding the right lender.",
  keywords: [
    "education loans India",
    "study abroad loans",
    "student loans",
    "HDFC education loan",
    "ICICI education loan",
    "Beart India education finance",
    "EMI calculator",
  ],
  alternates: {
    canonical: "/services/loans/education-loans",
  },
};

export default function EducationLoansPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-xl animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Education Loans</CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Facilitating education loans to support academic aspirations in India and abroad, ensuring finances don't hinder potential.
          </CardDescription>
        </CardHeader>

        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12">
            <Image
              src="https://img.freepik.com/free-vector/tiny-students-sitting-near-books-getting-university-degree-paying-money-education-business-flat-vector-illustration-college-scholarship-finance-system-school-fee-economy-student-loan-concept_74855-21037.jpg?t=st=1746882324~exp=1746885924~hmac=849b5403cb8eee44c3d318e9ba2e0995f865c518423384638b1be21967c9ba1c&w=826"
              alt="Students with books and money for education loan concept"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
            <p>
              Pursuing higher education, whether in India or overseas, often involves significant financial investment. Education loans bridge the gap between your aspirations and financial constraints, covering tuition fees, living expenses, travel, and other related costs. We assist students and parents in navigating the education loan landscape.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Our Education Loan Services</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2 animate-in fade-in slide-in-from-left-12 duration-500 delay-300">
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span>
                  <span className="font-semibold text-foreground">EMI Calculators:</span> Estimate your monthly loan repayment based on loan amount, interest rate, and tenure.
                </span>
              </li>
              <li className="flex items-start gap-2 animate-in fade-in slide-in-from-left-12 duration-500 delay-400">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span>
                  <span className="font-semibold text-foreground">Pre-Eligibility Checker:</span> Assess your likely loan eligibility based on basic criteria (API integration needed - requires partnership with lenders like HDFC, ICICI, CredAvenue).
                </span>
              </li>
              <li className="flex items-start gap-2 animate-in fade-in slide-in-from-left-12 duration-500 delay-500">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span>
                  <span className="font-semibold text-foreground">Document Checklist &amp; Support:</span> Providing a clear list of required documents and assistance in preparing the application.
                </span>
              </li>
              <li className="flex items-start gap-2 animate-in fade-in slide-in-from-left-12 duration-500 delay-600">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span>
                  <span className="font-semibold text-foreground">Lender Comparison:</span> Helping compare offers, interest rates, and terms from various banks and NBFCs we partner with.
                </span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Tools &amp; Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {/* Updated to Link instead of Dialog */}
              <Link href="/calculators/emi" className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent animate-in zoom-in-95 duration-500 delay-800 w-full h-full flex flex-col items-start justify-start text-left no-underline">
                <Calculator className="h-5 w-5 sm:h-6 sm:w-6 mb-2 text-primary" />
                <h4 className="font-semibold text-foreground">Education Loan EMI Calculator</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Estimate your monthly EMI payments.</p>
                <span className="text-primary font-medium text-xs sm:text-sm mt-auto self-start">
                  Open Calculator <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </span>
              </Link>

              <div className="p-4 border rounded-lg bg-secondary transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent animate-in zoom-in-95 duration-500 delay-900 flex flex-col items-start justify-start text-left">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mb-2 text-primary" />
                <h4 className="font-semibold text-foreground text-sm sm:text-base">Eligibility Check (Coming Soon)</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Get a quick preliminary eligibility assessment.</p>
                <Button variant="link" size="sm" className="p-0 h-auto text-primary text-xs sm:text-sm mt-auto" asChild disabled>
                  <Link href="#">Check Eligibility <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" /></Link>
                </Button>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">How We Help</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-300">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Course & Institution Eligibility:</span> Help understanding eligibility based on the course and institution.</span>
              </li>
              <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-400">
                <Banknote className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Loan Amount & Coverage:</span> Advice on costs covered including tuition, travel, etc.</span>
              </li>
              <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-500">
                <Percent className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Interest Rates & Terms:</span> Comparison of rates, fees, moratoriums, and repayment structures.</span>
              </li>
              <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-600">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Collateral Requirements:</span> Clarity on when collateral is needed.</span>
              </li>
              <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-700">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Co-applicant/Guarantor:</span> Guidance on roles and responsibilities.</span>
              </li>
              <li className="flex items-start gap-2 animate-in fade-in slide-in-from-right-12 duration-500 delay-800">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Documentation & Application:</span> Full assistance with application process.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Key Benefits of Education Loans</h2>
            <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm">
              <li>Funds higher education without straining family savings.</li>
              <li>Covers a wide range of education-related expenses.</li>
              <li>Moratorium period allows repayment to start after course completion.</li>
              <li>Tax benefits on interest paid under Section 80E of the Income Tax Act.</li>
              <li>Builds credit history for the student.</li>
            </ul>

            <p>
              We partner with various financial institutions to help you find the most suitable education loan product tailored to your specific academic journey.
            </p>

            <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
              <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                <Link href="/contact?service=EducationLoans">
                  Discuss Your Education Loan Needs <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <LeadGenerationForm serviceTitle="Education Loans" className="mt-12 border-t pt-8 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-1000" />
        </CardContent>
      </Card>
    </div>
  );
}
