
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 italian-script">
          Benvenuti alla Famiglia
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Experience authentic Italian cuisine in the heart of Ottawa. 
          From traditional pasta to wood-fired pizzas, every dish tells a story of Italy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToMenu}
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
          >
            View Our Menu
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg"
          >
            Make Reservation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
