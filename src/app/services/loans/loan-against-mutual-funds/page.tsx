

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Library, ArrowRight, CheckCircle, Banknote, Zap, Percent, HelpCircle, Calculator } from "lucide-react";
import Link from "next/link";
import { LeadGenerationForm } from "@/components/forms/lead-generation-form"; 
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Loan Against Mutual Funds (LAMF) - Beart India Group',
  description: 'Leverage your mutual fund investments with Beart India Group. Secure funds via Loan Against Mutual Funds (LAMF) without liquidating your portfolio. Quick processing.',
  keywords: ['loan against mutual funds', 'LAMF India', 'pledge mutual funds', 'overdraft against MF', 'Beart India loans', 'Bajaj Finserv LAMF', 'HDFC LAMF'],
  alternates: {
    canonical: '/services/loans/loan-against-mutual-funds',
  },
};


export default function LoanAgainstMutualFundsPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
    <Card className="w-full max-w-4xl mx-auto shadow-xl animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
      <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
        <div className="flex items-center gap-2 mb-4">
            <Library className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
            Loan Against Mutual Funds (LAMF)
            </CardTitle>
        </div>
        <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
          Leverage your mutual fund investments to secure funds for various financial needs without liquidating your portfolio.
        </CardDescription>
      </CardHeader>
      <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
          <Image
            src="https://img.freepik.com/free-photo/young-happy-woman-shaking-hands-with-real-estate-agent-while-her-husband-is-using-touchpad-office_637285-2822.jpg?t=st=1746882784~exp=1746886384~hmac=a311e757a202de2da1f6b3658a98b9fd01591b105e87fd9eac4365e876996070&w=996"
            alt="Loan Against Mutual Funds concept image"
            fill
            className="object-cover"
            data-ai-hint="financial agreement handshake"
            priority
          />
        </div>
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6 mb-12">
          <p>
            Loan Against Mutual Funds (LAMF) allows you to pledge your mutual fund units as collateral to obtain a loan from banks or Non-Banking Financial Companies (NBFCs). This is an overdraft facility, meaning you get a credit limit based on the value of your pledged holdings, and you pay interest only on the amount utilized.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Our LAMF Services</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">MF Eligibility Checker:</span> Helping you identify which funds in your portfolio are typically accepted as collateral by lenders.</span>
              </li>
                <li className="flex items-start gap-2">
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                  {/* Replace with actual API call logic below */}
                <span><span className="font-semibold text-foreground">Instant Quote Generator:</span> Providing indicative loan limits and interest rates based on your pledged holdings (API integration required).</span>
              </li>
                <li className="flex items-start gap-2">
                <Banknote className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Lender Connect:</span> Facilitating connections with partner NBFCs and Banks offering LAMF facilities (e.g., Bajaj Finserv, HDFC Bank, ICICI Bank).</span>
              </li>
                <li className="flex items-start gap-2">
                <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Process Guidance:</span> Explaining the pledging process and documentation required by lenders.</span>
              </li>
            </ul>


          <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">How it Works &amp; Key Features</h2>
          <ul className="space-y-2 sm:space-y-3 list-none">
                  <li className="flex items-start gap-2">
                  <Library className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Pledging Units:</span> Your eligible mutual fund units (usually equity and sometimes debt funds) are pledged with the lender.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Banknote className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                  <span><span className="font-semibold text-foreground">Overdraft Facility:</span> You receive a credit limit (typically 50-70% of the value of pledged equity units, higher for debt units). You can withdraw funds up to this limit as needed.</span>
                </li>
                <li className="flex items-start gap-2">
                    <Percent className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Interest on Utilized Amount:</span> Interest is charged only on the amount withdrawn from the overdraft account and for the duration it is used.</span>
                </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">No Liquidation Needed:</span> Your investments continue to potentially grow even while pledged, as you don't sell the units. You remain entitled to dividends/bonuses.</span>
                </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Quick Processing:</span> Generally faster processing compared to unsecured loans, as it's secured against your investments.</span>
                </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 shrink-0" />
                    <span><span className="font-semibold text-foreground">Flexible Repayment:</span> Often involves servicing only the interest, with the principal adjustable against the overdraft limit or payable later.</span>
                </li>
          </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Use Cases</h2>
            <p>LAMF can be used for various short-term to medium-term financial requirements, such as:</p>
            <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm">
                  <li>Managing temporary cash flow mismatches.</li>
                  <li>Funding urgent personal expenses.</li>
                  <li>Making down payments or bridging finance needs.</li>
                  <li>Meeting business working capital requirements.</li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Important Considerations</h2>
            <p>
              Lenders apply a margin (haircut) to the value of units, meaning the loan limit is less than the market value. If the market value of pledged units falls significantly, the lender may ask for additional units to be pledged or for partial repayment (margin call). Interest rates are typically higher than home loans but potentially lower than personal loans.
            </p>
            <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
              <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                <Link href="/contact?service=LoanAgainstMutualFunds">
                  Explore LAMF Options <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
        </div>

          <LeadGenerationForm serviceTitle="Loan Against Mutual Funds (LAMF)" className="mt-12 border-t pt-8"/>

      </CardContent>
    </Card>
    </div>
  );
}
