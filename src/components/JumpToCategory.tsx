
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Category {
  name: string;
  description: string;
  items: any[];
}

interface JumpToCategoryProps {
  categories: Category[];
  onCategoryJump: (categoryName: string) => void;
}

export const JumpToCategory = ({ categories, onCategoryJump }: JumpToCategoryProps) => {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto">
          Jump to Category
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-56 max-h-80 overflow-y-auto bg-white border border-gray-200 shadow-lg z-50"
        align="start"
      >
        {categories.map((category) => {
          const emoji = menuEmojis[category.name] || '🍽️';
          return (
            <DropdownMenuItem
              key={category.name}
              onClick={() => onCategoryJump(category.name)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer"
            >
              <span>{emoji}</span>
              <span className="flex-1">{category.name}</span>
              <span className="text-xs text-gray-500">({category.items.length})</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
