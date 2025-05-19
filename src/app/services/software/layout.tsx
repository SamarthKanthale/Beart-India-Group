import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software & Digital Services | Beart India Group',
  description: 'Empower your business with Beart India Group\'s software solutions: Website Hosting, Google Workspace, SME Digital Launch Packs, and Technical Consulting.',
  keywords: ['software solutions', 'digital services India', 'website hosting', 'google workspace setup', 'sme tech support', 'Beart India software'],
  alternates: {
    canonical: '/services/software',
  },
};

export default function SoftwareServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
