
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Smile, Users, Handshake, Gift, Award as AwardIcon, Home as HomeIcon, Brain, GraduationCap as GraduationCapIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Beart Foundation - Mental Wellness & Social Impact | Beart India Group',
  description: 'Learn about Beart Foundation, the non-profit arm of Beart India Group, focused on mental health, community development, and youth empowerment through sports.',
  keywords: ["Beart Foundation", "mental health support", "social impact India", "community development NGO", "sports and youth", "non-profit India", "Beart India Group CSR"],
  alternates: {
    canonical: '/divisions/beart-foundation',
  },
};

const BrainCircuitIcon = ({className}: {className?: string}) => <Brain className={className} />;
const ActualGraduationCapIcon = ({className}: {className?: string}) => <GraduationCapIcon className={className} />;


const mentalHealthServices = [
  {
    title: "Individual Counselling",
    description: "Confidential sessions to help individuals manage stress, anxiety, and personal challenges.",
    icon: Smile,
  },
  {
    title: "Wellness Workshops",
    description: "Interactive programs covering mindfulness, stress management, emotional intelligence, and resilience building.",
    icon: BrainCircuitIcon,
  },
];

const socialImpactPrograms = [
   {
    title: "Community Outreach Initiatives",
    description: "Initiatives designed to address local community needs, promote social inclusion, and encourage collective development.",
    icon: Handshake,
  },
  {
    title: "Old Age Home Support",
    description: "Providing resources, companionship, and support to elder care homes, ensuring respect and quality of life for senior citizens.",
    icon: HomeIcon,
  },
];

const sportsAndYouthDevelopmentServices = [
  {
    title: "Sports Event Organization",
    description: "Conducting community-level sports events that encourage participation, fitness, and team spirit among youth.",
    icon: AwardIcon,
  },
  {
    title: "Scholarships for Sportspersons",
    description: "Offering financial support and training assistance to deserving young athletes.",
    icon: ActualGraduationCapIcon,
  },
];


export default function BeartFoundationPage() {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6 animate-in fade-in duration-500">
      <Card className="w-full mx-auto shadow-lg animate-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left pb-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-4">
             <Heart className="h-10 w-10 text-primary" />
             <CardTitle className="text-3xl md:text-4xl font-bold text-primary whitespace-nowrap">
               Beart Foundation
             </CardTitle>
          </div>
          <CardDescription className="text-lg md:text-xl text-muted-foreground max-w-full">
            A Commitment to Mental Wellness and Social Impact
          </CardDescription>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-xl mb-8 sm:mb-12 animate-in fade-in duration-700 delay-100">
            <Image
              src="https://images.pexels.com/photos/3228685/pexels-photo-3228685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Community support and togetherness - Beart Foundation"
              fill
              className="object-cover"
              data-ai-hint="community support"
              priority
            />
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground space-y-6">
            <p>
              Beart Foundation is a non-governmental, non-profit initiative of Beart India Group, established with the mission to drive meaningful social change and promote mental well-being. As the philanthropic arm of the organization, the foundation reflects our belief in giving back to society and building a more inclusive and compassionate world.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">What We Stand For</h2>
            <p>
              We are dedicated to improving lives through focused programs that address mental health, community development, and social welfare. Our initiatives are designed to support individuals in need, foster resilience, and empower underserved communities.
            </p>

            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Our Core Focus Areas</h2>

            <section className="animate-in fade-in slide-in-from-left-12 duration-500 delay-300">
              <h3 className="flex items-center justify-start gap-2 text-xl font-semibold text-foreground mb-3">
                <Smile className="h-7 w-7 text-primary" /> Mental Health and Counselling
              </h3>
              <p className="mb-4 text-left">
                We recognize the increasing importance of mental health and are committed to making professional support accessible. Our certified Beart India Counsellors provide:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {mentalHealthServices.map((service) => (
                  <div key={service.title} className="p-6 border rounded-lg shadow-md bg-secondary/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                    <service.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold text-lg text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 animate-in fade-in slide-in-from-right-12 duration-500 delay-400">
              <h3 className="flex items-center justify-start gap-2 text-xl font-semibold text-foreground mb-3">
                <Handshake className="h-7 w-7 text-primary" /> Social Impact Programs
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {socialImpactPrograms.map((service) => (
                  <div key={service.title} className="p-6 border rounded-lg shadow-md bg-secondary/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                    <service.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold text-lg text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 animate-in fade-in slide-in-from-left-12 duration-500 delay-500">
              <h3 className="flex items-center justify-start gap-2 text-xl font-semibold text-foreground mb-3">
                <AwardIcon className="h-7 w-7 text-primary" /> Sports and Youth Development
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {sportsAndYouthDevelopmentServices.map((service) => (
                  <div key={service.title} className="p-6 border rounded-lg shadow-md bg-secondary/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                    <service.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold text-lg text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <h2 className="text-2xl font-semibold text-foreground !mt-10 !mb-4 text-left">Our Vision</h2>
            <p className="text-left">
              Our vision is to be a catalyst for positive change by providing accessible mental health resources and leading impactful community development projects. We strive to create a compassionate ecosystem where every individual has the opportunity to live with dignity, purpose, and well-being.
            </p>


             <div className="text-center !mt-12 animate-in fade-in zoom-in-90 duration-500 delay-600">
               <Button size="lg" className="transform transition-transform hover:scale-105 btn-cta-custom" asChild>
                  <Link href="/contact?service=BeartFoundation">
                    Get Involved / Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </Button>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

