declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  gtag("event", eventName, params);
}

export function trackCTAClick(buttonName: string, section: string) {
  trackEvent("cta_click", {
    button_name: buttonName,
    section,
    page: window.location.pathname,
  });
}

export function trackTabClick(tabName: string) {
  trackEvent("tab_click", {
    tab_name: tabName,
    section: "product",
  });
}

export function trackFAQToggle(question: string, action: "open" | "close") {
  trackEvent("faq_interaction", {
    question,
    action,
    section: "faq",
  });
}

export function trackScrollDepth(percent: number) {
  trackEvent("scroll_depth", {
    percent,
    page: window.location.pathname,
  });
}

export function trackNavLink(label: string) {
  trackEvent("nav_click", {
    link_label: label,
  });
}
