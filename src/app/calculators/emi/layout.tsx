
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EMI Calculator - Beart India Group',
  description: 'Estimate your Equated Monthly Installment (EMI) for home loans, personal loans, or education loans with Beart India Group\'s EMI calculator. Plan your finances effectively.',
  keywords: ['EMI calculator', 'loan EMI calculator', 'home loan EMI', 'education loan EMI', 'personal loan EMI', 'Beart India tools', 'financial calculator'],
  alternates: {
    canonical: '/calculators/emi',
  },
};

export default function EmiCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

    