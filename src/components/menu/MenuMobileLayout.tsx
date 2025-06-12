
import { CollapsibleMenuSection } from '@/components/CollapsibleMenuSection';

interface MenuItemData {
  name: string;
  description: string;
  price: string;
  category: string;
  sizes?: Array<{ name: string; price: string }>;
  options?: Array<{ name: string; price: string }>;
}

interface MenuCategory {
  name: string;
  description: string;
  items: MenuItemData[];
}

interface MenuMobileLayoutProps {
  groupedItems: { [key: string]: MenuCategory };
  onAddToCart: (item: any) => void;
  categoryRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
  searchTerm: string;
  activeCategory: string;
}

export const MenuMobileLayout = ({ 
  groupedItems, 
  onAddToCart, 
  categoryRefs, 
  searchTerm, 
  activeCategory 
}: MenuMobileLayoutProps) => {
  return (
    <div className="space-y-4 mb-16">
      {Object.values(groupedItems).map((category, index) => (
        <div 
          key={category.name}
          ref={el => categoryRefs.current[category.name] = el}
          className="animate-scaleIn" 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CollapsibleMenuSection
            category={category}
            onAddToCart={onAddToCart}
            defaultExpanded={searchTerm !== '' || activeCategory !== 'all'}
          />
        </div>
      ))}
    </div>
  );
};
