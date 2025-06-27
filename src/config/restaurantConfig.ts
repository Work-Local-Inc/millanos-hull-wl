
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
  phone: "(819) XXX-XXXX", // Need to get actual phone from hull.milanopizzeria.ca
  email: "info@milanopizzeria.ca",
  address: {
    street: "Hull Address", // Need to scrape from hull.milanopizzeria.ca
    city: "Hull",
    province: "QC",
    postalCode: "J8X XXX", // Need actual postal code
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
  // NOTE: These need to be updated with actual Milano Pizzeria URLs
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
    googleAnalyticsId: "G-XXXXXXXXXX" // Will need actual GA4 ID if provided
  },
  
  // === BRANDING & IMAGES ===
  branding: {
    primaryColor: "#B71C1C", // Italian red - can customize to Milano's brand
    secondaryColor: "#2E7D32", // Italian green - can customize to Milano's brand  
    logoPath: "/lovable-uploads/milano-logo.png",
    heroImagePath: "/lovable-uploads/milano-hero.png",
    faviconPath: "/lovable-uploads/milano-favicon.png"
  },
  
  // === GEOGRAPHIC INFORMATION ===
  // Hull, Quebec coordinates
  location: {
    latitude: 45.4287, // Hull, Quebec approximate coordinates
    longitude: -75.7156 // Will need exact restaurant coordinates
  }
};

// Helper function to get display address
export const getDisplayAddress = (config: RestaurantConfig): string => {
  const { address } = config;
  return `${address.street}, ${address.city}, ${address.province} ${address.postalCode}`;
};

// Helper function to get full address for schema markup
export const getFullAddress = (config: RestaurantConfig): string => {
  const { address } = config;
  return `${address.street} ${address.city}, ${address.province} ${address.postalCode}, ${address.country}`;
};

// Helper function to format phone number for links
export const getPhoneLink = (config: RestaurantConfig): string => {
  return `tel:${config.phone}`;
};

// Helper function to get hours for specific day
export const getHoursForDay = (config: RestaurantConfig, day: keyof RestaurantConfig['hours']): string => {
  return config.hours[day] || 'Closed';
};
