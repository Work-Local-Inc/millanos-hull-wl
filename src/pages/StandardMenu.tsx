import React, { useState } from 'react';
import { StandardTakeoutCart } from '../components/StandardTakeoutCart';

interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: string;
  size?: string;
}

interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

const menuItems: MenuItem[] = [
  // Pizza
  { id: 'pizza-plain-s', name: 'Plain Pizza', price: '$12.95', category: 'Pizza', size: 'Small' },
  { id: 'pizza-plain-m', name: 'Plain Pizza', price: '$18.95', category: 'Pizza', size: 'Medium' },
  { id: 'pizza-plain-l', name: 'Plain Pizza', price: '$22.95', category: 'Pizza', size: 'Large' },
  
  { id: 'pizza-hawaiian-s', name: 'Hawaiian', description: 'Ham and pineapple', price: '$15.95', category: 'Pizza', size: 'Small' },
  { id: 'pizza-hawaiian-m', name: 'Hawaiian', description: 'Ham and pineapple', price: '$23.95', category: 'Pizza', size: 'Medium' },
  { id: 'pizza-hawaiian-l', name: 'Hawaiian', description: 'Ham and pineapple', price: '$27.95', category: 'Pizza', size: 'Large' },
  
  { id: 'pizza-combo-s', name: 'Combination', description: 'Pepperoni, green peppers and mushrooms', price: '$15.95', category: 'Pizza', size: 'Small' },
  { id: 'pizza-combo-m', name: 'Combination', description: 'Pepperoni, green peppers and mushrooms', price: '$23.95', category: 'Pizza', size: 'Medium' },
  { id: 'pizza-combo-l', name: 'Combination', description: 'Pepperoni, green peppers and mushrooms', price: '$27.95', category: 'Pizza', size: 'Large' },
  
  { id: 'pizza-veggie-s', name: 'Vegetarian', description: 'Mushrooms, green peppers, onions and tomatoes', price: '$16.95', category: 'Pizza', size: 'Small' },
  { id: 'pizza-veggie-m', name: 'Vegetarian', description: 'Mushrooms, green peppers, onions and tomatoes', price: '$24.95', category: 'Pizza', size: 'Medium' },
  { id: 'pizza-veggie-l', name: 'Vegetarian', description: 'Mushrooms, green peppers, onions and tomatoes', price: '$28.95', category: 'Pizza', size: 'Large' },
  
  { id: 'pizza-greek-s', name: 'Greek', description: 'Black olives, feta, onions, diced tomatoes and oregano', price: '$16.95', category: 'Pizza', size: 'Small' },
  { id: 'pizza-greek-m', name: 'Greek', description: 'Black olives, feta, onions, diced tomatoes and oregano', price: '$24.95', category: 'Pizza', size: 'Medium' },
  { id: 'pizza-greek-l', name: 'Greek', description: 'Black olives, feta, onions, diced tomatoes and oregano', price: '$28.95', category: 'Pizza', size: 'Large' },
  
  { id: 'pizza-house-s', name: 'House Special', description: 'Pepperoni, green peppers, mushrooms, bacon and onions', price: '$17.95', category: 'Pizza', size: 'Small' },
  { id: 'pizza-house-m', name: 'House Special', description: 'Pepperoni, green peppers, mushrooms, bacon and onions', price: '$25.95', category: 'Pizza', size: 'Medium' },
  { id: 'pizza-house-l', name: 'House Special', description: 'Pepperoni, green peppers, mushrooms, bacon and onions', price: '$29.95', category: 'Pizza', size: 'Large' },
  
  { id: 'pizza-meat-s', name: 'Meat Lovers', description: 'Pepperoni, ham, bacon and meatballs', price: '$18.95', category: 'Pizza', size: 'Small' },
  { id: 'pizza-meat-m', name: 'Meat Lovers', description: 'Pepperoni, ham, bacon and meatballs', price: '$26.95', category: 'Pizza', size: 'Medium' },
  { id: 'pizza-meat-l', name: 'Meat Lovers', description: 'Pepperoni, ham, bacon and meatballs', price: '$30.95', category: 'Pizza', size: 'Large' },

  // Lasagna
  { id: 'lasagna-meat-s', name: 'Lasagna with Meat Sauce', description: 'Ground beef and pepperoni', price: '$17.50', category: 'Lasagna', size: 'Single' },
  { id: 'lasagna-meat-f', name: 'Lasagna with Meat Sauce', description: 'Ground beef and pepperoni', price: '$49.95', category: 'Lasagna', size: 'Family' },
  { id: 'lasagna-napo-s', name: 'Napolitana', description: 'Meat sauce, green peppers, pepperoni and mushrooms', price: '$17.50', category: 'Lasagna', size: 'Single' },
  { id: 'lasagna-napo-f', name: 'Napolitana', description: 'Meat sauce, green peppers, pepperoni and mushrooms', price: '$49.95', category: 'Lasagna', size: 'Family' },
  { id: 'lasagna-roma-s', name: 'A la Roma', description: 'Mushrooms and white wine sauce', price: '$17.50', category: 'Lasagna', size: 'Single' },
  { id: 'lasagna-roma-f', name: 'A la Roma', description: 'Mushrooms and white wine sauce', price: '$49.95', category: 'Lasagna', size: 'Family' },
  { id: 'lasagna-triesta-s', name: 'Triesta', description: 'Spinach, cottage cheese and tomato sauce', price: '$18.25', category: 'Lasagna', size: 'Single' },
  { id: 'lasagna-triesta-f', name: 'Triesta', description: 'Spinach, cottage cheese and tomato sauce', price: '$51.95', category: 'Lasagna', size: 'Family' },
  { id: 'lasagna-seafood-s', name: 'Seafood Lasagna', description: 'Shrimps and clams with tomato sauce', price: '$18.95', category: 'Lasagna', size: 'Single' },
  { id: 'lasagna-seafood-f', name: 'Seafood Lasagna', description: 'Shrimps and clams with tomato sauce', price: '$52.95', category: 'Lasagna', size: 'Family' },

  // Authentic Italian Dishes
  { id: 'veal-parm', name: 'Veal Parmesan', description: 'Veal cutlet, breaded with two cheeses, served with spaghetti and meat sauce', price: '$23.95', category: 'Authentic Italian' },
  { id: 'chicken-parm', name: 'Chicken Parmesan', description: 'Fresh chicken breast breaded with two cheeses, served with spaghetti and meat sauce', price: '$21.95', category: 'Authentic Italian' },
  { id: 'cannelloni', name: 'Cannelloni', description: 'Homemade with veal, two cheeses, white wine sauce and meat sauce', price: '$17.50', category: 'Authentic Italian' },
  { id: 'manicotti', name: 'Manicotti', description: 'Homemade with spinach, ricotta cheese, white wine sauce and tomato sauce', price: '$17.50', category: 'Authentic Italian' },
  { id: 'ravioli-plain', name: 'Ravioli stuffed with Veal', price: '$17.50', category: 'Authentic Italian', size: 'Plain' },
  { id: 'ravioli-cheese', name: 'Ravioli stuffed with Veal', price: '$18.50', category: 'Authentic Italian', size: 'With Baked Cheese' },

  // Pasta
  { id: 'fett-alfredo', name: 'Fettucine Alfredo', description: 'Creamy white wine sauce, topped with baked cheese', price: '$17.50', category: 'Pasta' },
  { id: 'fett-bolognaise', name: 'Fettucine Bolognaise', description: 'Meat sauce and baked cheese', price: '$18.50', category: 'Pasta' },
  { id: 'fett-giorgio', name: 'Fettucine Giorgio', description: 'Creamy white wine sauce, ham and mushrooms, topped with baked cheese', price: '$18.50', category: 'Pasta' },
  { id: 'fett-seafood', name: 'Fettucine Seafood', description: 'Shrimps and clams topped with creamy white wine sauce, topped with baked cheese', price: '$18.95', category: 'Pasta' },
  { id: 'spag-meat', name: 'Spaghetti with Meat Sauce', price: '$16.95', category: 'Pasta' },
  { id: 'spag-meatballs', name: 'Spaghetti with Meatballs', price: '$18.50', category: 'Pasta' },
  { id: 'spag-mushrooms', name: 'Spaghetti with Mushrooms', price: '$17.95', category: 'Pasta' },
  { id: 'spag-napo', name: 'Spaghetti Napolitana', description: 'Meat sauce, green peppers and mushrooms', price: '$19.95', category: 'Pasta' },

  // Salads & Bread
  { id: 'chef-salad', name: 'Chef Salad', price: '$8.95', category: 'Salads' },
  { id: 'caesar-salad', name: 'Caesar Salad', price: '$10.95', category: 'Salads' },
  { id: 'caesar-turkey', name: 'Caesar Salad with Turkey', price: '$12.95', category: 'Salads' },
  { id: 'house-salad', name: 'House Salad', description: 'Ham, turkey, egg, cheese, with creamy garlic dressing', price: '$15.95', category: 'Salads' },
  { id: 'garlic-bread', name: 'Garlic Bread', price: '$5.25', category: 'Bread' },
  { id: 'garlic-bread-cheese', name: 'Garlic Bread with Cheese', price: '$6.50', category: 'Bread' },
  { id: 'garlic-bread-bacon', name: 'Garlic Bread with Cheese and Bacon', price: '$7.50', category: 'Bread' },

  // Hot Plates & Chicken
  { id: 'bbq-quarter', name: 'Barbecued 1/4 Chicken', description: 'Served with fries and coleslaw', price: '$16.95', category: 'Chicken & Hot Plates' },
  { id: 'bbq-quarter-white', name: 'Barbecued 1/4 Chicken White', description: 'Served with fries and coleslaw', price: '$17.95', category: 'Chicken & Hot Plates' },
  { id: 'bbq-half', name: 'Barbecued 1/2 Chicken', description: 'Served with fries and coleslaw', price: '$20.95', category: 'Chicken & Hot Plates' },
  { id: 'chicken-fingers', name: 'Breaded Chicken Fingers', description: 'Served with fries and coleslaw', price: '$16.95', category: 'Chicken & Hot Plates' },
  { id: 'hamburger-platter', name: 'Hamburger Platter (6 oz)', price: '$16.95', category: 'Chicken & Hot Plates' },
  { id: 'cheeseburger-platter', name: 'Cheeseburger Platter', price: '$17.50', category: 'Chicken & Hot Plates' },
  { id: 'fish-chips', name: 'Homemade English Style Fish N Chips', price: '$17.95', category: 'Chicken & Hot Plates' },
  { id: 'sirloin-steak', name: 'Top Sirloin Steak (8 oz)', price: '$20.95', category: 'Chicken & Hot Plates' },

  // Submarines
  { id: 'meatball-sub', name: 'Meatball Sub', price: '$15.95', category: 'Submarines' },
  { id: 'pepperoni-sub', name: 'Pepperoni Sub', price: '$15.95', category: 'Submarines' },
  { id: 'turkey-sub', name: 'Turkey Sub', description: 'With lettuce, tomatoes & cheese', price: '$15.95', category: 'Submarines' },
  { id: 'house-sub', name: 'House Sub', description: 'Chicken, ham, salami, lettuce, tomatoes and cheese', price: '$16.50', category: 'Submarines' },
  { id: 'steak-sub', name: 'Steak Sub', price: '$16.50', category: 'Submarines' },

  // Side Orders
  { id: 'fries-plain', name: 'French Fries', price: '$6.25', category: 'Sides', size: 'Plain' },
  { id: 'fries-gravy', name: 'French Fries', price: '$6.50', category: 'Sides', size: 'With Gravy' },
  { id: 'onion-rings', name: 'Onion Rings', price: '$7.25', category: 'Sides' },
  { id: 'poutine', name: 'Poutine', price: '$10.95', category: 'Sides' },
  { id: 'italian-poutine', name: 'Italian Poutine', price: '$12.95', category: 'Sides' },
  { id: 'chicken-wings', name: 'Chicken Wings', price: '$14.75', category: 'Sides' },
  { id: 'calamari', name: 'Calamari', price: '$13.95', category: 'Sides' },

  // Desserts & Drinks
  { id: 'coconut-pie', name: 'Coconut Cream Pie', price: '$6.95', category: 'Desserts' },
  { id: 'apple-pie', name: 'Apple Pie', price: '$6.95', category: 'Desserts' },
  { id: 'cheesecake', name: 'Cherry Cheesecake', price: '$7.95', category: 'Desserts' },
  { id: 'rice-pudding', name: 'Rice Pudding with Raisins', price: '$6.25', category: 'Desserts' },
  { id: 'coke-can', name: 'Coke', price: '$1.50', category: 'Drinks', size: 'Can' },
  { id: 'diet-coke-can', name: 'Diet Coke', price: '$1.50', category: 'Drinks', size: 'Can' },
  { id: 'pepsi-can', name: 'Pepsi', price: '$1.50', category: 'Drinks', size: 'Can' },
  { id: 'sprite-can', name: 'Sprite', price: '$1.50', category: 'Drinks', size: 'Can' },
];

export const StandardMenu: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    const cartItemName = item.size ? `${item.name} (${item.size})` : item.name;
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, name: cartItemName, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);
  const tax = subtotal * 0.13; // 13% HST
  const total = subtotal + tax;

  // Group items by category
  const categories = [
    'Pizza',
    'Lasagna', 
    'Authentic Italian',
    'Pasta',
    'Salads',
    'Bread',
    'Chicken & Hot Plates',
    'Submarines',
    'Sides',
    'Desserts',
    'Drinks'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">House of Lasagna & Pizza</h1>
          <p className="text-gray-600">Authentic Italian cuisine for takeout and delivery</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Main Content */}
        <main className="flex-1 p-4 lg:pr-80">
          {categories.map(category => {
            const categoryItems = menuItems.filter(item => item.category === category);
            if (categoryItems.length === 0) return null;
            
            return (
              <section key={category} className="mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3 border-b pb-1 sticky top-0 bg-gray-50 z-10">
                  {category}
                </h2>
                <div className="space-y-2">
                  {categoryItems.map(item => (
                    <div key={item.id} className="bg-white rounded border p-3 flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-gray-900 text-sm">
                            {item.name}
                            {item.size && <span className="text-gray-500 font-normal"> ({item.size})</span>}
                          </h3>
                          <span className="font-bold text-red-600 text-sm">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-gray-600 text-xs mt-1 line-clamp-1">{item.description}</p>
                        )}
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="ml-3 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex-shrink-0"
                      >
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </main>

        {/* Cart */}
        <StandardTakeoutCart
          items={cart}
          subtotal={subtotal}
          tax={tax}
          total={total}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
          onClearCart={clearCart}
        />
      </div>

      {/* Mobile spacing for fixed bottom cart */}
      <div className="h-20 lg:hidden" />
    </div>
  );
}; 