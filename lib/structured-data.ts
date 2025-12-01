export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hunters and Farmers',
    url: 'https://huntersandfarmers.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+61-3-0000-0000',
      contactType: 'customer service',
      email: 'contact@huntersandfarmers.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Melbourne',
      addressCountry: 'AU',
    },
  }
}

