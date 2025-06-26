
import { Phone, MapPin, Clock, Truck, Navigation, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeliveryAreas = () => {
  const deliveryAreas = [
    {
      name: 'Carlington',
      description: 'Fast delivery to Carlington neighborhood',
      estimatedTime: '25-35 minutes',
      highlights: ['Residential areas', 'Near Carlington Park', 'Quick service']
    },
    {
      name: 'Little Italy',
      description: 'Serving the heart of Ottawa\'s Italian community',
      estimatedTime: '20-30 minutes',
      highlights: ['Preston Street area', 'Italian heritage district', 'Local favorite']
    },
    {
      name: 'Westboro',
      description: 'Premium delivery service to Westboro',
      estimatedTime: '30-40 minutes',
      highlights: ['Westboro Beach area', 'Richmond Road corridor', 'Family neighborhoods']
    },
    {
      name: 'Old Nepean',
      description: 'Reliable delivery throughout Old Nepean',
      estimatedTime: '25-35 minutes',
      highlights: ['Established community', 'Merivale Road area', 'Close to restaurant']
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/560a134e-075e-40b0-bb51-290d54d753bb.png" 
                alt="House of Lasagna & Pizza Logo" 
                className="h-16 w-auto object-contain" 
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</Link>
              <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Menu</a>
              <Link to="/delivery-areas" className="text-red-600 font-medium">Delivery Areas</Link>
              <Link to="/reviews" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Reviews</Link>
            </nav>
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-red-600 mr-2" />
              <a href="tel:(613) 728-9700" className="text-lg font-bold text-red-600 hover:text-red-700">
                (613) 728-9700
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black/80 to-black/60 text-white py-20" style={{
        backgroundImage: 'url(/lovable-uploads/27c6d713-96e0-4825-81df-e1da57e9cfaf.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Truck className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Delivery Areas</h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Fast, Reliable Italian Food Delivery Across Ottawa
            </p>
            <div className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
              <Clock className="h-5 w-5 mr-2" />
              Delivery Available Daily 11 AM - 10 PM
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Deliver</h2>
            <p className="text-lg text-gray-600">
              We proudly serve these Ottawa neighborhoods with hot, fresh Italian food
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {deliveryAreas.map((area, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-300 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-red-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{area.name}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-semibold text-gray-900">
                    Estimated Delivery: {area.estimatedTime}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Area Highlights:</h4>
                  <ul className="text-gray-600 space-y-1">
                    {area.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold text-center transition-colors">
                    Order Now
                  </a>
                  <a href="tel:(613) 728-9700" className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold text-center transition-colors">
                    Call Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Most orders delivered within 30-40 minutes. Hot, fresh food guaranteed.
              </p>
            </div>
            <div className="text-center">
              <Navigation className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">GPS Tracking</h3>
              <p className="text-gray-600">
                Our delivery drivers use GPS to find the fastest route to your location.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Extended Hours</h3>
              <p className="text-gray-600">
                Delivery available until 9:45 PM every day of the week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Order Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
              <p className="text-xl mb-6">
                Get authentic Italian food delivered to your door across Ottawa
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>984 Merivale Rd, Ottawa, ON K1Z 6A4</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(613) 728-9700</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>Daily 11:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Order Options</h3>
              <div className="space-y-4">
                <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                  Order Online
                </a>
                <a href="tel:(613) 728-9700" className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                  Call to Order
                </a>
                <Link to="/late-night-service" className="block w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                  Late Night Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryAreas;
