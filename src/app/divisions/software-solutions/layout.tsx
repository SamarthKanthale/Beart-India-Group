import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Solutions - Digital Services for SMEs | Beart India Group',
  description: 'Beart India Group offers reliable software solutions including website hosting, domain registration, Google Workspace setup, SME digital launch packs, and technical consulting for businesses in India.',
  keywords: ['software solutions India', 'website hosting India', 'Google Workspace India', 'SME digital pack', 'technical consulting services', 'Beart India Group software'],
  alternates: {
    canonical: '/divisions/software-solutions',
  },
};

export default function SoftwareSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
