
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
          {/* Left part: Copyright and Disclaimer */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-muted-foreground">
              Beart India Group © {new Date().getFullYear()}. All Rights Reserved.
            </p>
            <Link
              href="/disclaimer"
              className="block mt-2 text-xs text-muted-foreground/80 hover:text-primary hover:underline transition-colors duration-200"
            >
              Disclaimer
            </Link>
          </div>

          {/* Right part: Social Icons */}
          <div className="flex justify-center lg:justify-end space-x-5">
            <Link 
              href="https://www.linkedin.com/company/beartindia" 
              aria-label="LinkedIn Profile of Beart India Group" 
              className="text-muted-foreground hover:text-primary transform transition-transform hover:scale-110 duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
