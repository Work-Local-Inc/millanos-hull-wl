
import { MilanoDataScraper } from '@/components/MilanoDataScraper';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MilanoScraper = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
      
      <div className="py-8">
        <MilanoDataScraper />
      </div>
    </div>
  );
};

export default MilanoScraper;
