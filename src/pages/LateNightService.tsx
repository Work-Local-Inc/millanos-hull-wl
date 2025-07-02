import { Clock, MapPin, Moon, Star, Truck } from 'lucide-react';
import Header from '@/components/Header';
import StickyOrderButton from '@/components/StickyOrderButton';

const LateNightService = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <Header currentPage="late-night-service" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black/80 to-black/60 text-white py-20" style={{
        backgroundImage: 'url(/lovable-uploads/3528af3f-72ca-4cab-9ea2-e35841c1f869.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Moon className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Late Night Cravings?</h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Satisfy Your Italian Food Cravings Until 10 PM Daily
            </p>
            <div className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
              <Clock className="h-5 w-5 mr-2" />
              Open Until 10:00 PM Every Day
            </div>
          </div>
        </div>
      </section>

      {/* Late Night Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ottawa's Go-To Late Night Italian Food
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                When those late-night cravings hit, House of Lasagna & Pizza is here for you. We're open until 10 PM every day, ready to deliver hot, fresh Italian food right to your door across Ottawa.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're working late, studying, or just want a delicious dinner, our full menu is available for delivery and takeout until closing time.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-semibold">Daily Hours</p>
                    <p className="text-gray-600">11:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Truck className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-semibold">Last Delivery Orders</p>
                    <p className="text-gray-600">Accepted until 9:45 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-semibold">Late Night Specials</p>
                    <p className="text-gray-600">Pizza & Wings combos available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <Moon className="h-8 w-8 text-yellow-400 inline mr-2" />
                Late Night Favorites
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-600 pb-4">
                  <h4 className="font-semibold text-lg">Signature Lasagna</h4>
                  <p className="text-gray-300">Perfect comfort food for late evening cravings</p>
                </div>
                <div className="border-b border-gray-600 pb-4">
                  <h4 className="font-semibold text-lg">Hot Wings & Pizza</h4>
                  <p className="text-gray-300">Great for sharing or solo late-night dining</p>
                </div>
                <div className="border-b border-gray-600 pb-4">
                  <h4 className="font-semibold text-lg">BBQ Chicken Sub</h4>
                  <p className="text-gray-300">Hearty sandwich perfect for late workers</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Pasta Dishes</h4>
                  <p className="text-gray-300">Spaghetti, Fettuccine Alfredo, and more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Late Night Delivery Areas in Ottawa
            </h2>
            <p className="text-lg text-gray-600">
              We deliver hot, fresh Italian food late into the evening across these Ottawa neighborhoods
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Carlington', 'Little Italy', 'Westboro', 'Old Nepean'].map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <MapPin className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area}</h3>
                <p className="text-gray-600 text-sm mb-4">Delivery until 9:45 PM</p>
                <div className="text-green-600 font-semibold">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Fast Delivery
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Now Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don't Let Late Night Cravings Wait
          </h2>
          <p className="text-xl mb-8">
            Order now and get hot, fresh Italian food delivered to your door
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Order Online Now
            </a>
            <a href="tel:(613) 728-9700" className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Call (613) 728-9700
            </a>
          </div>
          <p className="text-red-100 mt-4 text-sm">
            Last orders accepted at 9:45 PM for delivery
          </p>
        </div>
      </section>

      {/* Sticky Order Button */}
      <StickyOrderButton />
    </div>
  );
};

export default LateNightService;
