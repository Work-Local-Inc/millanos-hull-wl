import { CompactMenuItem } from '@/components/CompactMenuItem';

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

interface MenuDesktopLayoutProps {
  groupedItems: { [key: string]: MenuCategory };
  onAddToCart: (item: any) => void;
  categoryRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
}

export const MenuDesktopLayout = ({ groupedItems, onAddToCart, categoryRefs }: MenuDesktopLayoutProps) => {
  return (
    <div className="space-y-8 mb-16">
      {Object.values(groupedItems).map((category, categoryIndex) => (
        <div 
          key={category.name}
          ref={el => categoryRefs.current[category.name] = el}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-fadeInUp"
          style={{ animationDelay: `${categoryIndex * 0.1}s` }}
        >
          {/* Category Header - Made less sticky to work with sidebar */}
          <div className="bg-red-600 text-white px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">{category.name}</h2>
                <p className="text-red-100 text-sm">{category.description}</p>
              </div>
              <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                {category.items.length} items
              </span>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="p-6">
            {category.items.map((item, index) => (
              <CompactMenuItem
                key={`${category.name}-${index}`}
                name={item.name}
                description={item.description}
                price={item.price}
                category={item.category}
                sizes={item.sizes}
                options={item.options}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
