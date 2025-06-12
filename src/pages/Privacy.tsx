
import { Link } from 'react-router-dom';
import { ChefHat, ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';

const Privacy = () => {
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
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mt-2">Last updated: December 2024</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-red-600 mr-2" />
                Information We Collect
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  At House of Lasagna & Pizza, we are committed to protecting your privacy. We collect information 
                  to provide better services to our customers and improve their dining experience.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal information (name, email, phone number) when you place orders</li>
                  <li>Delivery address and payment information for order processing</li>
                  <li>Order history and preferences to enhance your experience</li>
                  <li>Website usage data to improve our online services</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <UserCheck className="h-6 w-6 text-red-600 mr-2" />
                How We Use Your Information
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Processing and fulfilling your food orders</li>
                  <li>Communicating with you about your orders and delivery status</li>
                  <li>Providing customer support and responding to inquiries</li>
                  <li>Sending promotional offers and updates (with your consent)</li>
                  <li>Improving our menu, services, and website functionality</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-red-600 mr-2" />
                Information Security
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Secure servers and encrypted data transmission</li>
                  <li>Limited access to personal information by authorized personnel only</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Secure payment processing through trusted providers</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>With delivery partners to fulfill your orders</li>
                  <li>With payment processors to handle transactions securely</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <div className="text-gray-700 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <div className="text-gray-700">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>House of Lasagna & Pizza</strong></p>
                  <p>984 Merivale Rd, Ottawa, ON K1Z 6A4, Canada</p>
                  <p>Phone: (613) 728-9700</p>
                  <p>Email: privacy@houseoflasagna.ca</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
