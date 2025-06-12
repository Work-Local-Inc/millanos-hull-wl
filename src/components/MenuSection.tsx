
const MenuSection = () => {
  const menuCategories = [
    {
      title: "Antipasti",
      description: "Traditional Italian appetizers",
      items: [
        {
          name: "Bruschetta Classica",
          description: "Toasted bread with fresh tomatoes, basil, and garlic",
          price: "$12"
        },
        {
          name: "Antipasto Platter",
          description: "Selection of cured meats, cheeses, olives, and roasted vegetables",
          price: "$18"
        },
        {
          name: "Arancini",
          description: "Crispy risotto balls stuffed with mozzarella and herbs",
          price: "$14"
        }
      ]
    },
    {
      title: "Pasta & Risotto",
      description: "House-made pasta and creamy risottos",
      items: [
        {
          name: "Spaghetti Carbonara",
          description: "Classic Roman pasta with eggs, pancetta, and pecorino cheese",
          price: "$22"
        },
        {
          name: "Osso Buco Risotto",
          description: "Creamy risotto with tender braised veal shank",
          price: "$28"
        },
        {
          name: "Lasagna della Nonna",
          description: "Traditional layered pasta with meat sauce and three cheeses",
          price: "$24"
        }
      ]
    },
    {
      title: "Secondi Piatti",
      description: "Main courses featuring the finest ingredients",
      items: [
        {
          name: "Veal Parmigiana",
          description: "Breaded veal cutlet with tomato sauce and mozzarella",
          price: "$32"
        },
        {
          name: "Branzino al Sale",
          description: "Whole sea bass baked in sea salt with herbs",
          price: "$36"
        },
        {
          name: "Bistecca alla Fiorentina",
          description: "Grilled T-bone steak with rosemary and olive oil",
          price: "$45"
        }
      ]
    },
    {
      title: "Dolci",
      description: "Traditional Italian desserts",
      items: [
        {
          name: "Tiramisu",
          description: "Classic coffee-flavored dessert with mascarpone",
          price: "$9"
        },
        {
          name: "Cannoli Siciliani",
          description: "Crispy shells filled with sweet ricotta cream",
          price: "$8"
        },
        {
          name: "Panna Cotta",
          description: "Silky vanilla custard with berry compote",
          price: "$8"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 italian-script">
            La Nostra Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of authentic Italian dishes, 
            prepared with love and the finest imported ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {menuCategories.map((category, index) => (
            <div key={index} className="menu-card bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-red-600 mb-2 italian-script">
                  {category.title}
                </h3>
                <p className="text-gray-600 italic">{category.description}</p>
              </div>
              
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                      <span className="text-lg font-bold text-red-600">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
