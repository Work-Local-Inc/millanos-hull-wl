
// Restaurant Configuration Template
// Updated for Hull Milano Pizzeria

export interface RestaurantConfig {
  // Basic Business Information
  businessName: string;
  tagline: string;
  description: string;
  
  // Contact Information
  phone: string;
  email?: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  
  // Operating Hours
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    note?: string;
  };
  
  // Service Areas
  serviceAreas: string[];
  
  // External Service URLs
  externalUrls: {
    menuOrdering: string;
    signin: string;
    createAccount: string;
    instagram?: string;
    facebook?: string;
  };
  
  // SEO & Analytics
  seo: {
    metaDescription: string;
    keywords: string[];
    googleAnalyticsId?: string;
  };
  
  // Branding
  branding: {
    primaryColor: string;
    secondaryColor: string;
    logoPath: string;
    heroImagePath: string;
    headerBgPath: string;
    footerBgPath: string;
    faviconPath: string;
  };
  
  // Geographic Information
  location: {
    latitude: number;
    longitude: number;
  };
}

// MILANO PIZZERIA CONFIGURATION - HULL, QUEBEC
export const restaurantConfig: RestaurantConfig = {
  // === BASIC BUSINESS INFORMATION ===
  businessName: "Milano Pizzeria",
  tagline: "Authentic Italian Pizza & Cuisine",  
  description: "Serving authentic Italian cuisine with fresh ingredients and traditional recipes in Hull, Quebec",
  
  // === CONTACT INFORMATION ===
  phone: "(819) 777-3030", // Real Milano Pizzeria Hull phone
  email: "info@milanopizzeria.ca",
  address: {
    street: "283 Boulevard Saint-Joseph",
    city: "Hull",
    province: "QC",
    postalCode: "J8Y 3X4",
    country: "Canada"
  },
  
  // === OPERATING HOURS ===
  hours: {
    monday: "11:00 AM - 10:00 PM",
    tuesday: "11:00 AM - 10:00 PM", 
    wednesday: "11:00 AM - 10:00 PM",
    thursday: "11:00 AM - 10:00 PM",
    friday: "11:00 AM - 11:00 PM",
    saturday: "11:00 AM - 11:00 PM",
    sunday: "12:00 PM - 10:00 PM",
    note: "Hours may vary on holidays"
  },
  
  // === SERVICE AREAS (Hull/Gatineau neighborhoods) ===
  serviceAreas: [
    "Hull",
    "Aylmer", 
    "Gatineau Centre",
    "Buckingham",
    "Masson-Angers"
  ],
  
  // === EXTERNAL SERVICE URLS ===
  externalUrls: {
    menuOrdering: "https://hull.milanopizzeria.ca/?p=menu",
    signin: "https://hull.milanopizzeria.ca/?p=signin", 
    createAccount: "https://hull.milanopizzeria.ca/?p=createaccount",
    instagram: "https://www.instagram.com/milanopizzeriahull", 
    facebook: "https://www.facebook.com/milanopizzeriahull"
  },
  
  // === SEO & ANALYTICS ===
  seo: {
    metaDescription: "Milano Pizzeria serves authentic Italian pizza and cuisine in Hull, Quebec. Order online for delivery and takeout in Gatineau area.",
    keywords: [
      "pizza delivery Hull Quebec",
      "italian restaurant Gatineau", 
      "pizza takeout Hull",
      "authentic italian food Gatineau",
      "Milano Pizzeria Hull",
      "pizza Hull QC"
    ],
    googleAnalyticsId: "G-XXXXXXXXXX"
  },
  
  // === BRANDING & IMAGES (Using your uploaded assets) ===
  branding: {
    primaryColor: "#B71C1C", // Italian red
    secondaryColor: "#2E7D32", // Italian green  
    logoPath: "/lovable-uploads/cc17eed4-3509-4751-9f1e-957993d1d0c2.png", // Your new Milano logo
    heroImagePath: "/lovable-uploads/2748c3eb-8ff1-4534-bae5-be51afffa13d.png", // Your pizza hero image
    headerBgPath: "/lovable-uploads/26f52876-1239-4976-9e98-cf5c07a9d1d3.png", // Your brick texture
    footerBgPath: "/lovable-uploads/52955c1b-dcbb-4ee6-b3ab-524150b5a492.png", // Beautiful wood-fired pizza image
    faviconPath: "/lovable-uploads/4a9616d9-246e-4d1f-9783-32a0923f77eb.png" // Existing pizza favicon
  },
  
  // === GEOGRAPHIC INFORMATION ===
  location: {
    latitude: 45.4287, // Hull, Quebec coordinates
    longitude: -75.7156
  }
};

// Helper functions remain the same
export const getDisplayAddress = (config: RestaurantConfig): string => {
  const { address } = config;
  return `${address.street}, ${address.city}, ${address.province} ${address.postalCode}`;
};

export const getFullAddress = (config: RestaurantConfig): string => {
  const { address } = config;
  return `${address.street} ${address.city}, ${address.province} ${address.postalCode}, ${address.country}`;
};

export const getPhoneLink = (config: RestaurantConfig): string => {
  return `tel:${config.phone}`;
};

export const getHoursForDay = (config: RestaurantConfig, day: keyof RestaurantConfig['hours']): string => {
  return config.hours[day] || 'Closed';
};
