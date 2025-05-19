import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Divisions - Investment, Software & Foundation | Beart India Group',
  description: 'Explore the core divisions of Beart India Group: Beart India Investment Solutions, Beart India Software Solutions, and the Beart Foundation. Discover our commitment to financial growth, digital empowerment, and social impact.',
  keywords: ['Beart India Group divisions', 'investment solutions', 'software solutions', 'Beart Foundation', 'financial advisory India', 'SME digital services', 'social impact NGO'],
  alternates: {
    canonical: '/divisions',
  },
};

export default function DivisionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
