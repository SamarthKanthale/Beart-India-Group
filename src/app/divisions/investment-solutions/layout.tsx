import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Solutions - Financial Advisory | Beart India Group',
  description: 'Explore Beart India Group\'s comprehensive investment solutions including Mutual Funds, Equity, AIF, PMS, NCDs, Smallcase, Insurance, Bonds, FDs, and Loans. Expert financial advisory for your growth.',
  keywords: ['investment solutions India', 'financial advisory', 'mutual funds', 'equity portfolio', 'AIF', 'PMS', 'NCD', 'smallcase', 'insurance', 'bonds', 'loans', 'Beart India Group investments'],
  alternates: {
    canonical: '/divisions/investment-solutions',
  },
};

export default function InvestmentSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
