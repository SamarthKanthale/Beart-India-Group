'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/divisions', label: 'Divisions' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const beartIndiaLogoUrl = "/images/beart-india-logo.svg";

// Static base dimensions for SSR and initial client render
const BASE_LOGO_WIDTH_INITIAL = 180; 
const BASE_LOGO_HEIGHT_INITIAL = 64; 

const DESKTOP_HEADER_HEIGHT_INITIAL = 120; // Initial height for desktop (not scrolled)
const DESKTOP_HEADER_HEIGHT_SCROLLED = 90; // Height for desktop (scrolled)
const MOBILE_HEADER_HEIGHT = 90; // Height for mobile

// Factors for dynamic resizing
const SCROLLED_LOGO_HEIGHT_FACTOR = 1.0;
const MOBILE_LOGO_HEIGHT_FACTOR = 0.9;


export function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize with server-rendered/initial-client values
  const [currentHeaderHeight, setCurrentHeaderHeight] = useState(DESKTOP_HEADER_HEIGHT_INITIAL);
  const [currentLogoHeight, setCurrentLogoHeight] = useState(BASE_LOGO_HEIGHT_INITIAL);
  const [currentLogoWidth, setCurrentLogoWidth] = useState(BASE_LOGO_WIDTH_INITIAL);

  useEffect(() => {
    setIsMounted(true);
  }, []); // Effect to set isMounted to true on the client side

  useEffect(() => {
    if (!isMounted) {
      return; // Don't run on server or first client render before isMounted is true
    }

    const handleScrollAndResize = () => {
      const scrolled = window.scrollY > 20;
      const mobile = window.innerWidth < 1024;

      if (mobile) {
        setCurrentHeaderHeight(MOBILE_HEADER_HEIGHT);
        const newLogoHeight = BASE_LOGO_HEIGHT_INITIAL * MOBILE_LOGO_HEIGHT_FACTOR;
        setCurrentLogoHeight(newLogoHeight);
        setCurrentLogoWidth((newLogoHeight / BASE_LOGO_HEIGHT_INITIAL) * BASE_LOGO_WIDTH_INITIAL);
      } else {
        // Desktop
        if (scrolled) {
          setCurrentHeaderHeight(DESKTOP_HEADER_HEIGHT_SCROLLED);
          const newLogoHeight = BASE_LOGO_HEIGHT_INITIAL * SCROLLED_LOGO_HEIGHT_FACTOR;
          setCurrentLogoHeight(newLogoHeight);
          setCurrentLogoWidth((newLogoHeight / BASE_LOGO_HEIGHT_INITIAL) * BASE_LOGO_WIDTH_INITIAL);
        } else {
          setCurrentHeaderHeight(DESKTOP_HEADER_HEIGHT_INITIAL);
          setCurrentLogoHeight(BASE_LOGO_HEIGHT_INITIAL);
          setCurrentLogoWidth(BASE_LOGO_WIDTH_INITIAL);
        }
      }
    };
    
    handleScrollAndResize(); // Set initial dimensions based on client environment

    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, [isMounted]);


  // Determine styles based on isMounted to ensure server and initial client render match
  const headerStyle = {
    height: `${isMounted ? currentHeaderHeight : DESKTOP_HEADER_HEIGHT_INITIAL}px`,
  };

  const logoLinkStyle = {
    width: `${isMounted ? Math.round(currentLogoWidth) : BASE_LOGO_WIDTH_INITIAL}px`,
    height: `${isMounted ? Math.round(currentLogoHeight) : BASE_LOGO_HEIGHT_INITIAL}px`,
    transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out',
  };


  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-gray-800 bg-black text-white transition-all ease-in-out duration-300"
      )}
      style={headerStyle}
    >
      <div className={cn("container mx-auto flex h-full items-center justify-between px-4 md:px-6")}>
        
        <div className="flex-initial"> 
          <Link 
            href="/" 
            aria-label="Beart India Group Home" 
            className="relative block transform transition-all hover:scale-105 duration-200"
            style={logoLinkStyle}
          >
            <div className="w-full h-full bg-black rounded p-1">
              <Image
                src={beartIndiaLogoUrl}
                alt="Beart India Logo"
                fill 
                className="object-contain" 
                priority
              />
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex flex-1 items-center justify-end space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-all duration-200 ease-in-out hover:text-white hover:scale-105 focus:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="lg:hidden flex-initial flex justify-end items-center">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800 hover:text-white focus:bg-gray-800">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card text-card-foreground border-l w-[280px] sm:w-[320px] p-0">
               <SheetHeader className="p-4 border-b">
                 <SheetTitle className="sr-only">Mobile Menu</SheetTitle> 
                 <SheetClose asChild>
                    <Link href="/" aria-label="Beart India Group Home" className="flex items-center gap-2 bg-black rounded p-1">
                      <Image
                        src={beartIndiaLogoUrl}
                        alt="Beart India Logo"
                        width={Math.round(BASE_LOGO_WIDTH_INITIAL * 0.8)} 
                        height={Math.round(BASE_LOGO_HEIGHT_INITIAL * 0.8)}
                        className="object-contain"
                      />
                    </Link>
                 </SheetClose>
               </SheetHeader>
               <div className="grid gap-2 p-4">
                {navItems.map((item) => (
                   <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="block py-2 text-base font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-muted rounded-md px-3"
                      >
                        {item.label}
                      </Link>
                   </SheetClose>
                ))}
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

