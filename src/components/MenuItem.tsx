
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItemOption {
  name: string;
  price: string;
}

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  category: string;
  sizes?: MenuItemOption[];
  options?: MenuItemOption[];
  onAddToCart?: (item: any) => void;
}

export const MenuItem = ({ 
  name, 
  description, 
  price, 
  category, 
  sizes, 
  options, 
  onAddToCart 
}: MenuItemProps) => {
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
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
            {name}
          </CardTitle>
          <span className="text-lg font-bold text-red-600 whitespace-nowrap">
            {getCurrentPrice()}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        
        {/* Size Selection */}
        {sizes && sizes.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Size:</p>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "px-3 py-2 text-xs rounded-md border transition-colors text-center",
                    selectedSize?.name === size.name
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-red-300 hover:bg-red-50"
                  )}
                >
                  <div className="font-medium">{size.name}</div>
                  <div className="text-xs opacity-90">{size.price}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Option Selection */}
        {options && options.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">Options:</p>
            <div className="space-y-2">
              {options.map((option) => (
                <button
                  key={option.name}
                  onClick={() => setSelectedOption(option)}
                  className={cn(
                    "w-full px-3 py-2 text-xs rounded-md border transition-colors text-left flex justify-between items-center",
                    selectedOption?.name === option.name
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-red-300 hover:bg-red-50"
                  )}
                >
                  <span className="font-medium">{option.name}</span>
                  <span className="text-xs opacity-90">{option.price}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <div className="flex gap-2 pt-2">
          <Button 
            onClick={handleAddToCart}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white transition-colors"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-red-600 text-red-600 hover:bg-red-50 transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
