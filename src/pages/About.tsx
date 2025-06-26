
import { Phone, MapPin, Clock, Star, Heart, Users, Award, ExternalLink, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/560a134e-075e-40b0-bb51-290d54d753bb.png" alt="House of Lasagna & Pizza Logo" className="h-16 w-auto object-contain" />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/about" className="text-red-600 font-medium">About</Link>
              <Link to="/delivery-areas" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Delivery Areas</Link>
              <Link to="/reviews" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Reviews</Link>
              <Link to="/late-night-service" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Late Night Service</Link>
              <a href="https://www.instagram.com/h.o.l.ottawa/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 font-medium transition-colors flex items-center">
                <Instagram className="h-4 w-4 mr-1" />
                Instagram
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center">
                <ExternalLink className="h-4 w-4 mr-2" />
                Menu
              </a>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-red-600 mr-2" />
                <a href="tel:(613) 728-9700" className="text-lg font-bold text-red-600 hover:text-red-700">
                  (613) 728-9700
                </a>
              </div>
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Bringing Authentic Italian Flavors to Ottawa Since Day One
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Family Tradition, Authentic Flavors</h2>
              <p className="text-lg text-gray-600 mb-6">
                House of Lasagna & Pizza has been serving Ottawa's finest Italian cuisine for years, becoming a beloved cornerstone of the community. Our journey began with a simple mission: to bring authentic Italian flavors and traditional family recipes to the heart of Ottawa.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Located on Merivale Road, we've built our reputation on using only the finest ingredients, time-honored cooking techniques, and recipes passed down through generations. Every dish is prepared with love and attention to detail that you can taste in every bite.
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
              <img alt="House of Lasagna & Pizza Restaurant Interior" className="rounded-lg shadow-lg w-full h-auto" src="/lovable-uploads/5b6948a5-2e2d-4625-9bcb-7f72022a60a7.jpg" />
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
              Discover why Ottawa families choose House of Lasagna & Pizza for their Italian cuisine
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Focused</h3>
              <p className="text-gray-600">
                We're proud to serve Ottawa's neighborhoods including Carlington, Little Italy, Westboro, and Old Nepean with fast, reliable delivery service.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic Italian</h3>
              <p className="text-gray-600">
                Our signature lasagna is made with traditional Italian recipes, featuring layers of pasta, rich meat sauce, and perfectly melted cheese.
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
                    <p className="font-medium">984 Merivale Rd</p>
                    <p className="text-gray-600">Ottawa, ON K1Z 6A4</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium">Daily 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3" />
                  <a href="tel:(613) 728-9700" className="font-medium text-red-600 hover:text-red-700">
                    (613) 728-9700
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
                <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                  Order Online Now
                </a>
                <a href="tel:(613) 728-9700" className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                  Call to Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default About;
