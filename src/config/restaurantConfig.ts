
// Restaurant Configuration Template
// Update this file with your restaurant's specific information

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

// TEMPLATE CONFIGURATION - UPDATE WITH YOUR RESTAURANT'S INFORMATION
export const restaurantConfig: RestaurantConfig = {
  // === BASIC BUSINESS INFORMATION ===
  businessName: "Your Pizza Restaurant Name",
  tagline: "Authentic Italian Pizza & More",  
  description: "Serving authentic Italian cuisine with fresh ingredients and traditional recipes in [Your City]",
  
  // === CONTACT INFORMATION ===
  phone: "(XXX) XXX-XXXX",
  email: "info@yourrestaurant.com", // Optional
  address: {
    street: "123 Your Street Address",
    city: "Your City",
    province: "ON", // or your province/state
    postalCode: "X1X 1X1",
    country: "Canada" // or your country
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
    note: "Hours may vary on holidays" // Optional
  },
  
  // === SERVICE AREAS (Neighborhoods you deliver to) ===
  serviceAreas: [
    "Downtown",
    "North End", 
    "South Side",
    "West District"
    // Add your actual service areas
  ],
  
  // === EXTERNAL SERVICE URLS ===
  // IMPORTANT: Update these URLs to match your 3rd party ordering system
  externalUrls: {
    menuOrdering: "https://your-ordering-system.com/?p=menu",
    signin: "https://your-ordering-system.com/?p=signin", 
    createAccount: "https://your-ordering-system.com/?p=createaccount",
    instagram: "https://www.instagram.com/your-restaurant", // Optional
    facebook: "https://www.facebook.com/your-restaurant" // Optional
  },
  
  // === SEO & ANALYTICS ===
  seo: {
    metaDescription: "Your Restaurant Name serves authentic Italian pizza and cuisine in [Your City]. Order online for delivery and takeout.",
    keywords: [
      "pizza delivery [your city]",
      "italian restaurant [your city]", 
      "pizza takeout",
      "authentic italian food",
      "[your neighborhood] pizza"
    ],
    googleAnalyticsId: "G-XXXXXXXXXX" // Optional - add your GA4 ID
  },
  
  // === BRANDING & IMAGES ===
  branding: {
    primaryColor: "#B71C1C", // Italian red - customize to your brand
    secondaryColor: "#2E7D32", // Italian green - customize to your brand  
    logoPath: "/lovable-uploads/your-logo.png",
    heroImagePath: "/lovable-uploads/your-hero-image.png",
    faviconPath: "/lovable-uploads/your-favicon.png"
  },
  
  // === GEOGRAPHIC INFORMATION ===
  // Get coordinates from Google Maps for your restaurant location
  location: {
    latitude: 45.4215, // Update with your restaurant's coordinates
    longitude: -75.6972 // Update with your restaurant's coordinates
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
