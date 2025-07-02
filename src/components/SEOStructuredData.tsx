import { restaurantConfig } from '@/config/restaurantConfig';

const SEOStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": restaurantConfig.businessName,
    "description": restaurantConfig.description,
    "url": "https://milanopizzeria.ca",
    "telephone": restaurantConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": restaurantConfig.address.street,
      "addressLocality": restaurantConfig.address.city,
      "addressRegion": restaurantConfig.address.province,
      "postalCode": restaurantConfig.address.postalCode,
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.4287,
      "longitude": -75.7156
    },
    "openingHours": [
      "Mo-Su 11:00-22:00"
    ],
    "servesCuisine": ["Italian", "Pizza", "Pasta"],
    "priceRange": "$$",
    "acceptsReservations": false,
    "hasDeliveryService": true,
    "hasTakeaway": true,
    "areaServed": [
      "Hull",
      "Aylmer", 
      "Gatineau Centre",
      "Buckingham",
      "Masson-Angers"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "150"
    },
    "sameAs": [
      restaurantConfig.externalUrls.facebook
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default SEOStructuredData;