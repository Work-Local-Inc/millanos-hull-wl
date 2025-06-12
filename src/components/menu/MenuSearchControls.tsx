
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { JumpToCategory } from '@/components/JumpToCategory';

interface MenuCategory {
  name: string;
  description: string;
  items: any[];
}

interface MenuSearchControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  categories: MenuCategory[];
  onCategoryJump: (categoryName: string) => void;
}

export const MenuSearchControls = ({ 
  searchTerm, 
  onSearchChange, 
  categories, 
  onCategoryJump 
}: MenuSearchControlsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fadeInUp">
      <div className="flex-1 max-w-md mx-auto sm:mx-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-gray-300 focus:border-red-500 focus:ring-red-500"
          />
        </div>
      </div>
      
      <div className="flex justify-center sm:justify-start">
        <JumpToCategory 
          categories={categories}
          onCategoryJump={onCategoryJump}
        />
      </div>
    </div>
  );
};
