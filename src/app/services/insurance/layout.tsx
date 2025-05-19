import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Solutions - Life & Health Coverage | Beart India Group',
  description: 'Protect your financial well-being with Beart India Group. Explore tailored Life Insurance and Health Insurance plans to secure what matters most.',
  keywords: ['insurance solutions India', 'life insurance plans', 'health insurance coverage', 'Beart India insurance services', 'financial protection'],
  alternates: {
    canonical: '/services/insurance',
  },
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
