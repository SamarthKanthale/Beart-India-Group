'use client';

import { useState, useEffect, type ReactNode } from 'react';

interface ClientWrapperProps {
  children: ReactNode;
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // You can return a loader/skeleton here if needed, or null to render nothing on SSR/initial client render
    return null; 
  }

  return <>{children}</>;
}
