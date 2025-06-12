
import { ChefHat } from 'lucide-react';

interface EmptyMenuStateProps {
  searchTerm: string;
}

export const EmptyMenuState = ({ searchTerm }: EmptyMenuStateProps) => {
  return (
    <div className="text-center py-12">
      <div className="max-w-md mx-auto">
        <ChefHat className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg mb-2">No menu items found</p>
        <p className="text-gray-400 text-sm">
          {searchTerm 
            ? `Try adjusting your search term "${searchTerm}" or browse different categories.`
            : 'Try browsing different categories or use the search function.'
          }
        </p>
      </div>
    </div>
  );
};
