import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export function reportWebVitals(metric: any) {
  // Only report if GA4 is configured
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    console.log('Web Vitals:', metric);
    return;
  }

  // Send to Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_map: {
        metric_id: 'dimension1',
        metric_value: 'metric1',
        metric_delta: 'metric2',
      },
      metric_id: metric.id,
      metric_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_delta: metric.delta,
    });
  }
}

export function initWebVitals() {
  if (typeof window !== 'undefined') {
    // Track Core Web Vitals
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }
}