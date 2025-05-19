import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - Beart India Group',
  description: 'Read the disclaimer for BeartIndia.com and Beart India Investment Solutions regarding investment advice, content accuracy, and user responsibilities.',
  keywords: ['Beart India Group disclaimer', 'investment disclaimer', 'financial advice disclaimer', 'website terms of use', 'risk disclosure'],
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
