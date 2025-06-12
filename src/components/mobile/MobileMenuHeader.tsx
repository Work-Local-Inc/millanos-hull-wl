import { Phone, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface MobileMenuHeaderProps {
  businessName?: string;
  phone?: string;
}
export const MobileMenuHeader = ({
  businessName,
  phone
}: MobileMenuHeaderProps) => {
  return <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
      {/* Restaurant Info */}
      <div className="px-4 py-6 relative" style={{
      backgroundImage: 'url(/lovable-uploads/03c22a43-23b9-4728-b7de-8ae97637a1d3.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative z-10">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center mb-4 bg-green/50 ">
              <img alt="House of Lasagna & Pizza Logo" className="h-20 w-auto object-contain drop-shadow-lg" src="/lovable-uploads/61768da0-f6e8-4d16-b48a-391ca6a76b3e.png" />
            </div>
            <div className="flex items-center justify-center text-yellow-300 mb-2">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-2 text-sm">4.8 (1,200+ reviews)</span>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <Clock className="h-5 w-5 mx-auto mb-1 text-yellow-300" />
              <div className="text-xs font-medium">Delivery</div>
              <div className="text-sm">25-35 min</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <MapPin className="h-5 w-5 mx-auto mb-1 text-yellow-300" />
              <div className="text-xs font-medium">Distance</div>
              <div className="text-sm">2.3 km away</div>
            </div>
          </div>

          {/* Call Button */}
          {phone && <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20" onClick={() => window.open(`tel:${phone}`)}>
              <Phone className="h-4 w-4 mr-2" />
              Call {phone}
            </Button>}
        </div>
      </div>

      {/* Menu Banner */}
      <div className="bg-black/20 px-4 py-3 text-center">
        <h2 className="text-lg font-semibold mb-1">Our Menu</h2>
        <p className="text-sm text-red-100">Authentic Italian dishes made with love</p>
      </div>
    </div>;
};