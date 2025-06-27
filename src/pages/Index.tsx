
import OptimizedHeroImage from '@/components/OptimizedHeroImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PhotoGallery from '@/components/PhotoGallery';
import { Phone, MapPin, Clock, Star, Utensils, Truck, RotateCcw } from 'lucide-react';
import { restaurantConfig } from '@/config/restaurantConfig';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      <Header />
      
      {/* Hero Section with Milano Branding */}
      <OptimizedHeroImage 
        src={restaurantConfig.branding.heroImagePath}
        alt="Milano Pizzeria - Authentic Italian Pizza in Hull, Quebec"
        className="relative"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium">
              🍕 Authentic Italian Cuisine in Hull, Quebec
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
              Milano Pizzeria
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto">
              {restaurantConfig.tagline} - Serving Hull and Gatineau with traditional Italian recipes and fresh ingredients
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-200"
                asChild
              >
                <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                  <Utensils className="mr-2 h-5 w-5" />
                  Order Online Now
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10"
                asChild
              >
                <a href={`tel:${restaurantConfig.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {restaurantConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </OptimizedHeroImage>

      {/* Service Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Truck className="h-8 w-8 text-red-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Delivery</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fast delivery throughout Hull, Aylmer, and Gatineau. Hot, fresh pizza delivered to your door.
                </p>
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3"
                  asChild
                >
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    Order for Delivery
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Utensils className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Takeout</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Order ahead for convenient pickup. Skip the wait and enjoy Milano's authentic Italian cuisine.
                </p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3"
                  asChild
                >
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    Order for Pickup
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <RotateCcw className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Re-order</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Love your last order? Re-order the same delicious meal with just one click.
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3"
                  asChild
                >
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    Re-order Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-playfair">
            Serving Hull & Gatineau
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Milano Pizzeria delivers authentic Italian cuisine throughout the Outaouais region
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {restaurantConfig.serviceAreas.map((area, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-lg bg-white text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200">
                <MapPin className="mr-2 h-4 w-4" />
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-playfair">
            Our Italian Specialties
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From wood-fired pizzas to homemade pasta, every dish is crafted with authentic Italian tradition
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Authentic Italian Pizza",
              "Fresh Pasta Dishes", 
              "Traditional Italian Cuisine",
              "Specialty Subs",
              "Italian Appetizers",
              "Homemade Sauces"
            ].map((specialty, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200">
                <Star className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-lg font-medium text-gray-800">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section 
        className="py-16 text-white relative"
        style={{
          backgroundImage: `url(${restaurantConfig.branding.footerBgPath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/90"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 font-playfair">Visit Milano Pizzeria</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href={`tel:${restaurantConfig.phone}`} className="text-red-400 hover:text-red-300 transition-colors text-lg">
                {restaurantConfig.phone}
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">
                {restaurantConfig.address.street}<br />
                {restaurantConfig.address.city}, {restaurantConfig.address.province}
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-300">
                Mon-Thu: {restaurantConfig.hours.monday}<br />
                Fri-Sat: {restaurantConfig.hours.friday}<br />
                Sunday: {restaurantConfig.hours.sunday}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />
    </div>
  );
};

export default Index;
