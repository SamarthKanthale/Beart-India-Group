import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, CheckCircle, Server, ShieldCheck, Zap, Wrench } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Hosting & Domain Registration - Beart India Group',
  description: 'Secure your online identity with reliable domain registration and high-performance website hosting solutions from Beart India Group. Tailored for speed and uptime.',
  keywords: ['website hosting India', 'domain registration India', 'cPanel hosting', 'Plesk hosting', 'SSD hosting', 'Beart India hosting'],
  alternates: {
    canonical: '/services/software/website-hosting',
  },
};

export default function WebsiteHostingPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <Globe className="h-8 w-8 text-[hsl(var(--accent-software))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-software))]">
               Website Hosting & Domain Registration
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Secure your online identity with reliable domain registration and high-performance website hosting solutions tailored for speed and uptime.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Your website is your digital storefront. Ensuring it's always available, fast, and secure is crucial for your online success. Beart India offers robust hosting solutions and straightforward domain registration services to establish and maintain your unique online presence.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Hosting Features</h2>
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li className="flex items-start gap-2">
                <Server className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Reliable Infrastructure:</span> Hosted on stable servers with high uptime guarantees to keep your website accessible.</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                <span><span className="font-semibold text-foreground">Optimized Performance:</span> Configured for speed with features like SSD storage and optimized caching (depending on plan) to ensure fast loading times.</span>
              </li>
              <li className="flex items-start gap-2">
                 <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Security Measures:</span> Includes basic security protocols, with options for SSL certificates and enhanced security features.</span>
              </li>
               <li className="flex items-start gap-2">
                 <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Easy Management:</span> User-friendly control panel (like cPanel or Plesk) for managing files, databases, and email accounts.</span>
              </li>
               <li className="flex items-start gap-2">
                 <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--accent-software))] mt-1 shrink-0" />
                 <span><span className="font-semibold text-foreground">Scalable Plans:</span> Options ranging from basic shared hosting for small sites to more powerful solutions for growing businesses.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Domain Registration</h2>
             <p>
               Secure your desired web address (.com, .in, .org, etc.) before someone else does. We simplify the domain registration process, helping you find, register, and manage your domain names easily. We also assist with DNS management and domain transfers.
             </p>


             <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
               <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                  <Link href="/contact?service=HostingDomain">
                    Get Your Website Online <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
