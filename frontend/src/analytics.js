export function loadAnalytics() {
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
  if (domain) {
    const script = document.createElement('script');
    script.setAttribute('defer', '');
    script.setAttribute('data-domain', domain);
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }
}
