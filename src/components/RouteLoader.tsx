'use client';

import { useEffect, useState, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './Loader';

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  // Initial page load
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Trigger on route change
  useEffect(() => {
    setLoading(true);
    startTransition(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500); // you can tweak this delay
    });
  }, [pathname]);

  if (!hydrated || loading) {
    return (
      <Loader />
    );
  }

  return <>{children}</>;
}
