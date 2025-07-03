import OptimizedHeroImage from '@/components/OptimizedHeroImage';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';
import { MapPin, Star, Utensils, Truck, RotateCcw } from 'lucide-react';
import { restaurantConfig } from '@/config/restaurantConfig';
import Header from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/translations';
const Index = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage);

  return <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      <Header />
      
      {/* Hero Section with Milano Branding */}
      <OptimizedHeroImage src="/lovable-uploads/2748c3eb-8ff1-4534-bae5-be51afffa13d.png" alt="Milano Pizzeria - Authentic Italian Pizza in Hull, Quebec" className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 text-red px-2 py-2 text-sm font-medium bg-yellow-500">
              🍕 {t('hero.tagline')}
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
              Milano Pizzeria
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-200" asChild>
                <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                  <Utensils className="mr-2 h-5 w-5" />
                  {t('hero.orderOnline')}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <p className="text-lg text-gray-600">{t('services.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Delivery Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 overflow-hidden">
              {/* Section 1: Image with Red Overlay + Icon + Title */}
              <div className="h-48 relative overflow-hidden">
                <img src="/lovable-uploads/ab3716ff-09c5-4cc3-a377-8a2b406d2e65.png" alt="Delivery service" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-red-600/80 flex flex-col items-center justify-center text-white">
                  <Truck className="h-12 w-12 mb-3" />
                  <h3 className="text-2xl font-bold">{t('services.delivery.title')}</h3>
                </div>
              </div>
              
              {/* Section 2: White Background with Description */}
              <div className="bg-white p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('services.delivery.description')}
                </p>
              </div>
              
              {/* Section 3: White Background with Button */}
              <div className="bg-white px-6 pb-6">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 w-full" asChild>
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    {t('services.delivery.button')}
                  </a>
                </Button>
              </div>
            </Card>

            {/* Takeout Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 overflow-hidden">
              {/* Section 1: Image with Green Overlay + Icon + Title */}
              <div className="h-48 relative overflow-hidden">
                <img src="/lovable-uploads/ab3716ff-09c5-4cc3-a377-8a2b406d2e65.png" alt="Takeout service" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-yellow-500/80 flex flex-col items-center justify-center text-white">
                  <Utensils className="h-12 w-12 mb-3" />
                  <h3 className="text-2xl font-bold">{t('services.takeout.title')}</h3>
                </div>
              </div>
              
              {/* Section 2: White Background with Description */}
              <div className="bg-white p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('services.takeout.description')}
                </p>
              </div>
              
              {/* Section 3: White Background with Button */}
              <div className="bg-white px-6 pb-6">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 w-full" asChild>
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    {t('services.takeout.button')}
                  </a>
                </Button>
              </div>
            </Card>

            {/* Online Ordering Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 overflow-hidden">
              {/* Section 1: Image with Yellow Overlay + Icon + Title */}
              <div className="h-48 relative overflow-hidden">
                <img src="/lovable-uploads/ab3716ff-09c5-4cc3-a377-8a2b406d2e65.png" alt="Online ordering" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-red-600/80">
                  <RotateCcw className="h-12 w-12 mb-3" />
                  <h3 className="text-2xl font-bold">{t('services.online.title')}</h3>
                </div>
              </div>
              
              {/* Section 2: White Background with Description */}
              <div className="bg-white p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('services.online.description')}
                </p>
              </div>
              
              {/* Section 3: White Background with Button */}
              <div className="bg-white px-6 pb-6">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 w-full" asChild>
                  <a href={restaurantConfig.externalUrls.menuOrdering} target="_blank" rel="noopener noreferrer">
                    {t('services.online.button')}
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 relative" style={{
      backgroundImage: 'url(/lovable-uploads/3528af3f-72ca-4cab-9ea2-e35841c1f869.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-gray-900/90 py-4"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 font-playfair">
            {t('serviceAreas.title')}
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            {t('serviceAreas.subtitle')}
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
            {t('specialties.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('specialties.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              t('specialties.items.pizza'),
              t('specialties.items.pasta'), 
              t('specialties.items.cuisine'),
              t('specialties.items.subs'),
              t('specialties.items.appetizers'),
              t('specialties.items.sauces')
            ].map((specialty, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200">
                <Star className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-lg font-medium text-gray-800">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Footer */}
      <Footer />
    </div>;
};
export default Index;