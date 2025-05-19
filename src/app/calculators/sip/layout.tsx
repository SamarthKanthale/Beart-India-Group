import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SIP Calculator - Beart India Group',
  description: 'Estimate the future value of your Systematic Investment Plan (SIP) with Beart India Group\'s SIP calculator.',
  keywords: ['SIP calculator', 'investment calculator', 'mutual fund SIP', 'future value calculator', 'Beart India tools'],
  alternates: {
    canonical: '/calculators/sip',
  },
};

export default function SipCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
