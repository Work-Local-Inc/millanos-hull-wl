
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItemOption {
  name: string;
  price: string;
}

interface CompactMenuItemProps {
  name: string;
  description: string;
  price: string;
  category: string;
  sizes?: MenuItemOption[];
  options?: MenuItemOption[];
  onAddToCart?: (item: any) => void;
}

export const CompactMenuItem = ({ 
  name, 
  description, 
  price, 
  category, 
  sizes, 
  options, 
  onAddToCart 
}: CompactMenuItemProps) => {
  const [selectedSize, setSelectedSize] = useState<MenuItemOption | null>(
    sizes ? sizes[0] : null
  );
  const [selectedOption, setSelectedOption] = useState<MenuItemOption | null>(
    options ? options[0] : null
  );

  const getCurrentPrice = () => {
    if (selectedSize) return selectedSize.price;
    if (selectedOption) return selectedOption.price;
    return price;
  };

  const handleAddToCart = () => {
    const item = {
      name,
      description,
      price: getCurrentPrice(),
      category,
      selectedSize: selectedSize?.name,
      selectedOption: selectedOption?.name,
    };
    onAddToCart?.(item);
  };

  return (
    <div className="border-b border-gray-100 last:border-b-0 py-3 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-start gap-4">
        {/* Item Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-gray-900 text-sm leading-tight">{name}</h3>
            <span className="text-sm font-semibold text-red-600 whitespace-nowrap ml-2">
              {getCurrentPrice()}
            </span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">{description}</p>
          
          {/* Size/Option Selection */}
          <div className="space-y-2">
            {sizes && sizes.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "px-2 py-1 text-xs rounded border transition-colors",
                      selectedSize?.name === size.name
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-red-300"
                    )}
                  >
                    {size.name} - {size.price}
                  </button>
                ))}
              </div>
            )}

            {options && options.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {options.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => setSelectedOption(option)}
                    className={cn(
                      "px-2 py-1 text-xs rounded border transition-colors",
                      selectedOption?.name === option.name
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-red-300"
                    )}
                  >
                    {option.name} - {option.price}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="flex-shrink-0">
          <Button 
            onClick={handleAddToCart}
            size="sm"
            className="bg-red-600 hover:bg-red-700 text-white h-8 px-3"
          >
            <Plus className="h-3 w-3 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
