import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { initializeApp, getApps } from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA56GzZhHJbIMb1ixalIIvzDxdltLpHGTA", // Replace with your actual API key
  authDomain: "beart-india-group-digital-hub.firebaseapp.com",
  projectId: "beart-india-group-digital-hub",
  storageBucket: "beart-india-group-digital-hub.appspot.com",
  messagingSenderId: "51682836337",
  appId: "1:51682836337:web:13e388a359827abc6280d0"
};

// Initialize Firebase client-side
if (typeof window !== 'undefined' && !getApps().length) {
  initializeApp(firebaseConfig);
  console.log("Firebase initialized on client");
}


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://beartindia.com'), 
  title: {
    default: 'Beart India Group - Smart Investments & Digital Solutions',
    template: '%s | Beart India Group',
  },
  description: 'Beart India Group offers expert financial consultancy, investment solutions (Mutual Funds, Equity, AIF, PMS, NCDs, Bonds, Insurance, Loans) and cutting-edge software services (Hosting, Google Workspace, SME Digital Launch) for individuals and businesses in India.',
  keywords: ['investment advisory India', 'financial planning India', 'software solutions India', 'digital transformation India', 'mutual funds India', 'equity portfolio management', 'NRI investment services', 'wealth management India', 'SME digital solutions', 'Beart India Group', 'Aditya Birla Money sub-broker', 'financial services', 'technology services'],
  openGraph: {
    title: 'Beart India Group - Smart Investments & Digital Solutions',
    description: 'Expert financial consultancy and cutting-edge software services for growth in the digital era in India.',
    url: 'https://beartindia.com', 
    siteName: 'Beart India Group',
    images: [
      {
        url: '/assets/beart-india-og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Beart India Group Services Overview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beart India Group - Smart Investments & Digital Solutions',
    description: 'Expert financial consultancy and cutting-edge software services for growth in the digital era.',
    images: ['/assets/beart-india-twitter-image.png'], 
  },
  alternates: {
    canonical: 'https://beartindia.com', 
  },
  icons: {
    icon: '/assets/favicon.ico', 
    shortcut: '/assets/favicon.ico', 
    apple: '/assets/apple-touch-icon.png', 
    other: [
      {
        rel: 'icon',
        url: '/assets/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/assets/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'manifest',
        url: '/assets/site.webmanifest', 
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
        "h-full bg-background font-sans antialiased",
        inter.variable, 
        "animate-in fade-in duration-500" 
      )}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
         <Toaster />
      </body>
    </html>
  );
}
