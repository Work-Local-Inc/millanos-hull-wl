import { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, Truck, ShoppingBag, ExternalLink, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import PhotoGallery from '@/components/PhotoGallery';
import StickyOrderButton from '@/components/StickyOrderButton';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hardcoded data to replace the external JSON dependencies
  const siteInfo = {
    business_name: "House of Lasagna & Pizza",
    phone: "(613) 728-9700",
    address: "984 Merivale Rd Ottawa,ON K1Z 6A4,Canada"
  };

  const navigation = {
    primary_navigation: [{
      name: "Home",
      url: "#home",
      active: true
    }, {
      name: "Menu",
      url: "https://houseoflasagna.ca/?p=menu",
      active: false,
      external: true
    }, {
      name: "Contact",
      url: "#contact",
      active: false
    }]
  };

  const content = {
    hero_section: {
      heading: "House of Lasagna & Pizza - Ottawa's Authentic Italian Restaurant",
      subheading: "Serving Ottawa's Best Authentic Italian Dishes, BBQ Chicken, Wings, Subs and More Since Day One",
      notice: "Menu items and prices valid for takeout and delivery only"
    }
  };

  const contact = {
    phone: "(613) 728-9700",
    address: "984 Merivale Rd",
    city: "Ottawa",
    province: "ON",
    postal_code: "K1Z 6A4",
    hours: "Daily 11:00 AM - 10:00 PM"
  };

  // Updated services to reflect external ordering
  const updatedServices = [{
    title: 'Delivery',
    description: 'Get your favorite Italian dishes delivered right to your door across Ottawa. Fast and reliable delivery service to Carlington, Little Italy, Westboro, and Old Nepean.',
    action: 'Order for Delivery',
    url: 'https://houseoflasagna.ca/?p=menu'
  }, {
    title: 'Takeout',
    description: 'Order ahead and pick up your food when it\'s ready at our Merivale Road location. Skip the wait and enjoy hot, fresh Italian food.',
    action: 'Order for Pickup',
    url: 'https://houseoflasagna.ca/?p=menu'
  }, {
    title: 'Order Online',
    description: 'Browse our full menu and place your order online through our secure ordering system. Easy ordering for Ottawa\'s best Italian food.',
    action: 'Start Your Order',
    url: 'https://houseoflasagna.ca/?p=menu'
  }];

  const serviceIcons = {
    'Delivery': Truck,
    'Takeout': ShoppingBag,
    'Order Online': ExternalLink
  };

  const serviceColors = {
    'Delivery': "bg-red-600 hover:bg-red-700",
    'Takeout': "bg-green-600 hover:bg-green-700",
    'Order Online': "bg-yellow-600 hover:bg-yellow-700"
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/560a134e-075e-40b0-bb51-290d54d753bb.png" 
                alt="House of Lasagna & Pizza Logo - Ottawa Italian Restaurant" 
                className="h-16 w-auto object-contain" 
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                About
              </Link>
              <Link to="/delivery-areas" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Delivery Areas
              </Link>
              <Link to="/late-night-service" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Late Night Service
              </Link>
              <Link to="/reviews" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Reviews
              </Link>
              <a href="https://www.instagram.com/h.o.l.ottawa/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-600 font-medium transition-colors flex items-center">
                <Instagram className="h-4 w-4 mr-1" />
                Instagram
              </a>
              <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors inline-flex items-center shadow-md">
                <ExternalLink className="h-4 w-4 mr-2" />
                Order Menu
              </a>
            </nav>

            {/* Phone Number - Desktop */}
            <div className="hidden md:flex items-center">
              <Phone className="h-4 w-4 text-red-600 mr-2" />
              <a href={`tel:${siteInfo?.phone}`} className="text-lg font-bold text-red-600 hover:text-red-700 transition-colors">
                {siteInfo?.phone}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-2 bg-white border-t border-gray-200">
                <Link 
                  to="/about" 
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/delivery-areas" 
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Delivery Areas
                </Link>
                <Link 
                  to="/late-night-service" 
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Late Night Service
                </Link>
                <Link 
                  to="/reviews" 
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </Link>
                <a 
                  href="https://www.instagram.com/h.o.l.ottawa/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 font-medium rounded-md transition-colors flex items-center"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </a>
                <a 
                  href="https://houseoflasagna.ca/?p=menu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block mx-3 mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center shadow-md"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Order Menu
                </a>
                <div className="px-3 py-3 border-t border-gray-200 mt-4">
                  <a href={`tel:${siteInfo?.phone}`} className="flex items-center justify-center text-red-600 font-bold bg-red-50 py-2 px-4 rounded-lg hover:bg-red-100 transition-colors">
                    <Phone className="h-4 w-4 mr-2" />
                    {siteInfo?.phone}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-black/70 to-black/50 text-white min-h-[600px] flex items-center" style={{
        backgroundImage: 'url(/lovable-uploads/27c6d713-96e0-4825-81df-e1da57e9cfaf.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              {content?.hero_section.heading}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md">
              {content?.hero_section.subheading}
            </p>
            <p className="text-lg mb-8 text-gray-200 drop-shadow-md">
              Located on Merivale Road, serving authentic Italian flavors to Ottawa families
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg inline-flex items-center justify-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                Order Now
              </a>
              <a href={`tel:${siteInfo?.phone}`} className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                Call {siteInfo?.phone}
              </a>
            </div>
            {content?.hero_section.notice && (
              <p className="text-sm text-gray-200 mt-4 italic drop-shadow-md">
                {content.hero_section.notice}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Would You Like Your Food?</h2>
            <p className="text-lg text-gray-600">Choose the option that works best for you in Ottawa</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {updatedServices.map((service, index) => {
              const Icon = serviceIcons[service.title as keyof typeof serviceIcons];
              const colorClass = serviceColors[service.title as keyof typeof serviceColors];
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`${colorClass} p-6 text-center text-white relative overflow-hidden`}>
                    <div 
                      className="absolute inset-0 opacity-20 bg-cover bg-center"
                      style={{
                        backgroundImage: 'url(/lovable-uploads/27c6d713-96e0-4825-81df-e1da57e9cfaf.png)',
                        filter: 'blur(1px)'
                      }}
                    ></div>
                    <div className="relative z-10">
                      {Icon && <Icon className="h-12 w-12 mx-auto mb-4" />}
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <a href={service.url} target="_blank" rel="noopener noreferrer" className={`block w-full ${colorClass} text-white py-3 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {service.action}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving Ottawa Communities</h2>
            <p className="text-lg text-gray-600">We deliver authentic Italian food to neighborhoods across Ottawa</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {['Carlington', 'Little Italy', 'Westboro', 'Old Nepean'].map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                <MapPin className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{area}</h4>
                <p className="text-gray-600 text-sm">Fast delivery available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section id="menu" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Authentic Italian Menu</h2>
            <p className="text-lg text-gray-600 mb-2">Homemade lasagna, wood-fired pizzas, BBQ chicken, wings, and traditional Italian dishes</p>
            <p className="text-sm text-gray-500 italic">Menu items and prices valid for takeout and delivery only</p>
          </div>
          
          <div className="text-center mt-8">
            <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              <ExternalLink className="h-5 w-5 mr-2" />
              View Full Menu & Order Online
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Ottawa's Best Italian Restaurant</h2>
            <p className="text-lg text-gray-600">Located on Merivale Road - Come experience authentic Italian cuisine in the heart of Ottawa</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <a href={`tel:${contact?.phone}`} className="text-lg font-semibold text-red-600 hover:text-red-700">
                    {contact?.phone}
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium">{contact?.address}</p>
                    <p className="text-gray-600">{contact?.city}, {contact?.province} {contact?.postal_code}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">Hours of Operation</p>
                    <p className="text-gray-600">{contact?.hours}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <a href="https://www.instagram.com/h.o.l.ottawa/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:text-red-600 transition-colors">
                    Follow us on Instagram @h.o.l.ottawa
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <a href="https://houseoflasagna.ca/?p=menu" target="_blank" rel="noopener noreferrer" className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Order Online
                </a>
                <a href={`tel:${contact?.phone}`} className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call to Order
                </a>
                <Link to="/delivery-areas" className="block w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                  View Delivery Areas
                </Link>
                <Link to="/reviews" className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-semibold transition-colors text-center">
                  Read Customer Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Order Button */}
      <StickyOrderButton />
    </div>
  );
};

export default Index;
