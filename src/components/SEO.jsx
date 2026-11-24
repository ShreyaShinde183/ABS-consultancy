import { useEffect } from 'react';

const BASE_URL = 'https://absconsultancy.in';

// Verified Business Schema for ABS Consultancy
export const verifiedBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  '@id': `${BASE_URL}/#organization`,
  name: 'ABS Consultancy',
  alternateName: ['ABS Consultancy Chartered Accountants', 'ABS Consultancy Pune'],
  legalName: 'ABS Consultancy',
  description: 'Leading CA Firm in Pune providing institutional-grade Tax Consulting, GST Advisory, Statutory Audit Services, Corporate MCA Compliance, and Virtual CFO stewardship.',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  image: `${BASE_URL}/images/hero-banner.jpg`,
  telephone: '+919028644499',
  email: 'rahulchate.ca@gmail.com',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Cheque, Bank Transfer, UPI, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office No. 70, 4th Floor, Patil Arcade, Above Kalinga Hotel, Khilare Road, Near Tech Mahindra, Erandwane',
    addressLocality: 'Erandwane, Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411004',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5138865,
    longitude: 73.8324888
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:30'
    }
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Pune'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Maharashtra'
    },
    {
      '@type': 'Country',
      name: 'India'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Chartered Accountancy & Tax Advisory Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Income Tax & Direct Tax Advisory',
          description: 'Strategic tax planning, ITR filing for individuals & corporates, scrutiny defense, and CIT appeals.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'GST Compliance & Advisory Services',
          description: 'GST registration, monthly GSTR-1/3B filing, annual GSTR-9/9C reconciliation, and department notice representation.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Auditing & Assurance Services',
          description: 'Statutory corporate audits, tax audits u/s 44AB, internal controls assessment, and stock verification.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate & MCA Compliance',
          description: 'Pvt Ltd & LLP incorporation, ROC annual filings, director KYC, and corporate governance secretarial advisory.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Accounting & MIS Services',
          description: 'Cloud bookkeeping, monthly MIS dashboards, balance sheet finalization, and payroll management.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Virtual CFO Advisory',
          description: 'Executive financial leadership, cash flow modeling, CMA reports for bank loan financing, and investor readiness.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tax Litigation & Appellate Representation',
          description: 'Dispute defense before CIT(Appeals), Income Tax Appellate Tribunal (ITAT), and GST Appellate authorities.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'NGO & Public Trust Compliance',
          description: 'Section 12AB & 80G registrations, Form 10BD donation returns, and trust statutory audits.'
        }
      }
    ]
  }
};

const SEO = ({
  title = 'ABS Consultancy | CA Firm in Pune | Tax & Audit Consultants',
  description = 'Premier CA Firm in Pune offering professional Tax Consulting, GST Compliance, Statutory Audit, Accounting Services & Virtual CFO advisory in Erandwane, Pune.',
  keywords = 'CA Firm in Pune, GST Consultant in Pune, Tax Consultant in Pune, Accounting Services, Audit Services, Chartered Accountant Erandwane Pune, Income Tax Filing Pune',
  canonical = '/',
  ogType = 'website',
  schema = null,
  breadcrumbs = null
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Set Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'author', 'ABS Consultancy');

    // Geo tags for localized Pune SEO
    setMetaTag('name', 'geo.region', 'IN-MH');
    setMetaTag('name', 'geo.placename', 'Pune');
    setMetaTag('name', 'geo.position', '18.5138865;73.8324888');
    setMetaTag('name', 'ICBM', '18.5138865, 73.8324888');

    // 3. Set Canonical Link
    const cleanCanonical = canonical.startsWith('/') ? canonical : `/${canonical}`;
    const fullCanonicalUrl = `${BASE_URL}${cleanCanonical === '/' ? '' : cleanCanonical}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 4. Set Open Graph (Facebook / LinkedIn) Tags
    setMetaTag('property', 'og:locale', 'en_IN');
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:site_name', 'ABS Consultancy');
    setMetaTag('property', 'og:image', `${BASE_URL}/images/hero-banner.jpg`);

    // 5. Set Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', `${BASE_URL}/images/hero-banner.jpg`);

    // 6. Manage JSON-LD Schema
    let schemaScript = document.getElementById('dynamic-seo-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', 'dynamic-seo-schema');
      document.head.appendChild(schemaScript);
    }

    // Build structured data array
    const schemasToInject = [verifiedBusinessSchema];

    // Add BreadcrumbList schema if breadcrumbs provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url.startsWith('http') ? crumb.url : `${BASE_URL}${crumb.url}`
        }))
      };
      schemasToInject.push(breadcrumbSchema);
    }

    // Add page-specific custom schema if provided
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    schemaScript.textContent = JSON.stringify(schemasToInject);
  }, [title, description, keywords, canonical, ogType, schema, breadcrumbs]);

  return null;
};

export default SEO;
