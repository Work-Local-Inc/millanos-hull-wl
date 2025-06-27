
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { restaurantConfig } from '@/config/restaurantConfig';

const Footer = () => {
  return (
    <footer 
      className="relative text-white py-16"
      style={{
        backgroundImage: `url(${restaurantConfig.branding.footerBgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="absolute inset-0 bg-gray-900/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src={restaurantConfig.branding.logoPath} 
                alt="Milano Pizzeria Logo" 
                className="h-12 w-auto object-contain mr-3" 
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{restaurantConfig.businessName}</h3>
            <p className="text-gray-300 mb-4">{restaurantConfig.tagline}</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {restaurantConfig.description}
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-red-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href={`tel:${restaurantConfig.phone}`} 
                    className="text-white hover:text-red-400 transition-colors font-medium"
                  >
                    {restaurantConfig.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{restaurantConfig.address.street}</p>
                  <p>{restaurantConfig.address.city}, {restaurantConfig.address.province} {restaurantConfig.address.postalCode}</p>
                </div>
              </div>

              {restaurantConfig.email && (
                <div className="flex items-start">
                  <div className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0"></div>
                  <a 
                    href={`mailto:${restaurantConfig.email}`}
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    {restaurantConfig.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-red-400">Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday:</span>
                <span>{restaurantConfig.hours.monday}</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday:</span>
                <span>{restaurantConfig.hours.tuesday}</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday:</span>
                <span>{restaurantConfig.hours.wednesday}</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday:</span>
                <span>{restaurantConfig.hours.thursday}</span>
              </div>
              <div className="flex justify-between">
                <span>Friday:</span>
                <span>{restaurantConfig.hours.friday}</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>{restaurantConfig.hours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>{restaurantConfig.hours.sunday}</span>
              </div>
              {restaurantConfig.hours.note && (
                <p className="text-sm text-gray-400 mt-3">{restaurantConfig.hours.note}</p>
              )}
            </div>
          </div>

          {/* Service Areas & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-red-400">Service Areas</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {restaurantConfig.serviceAreas.map((area, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-red-600 text-white hover:bg-red-700 px-2 py-1 text-xs"
                >
                  {area}
                </Badge>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-300">Follow Us</h4>
              <div className="flex space-x-4">
                {restaurantConfig.externalUrls.instagram && (
                  <a 
                    href={restaurantConfig.externalUrls.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                )}
                {restaurantConfig.externalUrls.facebook && (
                  <a 
                    href={restaurantConfig.externalUrls.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {restaurantConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
