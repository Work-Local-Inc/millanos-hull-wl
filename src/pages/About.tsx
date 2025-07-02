
import { MapPin, Clock, Star, Heart, Users, Award, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyOrderButton from '@/components/StickyOrderButton';
import OptimizedHeroImage from '@/components/OptimizedHeroImage';
import SEOStructuredData from '@/components/SEOStructuredData';
import { restaurantConfig } from '@/config/restaurantConfig';

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      <SEOStructuredData />
      {/* Header */}
      <Header currentPage="about" />

      {/* Hero Section - Now Optimized */}
      <OptimizedHeroImage
        src="/lovable-uploads/52955c1b-dcbb-4ee6-b3ab-524150b5a492.png"
        alt="Milano Pizzeria - About Our Authentic Italian Restaurant in Hull, Quebec"
        className="text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Bringing Authentic Italian Flavors to Hull & Gatineau Since Day One
            </p>
          </div>
        </div>
      </OptimizedHeroImage>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Family Tradition, Authentic Flavors</h2>
              <p className="text-lg text-gray-600 mb-6">
                Milano Pizzeria has been serving Hull & Gatineau's finest Italian cuisine for years, becoming a beloved cornerstone of the community. Our journey began with a simple mission: to bring authentic Italian flavors and traditional family recipes to the heart of Hull, Quebec.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Located on Boulevard Saint-Joseph, we've built our reputation on using only the finest ingredients, time-honored cooking techniques, and recipes passed down through generations. Every dish is prepared with love and attention to detail that you can taste in every bite.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-red-600 mr-2" />
                  <span className="font-semibold">Family Owned</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-red-600 mr-2" />
                  <span className="font-semibold">Authentic Recipes</span>
                </div>
              </div>
            </div>
            <div>
              <img alt="Wood-Fired Artisan Pizza at Milano Pizzeria" className="rounded-lg shadow-lg w-full h-auto" src="/lovable-uploads/52955c1b-dcbb-4ee6-b3ab-524150b5a492.png" />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Special</h2>
            <p className="text-lg text-gray-600">
              Discover why Hull & Gatineau families choose Milano Pizzeria for their Italian cuisine
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Focused</h3>
              <p className="text-gray-600">
                We're proud to serve the Outaouais region including Hull, Aylmer, Gatineau Centre, Buckingham, and Masson-Angers with fast, reliable delivery service.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic Italian</h3>
              <p className="text-gray-600">
                Our authentic Italian pizzas and pastas are made with traditional Italian recipes, featuring fresh ingredients and perfectly balanced flavors.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Made with Love</h3>
              <p className="text-gray-600">
                Every dish is prepared fresh to order with the finest ingredients and the care that comes from a family-owned restaurant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Us Today</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium">{restaurantConfig.address.street}</p>
                    <p className="text-gray-600">{restaurantConfig.address.city}, {restaurantConfig.address.province} {restaurantConfig.address.postalCode}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium">Daily {restaurantConfig.hours.monday}</p>
                    <p className="text-sm text-gray-500">Hours may vary on holidays</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3" />
                  <a href={`tel:${restaurantConfig.phone}`} className="font-medium text-red-600 hover:text-red-700">
                    {restaurantConfig.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Order?</h3>
              <p className="text-gray-600 mb-6">
                Experience authentic Italian cuisine delivered right to your door or ready for pickup.
              </p>
              <div className="space-y-4">
                <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer" className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                  Order Online Now
                </a>
                <a href={`tel:${restaurantConfig.phone}`} className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                  Call to Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section with Google Maps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Hull, Quebec - Easy to find, easy to love
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-3" />
                    <div>
                      <p className="font-medium">{restaurantConfig.address.street}</p>
                      <p className="text-gray-600">{restaurantConfig.address.city}, {restaurantConfig.address.province} {restaurantConfig.address.postalCode}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href="https://maps.google.com/?q=171+Boulevard+Saint-Joseph,+Gatineau,+QC+J8Y+3X2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.3!2d-75.7156!3d45.4287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a6f23e5b5b%3A0x123456789!2s171%20Boulevard%20Saint-Joseph%2C%20Gatineau%2C%20QC%20J8Y%203X2!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Milano Pizzeria Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Sticky Order Button */}
      <StickyOrderButton />
    </div>
  );
};

export default About;
