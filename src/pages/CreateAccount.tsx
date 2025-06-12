import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

export default function CreateAccount() {
  useEffect(() => {
    // Redirect to external create account page
    window.location.href = 'https://houseoflasagna.ca/?p=createaccount';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Redirecting to Create Account</h2>
            <p className="text-gray-600 mb-6">
              You're being redirected to our secure account creation page...
            </p>
            <div className="flex items-center justify-center space-x-2 text-red-600">
              <ExternalLink className="h-5 w-5" />
              <span>houseoflasagna.ca</span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              If you're not redirected automatically, 
              <a 
                href="https://houseoflasagna.ca/?p=createaccount" 
                className="text-red-600 hover:text-red-700 ml-1"
              >
                click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
