
import { useState, useEffect } from 'react';

interface RestaurantData {
  business_name: string;
  phone: string;
  address: string;
  hours: string;
  instagram: string;
}

export const useRestaurantData = () => {
  const [data, setData] = useState<RestaurantData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and set hardcoded data
    const timer = setTimeout(() => {
      setData({
        business_name: "House of Lasagna & Pizza",
        phone: "(613) 728-9700",
        address: "984 Merivale Rd Ottawa, ON K1Z 6A4, Canada",
        hours: "Contact for current hours",
        instagram: "https://www.instagram.com/h.o.l.ottawa/?hl=en"
      });
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading };
};
