import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: string;
  size?: string;
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

const Menu = () => {
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

  const groupedItems = categories.reduce((acc, category) => {
    const items = menuItems.filter(item => item.category === category);
    if (items.length > 0) {
      acc[category] = items;
    }
    return acc;
  }, {} as { [key: string]: MenuItem[] });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-red-600 hover:text-red-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Our Menu</h1>
            <div className="w-20"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Order Online CTA */}
      <div className="bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Order?</h2>
          <p className="text-red-100 mb-4">
            Order online through our secure ordering system for pickup or delivery
          </p>
          <a 
            href="https://houseoflasagna.ca/?p=menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Order Online Now
          </a>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <ExternalLink className="h-5 w-5 text-yellow-600 mt-0.5" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Menu Reference Only</h3>
              <p className="text-sm text-yellow-700 mt-1">
                This menu is for reference purposes. To place an order, please use our online ordering system or call us directly.
              </p>
            </div>
          </div>
        </div>

        {Object.entries(groupedItems).map(([categoryName, items]) => (
          <div key={categoryName} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {categoryName}
            </h2>
            <div className="grid gap-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm border">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                        {item.size && <span className="text-gray-500 ml-2">({item.size})</span>}
                      </h3>
                      {item.description && (
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <span className="text-lg font-bold text-red-600">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Order CTA at bottom */}
        <div className="bg-red-600 text-white rounded-lg p-6 text-center mt-12">
          <h3 className="text-xl font-bold mb-3">Ready to Order?</h3>
          <p className="text-red-100 mb-4">
            Place your order online or call us for takeout and delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://houseoflasagna.ca/?p=menu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Order Online
            </a>
            <a 
              href="tel:613-695-1313"
              className="inline-flex items-center justify-center bg-red-700 text-white hover:bg-red-800 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (613) 695-1313
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;