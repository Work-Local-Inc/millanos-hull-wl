import OptimizedHeroImage from '@/components/OptimizedHeroImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';
import { MapPin, Star, Utensils, Truck, RotateCcw } from 'lucide-react';
import { restaurantConfig } from '@/config/restaurantConfig';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      <Header />
      
      {/* Hero Section with Milano Branding */}
      <OptimizedHeroImage src="/lovable-uploads/2748c3eb-8ff1-4534-bae5-be51afffa13d.png" alt="Milano Pizzeria - Authentic Italian Pizza in Hull, Quebec" className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 text-red px-2 py-2 text-sm font-medium bg-yellow-500">
              🍕 Authentic Italian Cuisine in Hull, Quebec
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
              Milano Pizzeria
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto">
              {restaurantConfig.tagline} - Serving Hull and Gatineau with traditional Italian recipes and fresh ingredients
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-200" asChild>
                <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                  <Utensils className="mr-2 h-5 w-5" />
                  Order Online Now
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-green-600/90" asChild>
                <a href={`tel:${restaurantConfig.phone}`}>
                  <span className="mr-2">📞</span>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Would You Like Your Food?</h2>
            <p className="text-lg text-gray-600">Choose the option that works best for you.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 overflow-hidden bg-gradient-to-br from-red-500 to-red-600 text-white">
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Delivery</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Get your favorite Italian dishes delivered right to your door across Ottawa. Fast and reliable delivery service to Carlington, Little Italy, Westboro, and Old Nepean.
                  </p>
                </div>
                <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-3 w-full" asChild>
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    Order for Delivery
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 overflow-hidden bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Utensils className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Takeout</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Order ahead and pick up your food when it's ready at our Merivale Road location. Skip the wait and enjoy hot, fresh Italian food.
                  </p>
                </div>
                <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-6 py-3 w-full" asChild>
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    Order for Pickup
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 overflow-hidden bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <RotateCcw className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Order Online</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Browse our full menu and place your order online through our secure ordering system. Easy ordering for Ottawa's best Italian food.
                  </p>
                </div>
                <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-6 py-3 w-full" asChild>
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    Start Your Order
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
            {restaurantConfig.serviceAreas.map((area, index) => <Badge key={index} variant="secondary" className="px-4 py-2 text-lg bg-white text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200">
                <MapPin className="mr-2 h-4 w-4" />
                {area}
              </Badge>)}
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
            {["Authentic Italian Pizza", "Fresh Pasta Dishes", "Traditional Italian Cuisine", "Specialty Subs", "Italian Appetizers", "Homemade Sauces"].map((specialty, index) => <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200">
                <Star className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-lg font-medium text-gray-800">{specialty}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
