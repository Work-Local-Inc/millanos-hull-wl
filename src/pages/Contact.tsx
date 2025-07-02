
import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, ExternalLink, Instagram, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  // Enhanced restaurant data with specific hours
  const restaurantData = {
    business_name: "House of Lasagna & Pizza",
    phone: "(613) 728-9700",
    address: "984 Merivale Rd",
    city: "Ottawa",
    province: "ON", 
    postal_code: "K1Z 6A4",
    country: "Canada",
    hours: "Daily 11:00 AM - 10:00 PM",
    instagram: "https://www.instagram.com/h.o.l.ottawa/?hl=en",
    delivery_areas: ["Carlington", "Little Italy", "Westboro", "Old Nepean"]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Contact Form Submission - House of Lasagna & Pizza');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:info@houseoflasagna.ca?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your default email client will open with the message pre-filled.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact {restaurantData.business_name}</h1>
          <p className="text-xl text-gray-600">
            Ottawa's authentic Italian restaurant on Merivale Road
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Restaurant Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a 
                    href={`tel:${restaurantData.phone}`}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    {restaurantData.phone}
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Call for orders or inquiries</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    {restaurantData.address}<br/>
                    {restaurantData.city}, {restaurantData.province} {restaurantData.postal_code}<br/>
                    {restaurantData.country}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Located on Merivale Road</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="text-gray-600">{restaurantData.hours}</p>
                  <p className="text-sm text-gray-500 mt-1">Open every day of the week</p>
                </div>
              </div>

              <div className="flex items-start">
                <Instagram className="h-6 w-6 text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Follow Us</h3>
                  <a 
                    href={restaurantData.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
                  >
                    @h.o.l.ottawa
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                  <p className="text-sm text-gray-500 mt-1">See our latest dishes and updates</p>
                </div>
              </div>
            </div>

            {/* Delivery Areas */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Delivery Areas</h4>
              <p className="text-gray-600 text-sm mb-2">We deliver to these Ottawa neighborhoods:</p>
              <div className="grid grid-cols-2 gap-2">
                {restaurantData.delivery_areas.map((area, index) => (
                  <span key={index} className="text-sm text-red-600 font-medium">{area}</span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <a 
                href="https://houseoflasagna.ca/?p=menu"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Order Online
              </a>
              <a 
                href={`tel:${restaurantData.phone}`}
                className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-center inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call to Order
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Tell us about your inquiry, special requests, or feedback..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              This will open your email client with the message pre-filled.
            </p>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Questions About Orders?</h4>
              <p className="text-blue-800 text-sm">
                For immediate assistance with orders, please call us directly at {restaurantData.phone} 
                or use our online ordering system for the fastest service.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
