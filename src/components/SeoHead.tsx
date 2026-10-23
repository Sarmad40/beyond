import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../data/websiteData';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'LocalBusiness' | 'Service' | 'WebPage' | 'AboutPage' | 'ContactPage';
  serviceData?: {
    name: string;
    description: string;
  };
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  schemaType = 'LocalBusiness',
  serviceData
}) => {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update JSON-LD Structured Data
    const scriptId = 'json-ld-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const currentUrl = window.location.origin + window.location.pathname + window.location.hash;

    const baseSchema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': `${window.location.origin}/#business`,
          name: BUSINESS_INFO.name,
          legalName: BUSINESS_INFO.legalName,
          description: BUSINESS_INFO.tagline,
          image: `${window.location.origin}/assets/aistudio/image_a5647224.png`,
          telephone: 'Upon Request & Evaluation',
          email: BUSINESS_INFO.email,
          url: window.location.origin,
          address: {
            '@type': 'PostalAddress',
            addressLocality: BUSINESS_INFO.city,
            addressRegion: BUSINESS_INFO.state,
            postalCode: BUSINESS_INFO.zip,
            addressCountry: 'US'
          },
          areaServed: [
            {
              '@type': 'City',
              name: 'Friant',
              sameAs: 'https://en.wikipedia.org/wiki/Friant,_California'
            },
            {
              '@type': 'AdministrativeArea',
              name: 'Fresno County, California'
            }
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '1',
            bestRating: '5',
            worstRating: '1'
          },
          priceRange: '$$',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
              ],
              opens: '00:00',
              closes: '23:59'
            }
          ]
        },
        {
          '@type': 'WebSite',
          '@id': `${window.location.origin}/#website`,
          url: window.location.origin,
          name: BUSINESS_INFO.name,
          publisher: {
            '@id': `${window.location.origin}/#business`
          }
        },
        {
          '@type': 'WebPage',
          '@id': currentUrl,
          url: currentUrl,
          name: title,
          description: description,
          isPartOf: {
            '@id': `${window.location.origin}/#website`
          }
        }
      ]
    };

    if (serviceData) {
      baseSchema['@graph'].push({
        '@type': 'Service',
        name: serviceData.name,
        description: serviceData.description,
        provider: {
          '@id': `${window.location.origin}/#business`
        },
        areaServed: {
          '@type': 'City',
          name: 'Friant, California'
        }
      });
    }

    script.textContent = JSON.stringify(baseSchema);
  }, [title, description, canonicalPath, schemaType, serviceData]);

  return null;
};
