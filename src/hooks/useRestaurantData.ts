import { useState, useEffect } from 'react';

interface SiteInfo {
  business_name: string;
  title: string;
  meta_description: string;
  phone: string;
  address: string;
  website_url: string;
  industry: string;
  service_areas: string[];
  location: {
    street: string;
    city: string;
    province: string;
    postal_code: string;
    country: string;
  };
}

interface Navigation {
  primary_navigation: Array<{
    name: string;
    url: string;
    active: boolean;
  }>;
  secondary_navigation: Array<{
    name: string;
    url: string;
    type: string;
  }>;
  footer_links: Array<{
    name: string;
    url: string;
  }>;
}

interface Content {
  hero_section: {
    heading: string;
    subheading: string;
    notice: string;
  };
  services: Array<{
    title: string;
    description: string;
    action: string;
  }>;
  delivery_areas: string[];
  specialties: string[];
}

interface Contact {
  phone: string;
  address: string;
  city: string;
  province: string;
  postal_code: string;
  hours: string;
}

interface MenuItemOption {
  name: string;
  price: string;
}

interface MenuItem {
  name: string;
  description: string;
  price: string;
  sizes?: MenuItemOption[];
  options?: MenuItemOption[];
}

interface MenuCategory {
  name: string;
  description: string;
  items: MenuItem[];
}

interface Menu {
  categories: MenuCategory[];
  note: string;
}

interface Features {
  ordering_options: string[];
  account_features: string[];
  service_features: string[];
  food_categories: string[];
}

interface SEO {
  title: string;
  meta_description: string;
  keywords: string[];
  og_title: string;
  og_description: string;
  canonical_url: string;
}

export const useRestaurantData = () => {
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null);
  const [navigation, setNavigation] = useState<Navigation | null>(null);
  const [content, setContent] = useState<Content | null>(null);
  const [contact, setContact] = useState<Contact | null>(null);
  const [menu, setMenu] = useState<Menu | null>(null);
  const [features, setFeatures] = useState<Features | null>(null);
  const [seo, setSeo] = useState<SEO | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          siteInfoRes,
          navigationRes,
          contentRes,
          contactRes,
          menuRes,
          featuresRes,
          seoRes,
        ] = await Promise.all([
          fetch('/site_info.json'),
          fetch('/navigation.json'),
          fetch('/content.json'),
          fetch('/contact.json'),
          fetch('/menu.json'),
          fetch('/features.json'),
          fetch('/seo.json'),
        ]);

        const [
          siteInfoData,
          navigationData,
          contentData,
          contactData,
          menuData,
          featuresData,
          seoData,
        ] = await Promise.all([
          siteInfoRes.json(),
          navigationRes.json(),
          contentRes.json(),
          contactRes.json(),
          menuRes.json(),
          featuresRes.json(),
          seoRes.json(),
        ]);

        setSiteInfo(siteInfoData);
        setNavigation(navigationData);
        setContent(contentData);
        setContact(contactData);
        setMenu(menuData);
        setFeatures(featuresData);
        setSeo(seoData);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    siteInfo,
    navigation,
    content,
    contact,
    menu,
    features,
    seo,
    isLoading,
  };
};
