
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CompactMenuItem } from './CompactMenuItem';
import { cn } from '@/lib/utils';

interface MenuItemData {
  name: string;
  description: string;
  price: string;
  sizes?: Array<{ name: string; price: string }>;
  options?: Array<{ name: string; price: string }>;
}

interface MenuCategory {
  name: string;
  description: string;
  items: MenuItemData[];
}

interface CollapsibleMenuSectionProps {
  category: MenuCategory;
  onAddToCart: (item: any) => void;
  defaultExpanded?: boolean;
}

export const CollapsibleMenuSection = ({ 
  category, 
  onAddToCart, 
  defaultExpanded = false 
}: CollapsibleMenuSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const menuEmojis: Record<string, string> = {
    'Italian Dishes': '🍝',
    'Pizza': '🍕',
    'BBQ Chicken': '🍗',
    'Wings': '🔥',
    'Subs': '🥪',
    'Appetizers': '🥗',
    'Pasta': '🍝',
    'Salads': '🥬',
    'Desserts': '🍰',
    'Beverages': '🥤',
    'Burgers': '🍔',
    'Wraps': '🌯',
    'Sides': '🍟',
  };

  const emoji = menuEmojis[category.name] || '🍽️';

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors border-b border-gray-200 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{emoji}</span>
          <div className="text-left">
            <h2 className="font-semibold text-gray-900">{category.name}</h2>
            <p className="text-xs text-gray-600">{category.description}</p>
          </div>
          <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full ml-2">
            {category.items.length}
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      {/* Content */}
      <div className={cn(
        "transition-all duration-200 overflow-hidden",
        isExpanded ? "max-h-screen" : "max-h-0"
      )}>
        <div className="p-4 space-y-0">
          {category.items.map((item, index) => (
            <CompactMenuItem
              key={`${category.name}-${index}`}
              name={item.name}
              description={item.description}
              price={item.price}
              category={category.name}
              sizes={item.sizes}
              options={item.options}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
