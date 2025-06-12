
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 italian-script">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Since 1985, Ottawa Italian Eats has been serving authentic Italian cuisine 
                to the heart of Canada's capital. Our family recipes have been passed down 
                through three generations, bringing the true taste of Italy to Ottawa.
              </p>
              <p>
                Founded by Nonna Maria and Nonno Giuseppe, who immigrated from Sicily with 
                nothing but their love for cooking and their treasured family recipes. 
                Today, their grandchildren continue the tradition, ensuring every dish 
                is prepared with the same passion and authenticity.
              </p>
              <p>
                We source our ingredients from local farmers when possible, and import 
                specialty items directly from Italy. Our pasta is made fresh daily, 
                our pizzas are baked in a traditional wood-fired oven, and our sauces 
                simmer slowly to perfection.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600">38+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-sm text-gray-600">Authentic Recipes</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              alt="Chef preparing pasta"
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80"
              alt="Wood fired pizza oven"
              className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Fresh ingredients"
              className="rounded-lg shadow-lg w-full h-48 object-cover -mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Italian family cooking"
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
