import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Beart India Group',
  description: 'Get in touch with Beart India Group for financial advisory, investment solutions, or software services. Schedule a free consultation or reach us via WhatsApp, phone, or email.',
  keywords: ['contact Beart India Group', 'Beart India phone', 'Beart India email', 'financial consultation India', 'software services contact', 'investment query'],
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}