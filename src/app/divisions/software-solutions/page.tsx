
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, ArrowRight, Globe, Mail, Package, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Solutions - Digital Services for SMEs | Beart India Group',
  description: 'Beart India Group offers reliable software solutions including website hosting, domain registration, Google Workspace setup, SME digital launch packs, and technical consulting for businesses in India.',
  keywords: ['software solutions India', 'website hosting India', 'Google Workspace India', 'SME digital pack', 'technical consulting services', 'Beart India Group software'],
  alternates: {
    canonical: '/divisions/software-solutions',
  },
};


const softwareServices = [
  {
    title: "Website Hosting & Domain",
    icon: Globe,
    description: "Secure your online identity with reliable domain registration and high-performance hosting solutions tailored for speed, security, and uptime.",
    link: "/services/software/website-hosting",
  },
  {
    title: "Google Workspace",
    icon: Mail,
    description: "Enhance team collaboration with custom emails (you@yourcompany.com), cloud storage, video meetings, and Google's full productivity suite.",
    link: "/services/software/google-workspace",
  },
   {
    title: "SME Digital Launch Pack",
    icon: Package,
    description: "An essential all-in-one package: domain name, basic website hosting, and professional email setup to quickly establish your online presence.",
    link: "/services/software/sme-digital-launch-pack",
  },
   {
    title: "Technical Consulting",
    icon: Code,
    description: "Expert guidance on digital strategy, infrastructure choices, technology stack selection, troubleshooting, and optimizing your technical setup.",
    link: "/services/software/technical-consulting",
  },
];


export default function SoftwareSolutionsPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 pt-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <Server className="h-8 w-8 text-[hsl(var(--accent-software))]" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-software))] whitespace-nowrap">
               Beart India Software Solutions
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            Providing reliable, scalable, and affordable digital infrastructure to power your business growth in the modern era.
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/7709134/pexels-photo-7709134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Modern office with technology focus - Beart India Software Solutions"
              fill
              className="object-cover"
              data-ai-hint="technology office"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              In today's digital landscape, a strong online presence and efficient digital tools are crucial for success. Beart India Software Solutions specializes in delivering foundational digital services tailored for individuals, small businesses, and growing enterprises. We focus on reliability, security, and affordability, ensuring you have the technical backbone needed to thrive.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Our Core Services</h2>

             <div className="grid md:grid-cols-2 gap-6">
                {softwareServices.map((service, index) => (
                   <Link key={service.title} href={service.link} className="block hover:shadow-md transition-shadow duration-200 rounded-lg group">
                      <div className="p-4 border rounded-lg bg-card h-full flex flex-col animate-in fade-in zoom-in-95 duration-500 text-left" style={{ animationDelay: `${index * 100}ms` }}>
                        <h3 className="flex items-center gap-2 font-semibold text-base sm:text-lg text-foreground mb-2 group-hover:text-[hsl(var(--accent-software))]">
                          <service.icon className="h-5 w-5 text-[hsl(var(--accent-software))]" /> {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground flex-grow mb-3">
                          {service.description}
                        </p>
                         <span className="text-[hsl(var(--accent-software))] font-medium text-xs sm:text-sm mt-auto self-start">Learn More <ArrowRight className="inline-block ml-1 h-3 w-3 sm:h-4 sm:w-4" /></span>
                      </div>
                   </Link>
                ))}
             </div>

             <h2 className="text-xl sm:text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Why Choose Beart India Software?</h2>
             <ul className="space-y-2 sm:space-y-3 list-disc list-inside text-xs sm:text-sm">
                <li><span className="font-semibold">Reliability First:</span> We prioritize stable and secure infrastructure to keep your digital operations running smoothly.</li>
                <li><span className="font-semibold">Affordable Solutions:</span> Competitive pricing designed to fit the budgets of individuals and small businesses.</li>
                <li><span className="font-semibold">Simplified Management:</span> Easy-to-use control panels and dedicated support to manage your services.</li>
                <li><span className="font-semibold">Scalability:</span> Our solutions grow with your business, ensuring you have the resources you need as you expand.</li>
             </ul>

             <div className="text-center !mt-10 sm:!mt-12 animate-in fade-in zoom-in-90 duration-500 delay-400">
               <Button size="lg" className="btn-cta-custom text-sm sm:text-base" asChild>
                  <Link href="/contact?service=SoftwareSolutions">
                    Discuss Your Software Needs <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

