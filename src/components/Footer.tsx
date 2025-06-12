
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4 italian-script">
              Ottawa Italian Eats
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Bringing authentic Italian flavors to Ottawa since 1985. 
              From our famiglia to yours, buon appetito!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-red-500 transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Little Italy Street</li>
              <li>Ottawa, ON K1N 6N5</li>
              <li>(613) 555-PASTA</li>
              <li>info@ottawaitalian.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                Hours: Mon-Sun 11AM-10PM
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by the Ottawa Italian Eats family
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2024 Ottawa Italian Eats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
