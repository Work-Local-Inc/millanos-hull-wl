
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Full collection of restaurant photos using your organized images
  const galleryImages = [
    {
      src: "/images/lasagna-classic-hero.jpg",
      thumbnail: "/images/previews/lasagna-classic-hero-thumb.jpg",
      alt: "Classic Italian lasagna with rich meat sauce and melted cheese",
      title: "Our Signature Lasagna"
    },
    {
      src: "/images/dining-room-ambiance.jpg", 
      thumbnail: "/images/previews/dining-room-ambiance-thumb.jpg",
      alt: "Warm and inviting restaurant dining room atmosphere",
      title: "Cozy Dining Atmosphere"
    },
    {
      src: "/images/pizza-margherita-slice.jpg",
      thumbnail: "/images/previews/pizza-margherita-slice-thumb.jpg", 
      alt: "Fresh margherita pizza slice with basil and mozzarella",
      title: "Authentic Margherita Pizza"
    },
    {
      src: "/images/pasta-spaghetti-meatballs.jpg",
      thumbnail: "/images/previews/pasta-spaghetti-meatballs-thumb.jpg",
      alt: "Traditional spaghetti and meatballs in marinara sauce", 
      title: "Classic Spaghetti & Meatballs"
    },
    {
      src: "/images/appetizer-bruschetta-plate.jpg",
      thumbnail: "/images/previews/appetizer-bruschetta-plate-thumb.jpg",
      alt: "Bruschetta appetizer with fresh tomatoes and basil",
      title: "Fresh Bruschetta"
    },
    {
      src: "/images/restaurant-exterior-night.jpg",
      thumbnail: "/images/previews/restaurant-exterior-night-thumb.jpg", 
      alt: "Restaurant exterior at night with warm lighting",
      title: "Our Welcoming Exterior"
    },
    {
      src: "/images/dessert-tiramisu-slice.jpg",
      thumbnail: "/images/previews/dessert-tiramisu-slice-thumb.jpg",
      alt: "Homemade tiramisu dessert slice",
      title: "Authentic Tiramisu"
    },
    {
      src: "/images/wine-bottle-display.jpg", 
      thumbnail: "/images/previews/wine-bottle-display-thumb.jpg",
      alt: "Italian wine selection display",
      title: "Fine Wine Selection"
    },
    {
      src: "/images/pasta-alfredo-creamy.jpg",
      thumbnail: "/images/previews/pasta-alfredo-creamy-thumb.jpg",
      alt: "Creamy fettuccine alfredo pasta dish",
      title: "Rich Fettuccine Alfredo"
    },
    {
      src: "/images/pizza-pepperoni-whole.jpg",
      thumbnail: "/images/previews/pizza-pepperoni-whole-thumb.jpg",
      alt: "Whole pepperoni pizza fresh from the oven", 
      title: "Classic Pepperoni Pizza"
    },
    {
      src: "/images/salad-caesar-fresh.jpg",
      thumbnail: "/images/previews/salad-caesar-fresh-thumb.jpg",
      alt: "Fresh Caesar salad with croutons and parmesan",
      title: "Traditional Caesar Salad"
    },
    {
      src: "/images/breadsticks-garlic-basket.jpg",
      thumbnail: "/images/previews/breadsticks-garlic-basket-thumb.jpg", 
      alt: "Warm garlic breadsticks in wicker basket",
      title: "Fresh Garlic Breadsticks"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
    } else {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience Our Authentic Italian Atmosphere
            </h2>
            <p className="text-lg text-gray-600">
              See our delicious dishes and cozy restaurant atmosphere
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover-lift"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.thumbnail}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="font-medium">{galleryImages[selectedImage].title}</p>
              <p className="text-sm text-gray-300">
                {selectedImage + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
