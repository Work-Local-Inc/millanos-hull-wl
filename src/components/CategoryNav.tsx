
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Category {
  name: string;
  description: string;
  items: any[];
}

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryNav = ({ categories, activeCategory, onCategoryChange }: CategoryNavProps) => {
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
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={activeCategory === 'all' ? 'default' : 'outline'}
          onClick={() => onCategoryChange('all')}
          className={cn(
            "transition-all duration-200 font-medium",
            activeCategory === 'all' 
              ? 'bg-red-600 hover:bg-red-700 text-white shadow-md' 
              : 'border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-300 hover:text-red-700'
          )}
          size="sm"
        >
          🍽️ All Items
        </Button>
        {categories.map((category) => {
          const emoji = menuEmojis[category.name] || '🍽️';
          const itemCount = category.items.length;
          return (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? 'default' : 'outline'}
              onClick={() => onCategoryChange(category.name)}
              className={cn(
                "transition-all duration-200 font-medium relative",
                activeCategory === category.name 
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-md' 
                  : 'border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-300 hover:text-red-700'
              )}
              size="sm"
            >
              <span className="flex items-center gap-1">
                {emoji} {category.name}
                <span className={cn(
                  "text-xs px-1.5 py-0.5 rounded-full ml-1",
                  activeCategory === category.name
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                )}>
                  {itemCount}
                </span>
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
