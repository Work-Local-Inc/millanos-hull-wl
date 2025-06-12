
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BottomCartBarProps {
  itemCount: number;
  total: number;
  onOpenCart: () => void;
}

export const BottomCartBar = ({ itemCount, total, onOpenCart }: BottomCartBarProps) => {
  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl">
      <div className="px-4 py-4">
        <Button
          onClick={onOpenCart}
          className="w-full bg-red-600 hover:bg-red-700 text-white h-16 rounded-2xl flex items-center justify-between font-bold text-lg shadow-xl transform transition-transform active:scale-95"
        >
          <div className="flex items-center">
            <div className="relative mr-4">
              <ShoppingCart className="h-7 w-7" />
              <span className="absolute -top-3 -right-3 bg-yellow-400 text-black text-sm rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-md">
                {itemCount}
              </span>
            </div>
            <span>View Cart</span>
          </div>
          <span className="text-xl">${total.toFixed(2)}</span>
        </Button>
      </div>
    </div>
  );
};
