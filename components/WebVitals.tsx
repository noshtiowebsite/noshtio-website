'use client';

import { useEffect } from 'react';
import { initWebVitals } from '@/app/web-vitals';

export function WebVitals() {
  useEffect(() => {
    initWebVitals();
  }, []);

  return null;
}