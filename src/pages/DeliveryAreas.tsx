
import { MapPin, Truck, Clock, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyOrderButton from '@/components/StickyOrderButton';
import OptimizedHeroImage from '@/components/OptimizedHeroImage';
import { restaurantConfig } from '@/config/restaurantConfig';

const DeliveryAreas = () => {
  const deliveryAreas = [
    {
      name: 'Hull',
      description: 'Fast delivery to all Hull neighborhoods',
      estimatedTime: '20-30 minutes'
    },
    {
      name: 'Aylmer', 
      description: 'Serving the Aylmer community with authentic Italian cuisine',
      estimatedTime: '25-35 minutes'
    },
    {
      name: 'Gatineau Centre',
      description: 'Quick delivery throughout Gatineau Centre area',
      estimatedTime: '25-35 minutes'
    },
    {
      name: 'Buckingham',
      description: 'Reliable service to Buckingham residents',
      estimatedTime: '30-40 minutes'
    },
    {
      name: 'Masson-Angers',
      description: 'Extended delivery service to Masson-Angers area',
      estimatedTime: '35-45 minutes'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <Header currentPage="delivery-areas" />

      {/* Hero Section */}
      <OptimizedHeroImage
        src="/lovable-uploads/c917ed64-c898-411a-a559-82a6202f8fe1.png"
        alt="Milano Pizzeria - Hull Quebec Delivery Areas"
        className="text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Truck className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Delivery Areas</h1>
            <p className="text-xl md:text-2xl text-gray-100">
              We Deliver Fresh Italian Food Across Hull & Gatineau
            </p>
          </div>
        </div>
      </OptimizedHeroImage>

      {/* Delivery Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Deliver</h2>
            <p className="text-lg text-gray-600">
              Fast, reliable delivery of authentic Italian cuisine throughout the Outaouais region
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliveryAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{area.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="flex items-center text-green-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Estimated delivery: {area.estimatedTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8">
            Get hot, fresh Italian food delivered to your door
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={restaurantConfig.externalUrls.menuOrdering} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Order Online Now
            </a>
            <a 
              href={`tel:${restaurantConfig.phone}`} 
              className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {restaurantConfig.phone}
            </a>
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

export default DeliveryAreas;
