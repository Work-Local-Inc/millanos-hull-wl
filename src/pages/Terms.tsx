
import { Link } from 'react-router-dom';
import { ChefHat, ArrowLeft, FileText, AlertCircle, CreditCard, Truck } from 'lucide-react';

const Terms = () => {
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
            <FileText className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
            <p className="text-gray-600 mt-2">Last updated: December 2024</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
                Agreement to Terms
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  By accessing and using the services of House of Lasagna & Pizza, you agree to be bound 
                  by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  These terms apply to all visitors, users, and customers who access or use our restaurant 
                  services, including in-store dining, takeout, and delivery orders.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-6 w-6 text-red-600 mr-2" />
                Orders and Payment
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>When placing an order with us, you agree to the following terms:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>All orders are subject to availability of menu items</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Payment is required at the time of order placement</li>
                  <li>We accept cash, credit cards, and debit cards</li>
                  <li>Special dietary requests cannot be guaranteed due to kitchen preparation methods</li>
                  <li>Orders cannot be cancelled once preparation has begun</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Truck className="h-6 w-6 text-red-600 mr-2" />
                Delivery Terms
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>For delivery orders, the following additional terms apply:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Delivery is available within our designated service areas only</li>
                  <li>Delivery times are estimates and may vary based on weather and traffic conditions</li>
                  <li>A delivery fee may apply and will be clearly displayed before order confirmation</li>
                  <li>You must be available to receive your order at the specified delivery address</li>
                  <li>We are not responsible for orders that cannot be delivered due to incorrect addresses</li>
                  <li>Tips for delivery drivers are appreciated but not mandatory</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Food Safety and Allergies</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We take food safety seriously and follow all local health regulations. However, 
                  please note the following important information:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Our kitchen handles common allergens including wheat, dairy, eggs, and nuts</li>
                  <li>Cross-contamination may occur despite our best efforts</li>
                  <li>Please inform us of any severe allergies when placing your order</li>
                  <li>We cannot guarantee allergen-free preparation</li>
                  <li>Customers with severe allergies dine at their own risk</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refunds and Cancellations</h2>
              <div className="text-gray-700 space-y-4">
                <p>Our refund and cancellation policy includes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Orders may be cancelled before preparation begins</li>
                  <li>Refunds will be issued for cancelled orders within 3-5 business days</li>
                  <li>Quality issues will be addressed on a case-by-case basis</li>
                  <li>We reserve the right to refuse service to any customer</li>
                  <li>Disputes should be reported within 24 hours of order receipt</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  House of Lasagna & Pizza's liability is limited to the cost of the food ordered. 
                  We are not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Food allergic reactions (customers dine at their own risk)</li>
                  <li>Delays due to circumstances beyond our control</li>
                  <li>Third-party delivery service issues</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="text-gray-700">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>House of Lasagna & Pizza</strong></p>
                  <p>984 Merivale Rd, Ottawa, ON K1Z 6A4, Canada</p>
                  <p>Phone: (613) 728-9700</p>
                  <p>Email: info@houseoflasagna.ca</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
