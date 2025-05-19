import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight, CheckCircle, Globe, Mail, Server } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SME Digital Launch Pack - Go Online Fast | Beart India Group',
  description: 'Essential all-in-one package for SMEs: domain name, basic website hosting, and professional email setup by Beart India Group. Establish your online presence quickly.',
  keywords: ['SME digital launch pack', 'small business website India', 'domain and hosting India', 'professional email SME', 'Beart India digital services'],
  alternates: {
    canonical: '/services/software/sme-digital-launch-pack',
  },
};


export default function SMEDigitalLaunchPackPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <Package className="h-8 w-8 text-[hsl(var(--accent-software))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-software))]">
               SME Digital Launch Pack
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Your essential all-in-one package to quickly establish a professional digital presence for your small or medium enterprise.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Getting your business online doesn't have to be complicated or expensive. Our SME Digital Launch Pack provides the foundational elements you need to create a credible and professional online identity, allowing you to connect with customers and grow your business in the digital age.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">What's Included?</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Domain Name Registration:</span> We help you choose and register a unique domain name (e.g., www.yourcompany.com) for one year.</span>
              </li>
              <li className="flex items-start gap-2">
                <Server className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Basic Website Hosting:</span> Reliable hosting for a simple website (e.g., a one-page site or basic WordPress setup) for one year, ensuring your site is accessible online.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Professional Email Setup:</span> Configuration of up to 5 professional email addresses using your domain (e.g., info@yourcompany.com) via Google Workspace or a similar service.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Basic Website Setup (Optional Add-on):</span> Assistance with setting up a simple one-page website or installing WordPress to get you started quickly.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Guidance & Support:</span> Initial guidance on managing your domain, hosting, and email accounts.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Benefits for SMEs</h2>
             <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm">
                 <li>Establish a professional online presence quickly and affordably.</li>
                 <li>Build credibility and trust with customers.</li>
                 <li>Secure your brand's unique domain name.</li>
                 <li>Communicate professionally with custom email addresses.</li>
                 <li>Provides a foundation for future digital growth.</li>
             </ul>


             <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
               <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                  <Link href="/contact?service=SMELaunchPack">
                    Launch Your Digital Presence <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
