import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Server, Heart, Users, FileText, Mail, Phone, MessageSquare, TrendingUp, HandCoins, CodeXml, Award, Brain } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Image from "next/image";
import { ClientWrapper } from "@/components/layout/client-wrapper";


export const metadata: Metadata = {
  title: 'Beart India Group - Smart Investments & Digital Solutions',
  description: 'Empowering India with expert financial consultancy (Mutual Funds, Equity, PMS, AIF) and scalable digital solutions (Hosting, Google Workspace) for individuals and SMEs. Partnered with Aditya Birla Money.',
  keywords: ['Beart India Group', 'Financial Advisor India', 'Investment India', 'Software Solutions India', 'Mutual Funds', 'Equity Advisory', 'PMS', 'AIF', 'NRI Investments', 'SME Digital', 'Aditya Birla Money', 'Financial Planning', 'Wealth Management'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Beart India Group - Your Partner for Financial & Digital Growth',
    description: 'Discover comprehensive investment advisory and digital services in India with Beart India Group.',
    url: 'https://beartindia.com', 
    type: 'website',
    images: [
      {
        url: '/assets/beart-india-og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Beart India Group Services Overview',
      },
    ],
  },
   twitter: {
    card: 'summary_large_image',
    title: 'Beart India Group - Smart Investments & Digital Solutions',
    description: 'Expert financial consultancy and cutting-edge software services for growth in the digital era.',
    images: ['/assets/beart-india-twitter-image.png'], 
  },
};


export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      {/* Hero Section */}
      <section
        className="relative py-24 sm:py-32 md:py-48 bg-cover bg-center animate-in fade-in duration-1000"
      >
        <Image
          src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Team collaborating on a project - Beart India Group Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          data-ai-hint="team collaboration"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content container */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 text-center max-w-4xl h-full flex flex-col justify-content-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-white animate-in fade-in slide-in-from-top-8 duration-1000">
            Empowering India with Smart Investments & Scalable Digital Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-10 animate-in fade-in slide-in-from-top-10 duration-1000 delay-200">
            Expert financial consultancy and cutting-edge software services to help individuals and businesses grow confidently in the digital era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-content-center animate-in fade-in zoom-in-90 duration-1000 delay-400">
             <Button size="lg" className="btn-cta-custom transform transition-transform hover:scale-105 text-sm sm:text-base" asChild>
              <Link href="/divisions/investment-solutions">
                Start Investing Today <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button size="lg" className="btn-cta-custom transform transition-transform hover:scale-105 text-sm sm:text-base" asChild>
               <Link href="/divisions/software-solutions">
                 Build Your Digital Presence <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
               </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Gradient Separator */}
      <div className="h-12 sm:h-16 md:h-24 bg-gradient-to-b from-background via-secondary/50 to-card"></div>


       {/* Your Trusted Partner in Growth Section - Commented out as per user request
        <section className="py-12 md:py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">Your Trusted Partner in Growth</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               <Card className="flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-200 duration-500 p-4 sm:p-6">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-primary">
                      <HandCoins className="h-5 w-5 sm:h-6 sm:w-6" />
                      Strategic Financial Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm sm:text-base">
                      We analyze your financial goals and risk appetite to create personalized investment strategies that align with your vision for the future.
                    </p>
                  </CardContent>
               </Card>

               <Card className="flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-400 duration-500 p-4 sm:p-6">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-primary">
                      <CodeXml className="h-5 w-5 sm:h-6 sm:w-6" /> 
                      Digital Transformation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Our software solutions help businesses establish a strong online presence with reliable hosting, professional email services, and technical support.
                    </p>
                  </CardContent>
               </Card>

                <Card className="flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-600 duration-500 p-4 sm:p-6">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-primary">
                      <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                      Industry Certified
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Our team consists of certified professionals in finance and technology, ensuring you receive expert guidance and solutions tailored to your needs.
                    </p>
                  </CardContent>
               </Card>
             </div>
          </div>
        </section>
        */}


      {/* Our Divisions */}
      <section className="py-12 md:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">Our Divisions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             <Link href="/divisions/investment-solutions" className="block rounded-lg animate-in fade-in zoom-in-95 delay-200 duration-500">
                <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 p-4 sm:p-6 bg-card">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-[hsl(var(--accent-investment))] whitespace-nowrap">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                      Investment Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                       Guiding you towards financial growth with expert advice and personalized strategies.
                     </p>
                    <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm list-disc list-inside">
                      <li>Mutual Fund Planning</li>
                      <li>Equity Portfolio Advisory</li>
                      <li>NRI Investment Services</li>
                      <li>Wealth Building Workshops</li>
                    </ul>
                  </CardContent>
                   <div className="p-4 sm:p-6 pt-0 mt-auto text-left">
                      <span className="text-xs sm:text-sm font-medium text-[hsl(var(--accent-investment))]"> 
                        Learn More <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                      </span>
                   </div>
                </Card>
             </Link>

             <Link href="/divisions/software-solutions" className="block rounded-lg animate-in fade-in zoom-in-95 delay-400 duration-500">
                <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 p-4 sm:p-6 bg-card">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-[hsl(var(--accent-software))] whitespace-nowrap"> 
                      <Server className="h-5 w-5 sm:h-6 sm:w-6" />
                      Software Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                      Providing reliable and scalable digital infrastructure for your business needs.
                    </p>
                    <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm list-disc list-inside">
                      <li>Website Hosting & Domain</li>
                      <li>Google Workspace</li>
                      <li>SME Digital Launch Pack</li>
                      <li>Technical Consulting</li>
                    </ul>
                  </CardContent>
                   <div className="p-4 sm:p-6 pt-0 mt-auto text-left">
                      <span className="text-xs sm:text-sm font-medium text-[hsl(var(--accent-software))]"> 
                        Learn More <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                      </span>
                   </div>
                </Card>
             </Link>

            <Link href="/divisions/beart-foundation" className="block rounded-lg animate-in fade-in zoom-in-95 delay-600 duration-500">
              <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 p-4 sm:p-6 bg-card">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-primary whitespace-nowrap">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                    Beart Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                    Our non-profit initiative fostering mental well-being and supporting community upliftment through social causes.
                  </p>
                  <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm list-disc list-inside">
                    <li>Mental Health & Counselling</li>
                    <li>Sports Promotion & Scholarships</li>
                    <li>Elderly Care Support</li>
                    <li>Community Outreach Programs</li>
                  </ul>
                </CardContent>
                <div className="p-4 sm:p-6 pt-0 mt-auto text-left">
                    <span className="text-xs sm:text-sm font-medium text-primary">
                      Learn More <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

       {/* Why Trust Us & Testimonials Section - Wrapped in ClientWrapper */}
      <ClientWrapper>
        <section className="py-12 md:py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">We Deliver Trust, Not Just Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 sm:mb-12">
              <div className="text-center animate-in fade-in zoom-in-95 delay-100 duration-500 p-2">
                 <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Guidance leading to informed investment decisions.</p>
              </div>
              <div className="text-center animate-in fade-in zoom-in-95 delay-200 duration-500 p-2">
                <Server className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" /> 
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Certified Partner</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Proudly partnered with Aditya Birla Money.</p>
              </div>
              <div className="text-center animate-in fade-in zoom-in-95 delay-300 duration-500 p-2">
                 <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" /> 
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Affordable Innovation</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Best-in-class services at accessible prices.</p>
              </div>
              <div className="text-center animate-in fade-in zoom-in-95 delay-400 duration-500 p-2">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Expert-Led Teams</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Industry-certified professionals in finance and tech.</p>
              </div>
              <div className="text-center animate-in fade-in zoom-in-95 delay-500 duration-500 p-2">
                <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">NRI Focus</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Specialized services tailored to the global Indian.</p>
              </div>
              <div className="text-center animate-in fade-in zoom-in-95 delay-600 duration-500 p-2">
                <MessageSquare className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Reliable Support</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Dedicated assistance whenever you need it.</p>
              </div>
            </div>

            {/* Testimonials */}
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-200 duration-500 bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                     <Image src="https://picsum.photos/seed/nikhil/50/50" alt="Portrait of Nikhil Shah" width={40} height={40} className="rounded-full" data-ai-hint="person portrait" loading="lazy" />
                      <div>
                        <p className="italic text-muted-foreground text-sm sm:text-base mb-2">"Beart India helped me start my mutual fund journey with confidence. Their support is phenomenal.”</p>
                        <p className="font-semibold text-xs sm:text-sm">Nikhil Shah, Pune</p>
                      </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-400 duration-500 bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                      <Image src="https://picsum.photos/seed/rekha/50/50" alt="Portrait of Rekha Iyer" width={40} height={40} className="rounded-full" data-ai-hint="business portrait" loading="lazy" />
                      <div>
                        <p className="italic text-muted-foreground text-sm sm:text-base mb-2">“Smooth onboarding, great uptime, and genuine advice—what else do you need from a software partner?”</p>
                        <p className="font-semibold text-xs sm:text-sm">Rekha Iyer, Mumbai</p>
                      </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-in fade-in zoom-in-95 delay-600 duration-500 bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Image src="https://picsum.photos/seed/amit/50/50" alt="Portrait of Amit Patel" width={40} height={40} className="rounded-full" data-ai-hint="professional portrait" loading="lazy" />
                    <div>
                      <p className="italic text-muted-foreground text-sm sm:text-base mb-2">"The technical consulting provided by Beart India was invaluable in scaling our infrastructure. Highly recommended!"</p>
                      <p className="font-semibold text-xs sm:text-sm">Amit Patel, Bengaluru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ClientWrapper>


       {/* Contact Section - Wrapped in ClientWrapper */}
      <ClientWrapper>
        <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">Let’s Build Your Future, Together</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
              Whether you’re looking to grow your wealth or digitize your business, we’re here to guide you.
            </p>
            <div className="flex flex-col items-center gap-3 sm:gap-4 animate-in fade-in zoom-in-90 duration-1000 delay-400">
              <Button size="lg" className="w-full max-w-xs sm:max-w-sm transform transition-transform hover:scale-105 text-sm sm:text-base btn-cta-custom" asChild>
                <Link href="/contact?service=Consultation"> 
                  <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Schedule a Free Consultation
                </Link>
              </Button>

              <div className="flex flex-col sm:flex-row flex-wrap justify-content-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                  <Button size="lg" className="btn-cta-custom transform transition-transform hover:scale-105 text-sm sm:text-base" asChild>
                    <Link href="https://wa.me/919145656666" target="_blank"> 
                      <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> WhatsApp Us (+91-9145656666)
                    </Link>
                  </Button>
                  <Button size="lg" className="btn-cta-custom transform transition-transform hover:scale-105 text-sm sm:text-base" asChild>
                    <Link href="tel:+919145656666"> 
                      <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Call +91-9145656666
                    </Link>
                  </Button>
                  <Button size="lg" className="btn-cta-custom transform transition-transform hover:scale-105 text-sm sm:text-base" asChild>
                    <Link href="mailto:info@beartindia.com">
                      <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Email: info@beartindia.com
                    </Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>
      </ClientWrapper>
    </div>
  );
}
