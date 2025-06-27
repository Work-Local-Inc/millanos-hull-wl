
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
        
        {/* Brick Wall Footer in Hero */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 opacity-30"
          style={{
            backgroundImage: `url(/lovable-uploads/bcfd9079-35fd-4f96-a925-dddaf1a7a032.png)`,
            backgroundSize: '200px 100px',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            transform: 'scaleY(-1)'
          }}
        />
      </OptimizedHeroImage>

      {/* Service Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Would You Like Your Food?</h2>
            <p className="text-lg text-gray-600">Choose the option that works best for you.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Delivery Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 overflow-hidden">
              {/* Section 1: Image with Red Overlay + Icon + Title */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/lovable-uploads/ab3716ff-09c5-4cc3-a377-8a2b406d2e65.png" 
                  alt="Delivery service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-600/80 flex flex-col items-center justify-center text-white">
                  <Truck className="h-12 w-12 mb-3" />
                  <h3 className="text-2xl font-bold">Delivery</h3>
                </div>
              </div>
              
              {/* Section 2: White Background with Description */}
              <div className="bg-white p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get your favorite Italian dishes delivered right to your door across Ottawa. Fast and reliable delivery service to Carlington, Little Italy, Westboro, and Old Nepean.
                </p>
              </div>
              
              {/* Section 3: White Background with Button */}
              <div className="bg-white px-6 pb-6">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 w-full" asChild>
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    Order for Delivery
                  </a>
                </Button>
              </div>
            </Card>

            {/* Takeout Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 overflow-hidden">
              {/* Section 1: Image with Green Overlay + Icon + Title */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/lovable-uploads/ab3716ff-09c5-4cc3-a377-8a2b406d2e65.png" 
                  alt="Takeout service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-600/80 flex flex-col items-center justify-center text-white">
                  <Utensils className="h-12 w-12 mb-3" />
                  <h3 className="text-2xl font-bold">Takeout</h3>
                </div>
              </div>
              
              {/* Section 2: White Background with Description */}
              <div className="bg-white p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Order ahead and pick up your food when it's ready at our Merivale Road location. Skip the wait and enjoy hot, fresh Italian food.
                </p>
              </div>
              
              {/* Section 3: White Background with Button */}
              <div className="bg-white px-6 pb-6">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 w-full" asChild>
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    Order for Pickup
                  </a>
                </Button>
              </div>
            </Card>

            {/* Online Ordering Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 overflow-hidden">
              {/* Section 1: Image with Orange Overlay + Icon + Title */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/lovable-uploads/ab3716ff-09c5-4cc3-a377-8a2b406d2e65.png" 
                  alt="Online ordering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-orange-500/80 flex flex-col items-center justify-center text-white">
                  <RotateCcw className="h-12 w-12 mb-3" />
                  <h3 className="text-2xl font-bold">Order Online</h3>
                </div>
              </div>
              
              {/* Section 2: White Background with Description */}
              <div className="bg-white p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Browse our full menu and place your order online through our secure ordering system. Easy ordering for Ottawa's best Italian food.
                </p>
              </div>
              
              {/* Section 3: White Background with Button */}
              <div className="bg-white px-6 pb-6">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 w-full" asChild>
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    Start Your Order
                  </a>
                </Button>
              </div>
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
