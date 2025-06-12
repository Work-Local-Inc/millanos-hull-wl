
import { Link } from 'react-router-dom';
import { ChefHat, ArrowLeft, HelpCircle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What are your delivery hours?",
      answer: "We deliver during our regular business hours. Please contact us at (613) 728-9700 for current delivery hours and availability."
    },
    {
      question: "Do you deliver to my area?",
      answer: "We deliver to Carlington, Little Italy, Westboro, and Old Nepean. If you're unsure whether we deliver to your location, please call us and we'll be happy to check."
    },
    {
      question: "What is your minimum order for delivery?",
      answer: "Please contact us for current minimum order requirements and delivery fees, as they may vary by location."
    },
    {
      question: "Do you offer gluten-free options?",
      answer: "While we can discuss menu modifications, our kitchen handles wheat products and we cannot guarantee gluten-free preparation. Please speak with our staff about your dietary needs."
    },
    {
      question: "Can I modify menu items for allergies?",
      answer: "We'll do our best to accommodate dietary restrictions, but our kitchen handles common allergens. Please inform us of any severe allergies when ordering, and understand that cross-contamination may occur."
    },
    {
      question: "How long does delivery typically take?",
      answer: "Delivery times vary based on your location, weather conditions, and how busy we are. We'll provide an estimated delivery time when you place your order."
    },
    {
      question: "Do you accept credit cards?",
      answer: "Yes, we accept cash, credit cards, and debit cards for both pickup and delivery orders."
    },
    {
      question: "Can I place an order in advance?",
      answer: "Yes, you can place advance orders by calling us. This is especially helpful for large orders or during busy periods."
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer: "Customer satisfaction is important to us. If you have any concerns about your order, please contact us within 24 hours and we'll work to resolve the issue."
    },
    {
      question: "Do you cater events or large orders?",
      answer: "Please call us to discuss catering options and large orders. We can work with you to provide food for your special events."
    },
    {
      question: "How can I get updates on specials and promotions?",
      answer: "Follow us on social media or call the restaurant to learn about current specials and promotions."
    },
    {
      question: "Can I cancel or modify my order after placing it?",
      answer: "Orders can typically be cancelled or modified if we haven't started preparation yet. Please call us as soon as possible if you need to make changes."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-red-600 hover:text-red-700 mr-4">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </Link>
              <ChefHat className="h-8 w-8 text-red-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">House of Lasagna & Pizza</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <HelpCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-2">Find answers to common questions about our restaurant and services</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openItems.includes(index) ? (
                  <Minus className="h-5 w-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-red-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-lg mb-6">We're here to help! Give us a call or visit our contact page.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(613) 728-9700"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (613) 728-9700
            </a>
            <Link 
              to="/contact"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
