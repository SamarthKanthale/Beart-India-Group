import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beart Foundation - Mental Wellness & Social Impact | Beart India Group',
  description: 'Learn about Beart Foundation, the non-profit arm of Beart India Group, focused on mental health, community development, and youth empowerment through sports.',
  keywords: ["Beart Foundation", "mental health support", "social impact India", "community development NGO", "sports and youth", "non-profit India", "Beart India Group CSR"],
  alternates: {
    canonical: '/divisions/beart-foundation',
  },
};

export default function BeartFoundationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
