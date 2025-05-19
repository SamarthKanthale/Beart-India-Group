import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Services - Grow Your Wealth | Beart India Group',
  description: 'Explore a range of investment services from Beart India Group, including Mutual Funds, Equity Advisory, NRI Services, AIF, PMS, NCDs, Smallcase, Bonds, and more. Achieve your financial goals with expert guidance.',
  keywords: ['investment services India', 'financial planning', 'mutual fund advisory', 'equity investments', 'NRI portfolio management', 'AIF India', 'PMS India', 'NCD investment', 'Smallcase portfolios', 'Beart India Group'],
  alternates: {
    canonical: '/services/investment',
  },
};

export default function InvestmentServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
