import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'About Beart India Group',
  description: 'Learn about Beart India Group: our mission, vision, and commitment to providing smart investment strategies and scalable digital solutions. A trusted partner for financial growth and digital transformation in India.',
  keywords: ['Beart India Group about', 'financial advisory India', 'digital solutions India', 'investment company India', 'software services India', 'Aditya Birla Money sub-broker about'],
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6">
      <Card className="w-full max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-top-8 duration-700 text-left">About Beart India Group</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-4 sm:space-y-6 text-left">
            <p>
              Beart India Group is a multidisciplinary enterprise committed to empowering individuals and businesses through expert financial advisory and agile digital solutions. By integrating personal finance, modern technology, and social responsibility, we offer a comprehensive approach to building sustainable growth and lasting impact.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-2 sm:!mb-3">Our Mission</h2>
            <p>
                To bridge the gap between financial literacy and digital empowerment—helping people achieve long-term financial well-being while enabling businesses to thrive in an increasingly digital world.
            </p>
            

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-2 sm:!mb-3">Our Core Divisions</h2>

            <section>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">1. Financial Services & Investment Advisory</h3>
              <p>
                As a registered sub-broker with Aditya Birla Money, we deliver a full spectrum of financial solutions designed for every stage of wealth creation. Whether you&apos;re a first-time investor or managing complex portfolios, our expert team offers strategic guidance with a personalized touch.
              </p>
              <h4 className="text-base sm:text-lg font-medium text-foreground mt-3 sm:mt-4 mb-2">Our Services Include:</h4>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                <li>Mutual Funds and SIP Planning</li>
                <li>Equity Portfolio Management</li>
                <li>Alternative Investment Funds (AIF)</li>
                <li>Portfolio Management Services (PMS)</li>
                <li>Smallcase Investments and NCDs</li>
                <li>Life and Health Insurance Planning</li>
                <li>Bonds, Fixed Deposits, and Invoice Discounting</li>
                <li>Home Loans, Education Loans, and Loans Against Mutual Funds</li>
              </ul>
              <p className="mt-2">
                We also offer dedicated expertise in India–US taxation, supporting NRIs and global investors in managing cross-border assets with compliance and efficiency.
              </p>
              <p className="mt-2">
                Through interactive financial workshops and tailored advisory sessions, we equip our clients with the knowledge and tools to make confident, informed financial decisions.
              </p>
            </section>

            <section className="!mt-4 sm:!mt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">2. Digital Solutions for SMEs</h3>
              <p>
                Our technology division enables small and mid-sized enterprises (SMEs) across India to build robust digital foundations. From basic web presence to full-scale digital operations, we offer solutions that grow with your business.
              </p>
              <h4 className="text-base sm:text-lg font-medium text-foreground mt-3 sm:mt-4 mb-2">Our Digital Services Include:</h4>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                <li>Domain Registration and Web Hosting</li>
                <li>Google Workspace Setup and Management</li>
                <li>Professional Website Design and Launch Packs</li>
                <li>Scalable Cloud-Based Infrastructure and Tools</li>
              </ul>
              <p className="mt-2">
                Designed for accessibility, reliability, and scalability, our solutions empower businesses to establish a strong online identity and compete effectively in the digital economy.
              </p>
            </section>

            <section className="!mt-4 sm:!mt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">3. Beart Foundation – Our Social Arm</h3>
              <p>
                At the heart of our group lies the Beart Foundation, a non-governmental, non-profit initiative focused on mental health, youth empowerment, and community development. The foundation embodies our commitment to social progress and emotional well-being.
              </p>
              <p className="mt-2">
                One of our flagship initiatives includes the development of a psychology-based productivity platform—designed to enhance mental clarity, focus, and personal effectiveness in everyday life. Through counselling, workshops, and outreach programs, the foundation strives to build a more compassionate and resilient society.
              </p>
            </section>


            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-6 sm:!mt-8 !mb-2 sm:!mb-3">Why Choose Beart India?</h2>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
              <li>Certified experts in finance, insurance, and technology</li>
              <li>Personalized support for individuals, families, and entrepreneurs</li>
              <li>Integrated solutions across investments, business, and wellness</li>
              <li>Transparent, ethical, and client-focused service approach</li>
              <li>Ongoing innovation with a vision for sustainable impact</li>
            </ul>

            <p className="!mt-4 sm:!mt-6">
              At Beart India, we go beyond offering services—we provide clarity, confidence, and progress. Whether you&apos;re planning for your future, growing your assets, or taking your business online, we are here to help you build something that lasts.
            </p>
             <div className="text-center !mt-10 sm:!mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
               <Button size="lg" className="text-sm sm:text-base btn-cta-custom" asChild>
                  <Link href="/contact">
                    Contact Us For More Info <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

