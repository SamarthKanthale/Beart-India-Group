import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Beart India Group',
  description: 'Explore the range of financial, software, insurance, and loan services offered by Beart India Group. Expert solutions for your growth and security.',
  keywords: ['Beart India Group services', 'financial services India', 'software solutions', 'insurance plans', 'loan assistance'],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto flex-grow py-12 md:py-20 px-4 md:px-6">
      {children}
    </div>
  );
}

