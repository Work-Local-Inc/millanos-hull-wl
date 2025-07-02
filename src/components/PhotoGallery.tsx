
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Real restaurant photos from Milano Pizzeria
  const galleryImages = [
    {
      src: "/lovable-uploads/4d3ed401-2ccb-4c24-8f55-94b794f7c070.png",
      thumbnail: "/lovable-uploads/4d3ed401-2ccb-4c24-8f55-94b794f7c070.png",
      alt: "Delicious gourmet burgers with crispy waffle fries and golden onion rings",
      title: "Gourmet Burger Combo"
    },
    {
      src: "/lovable-uploads/b5c18c41-cabd-4006-a76f-ab5d98bd148e.png",
      thumbnail: "/lovable-uploads/b5c18c41-cabd-4006-a76f-ab5d98bd148e.png",
      alt: "Classic poutine with fresh cheese curds and rich gravy",
      title: "Authentic Canadian Poutine"
    },
    {
      src: "/lovable-uploads/52955c1b-dcbb-4ee6-b3ab-524150b5a492.png",
      thumbnail: "/lovable-uploads/52955c1b-dcbb-4ee6-b3ab-524150b5a492.png",
      alt: "Artisan pizza on wooden board with fresh herbs and premium ingredients",
      title: "Wood-Fired Artisan Pizza"
    },
    {
      src: "/lovable-uploads/9481c0a0-e6de-4c05-884c-a6064343245e.png",
      thumbnail: "/lovable-uploads/9481c0a0-e6de-4c05-884c-a6064343245e.png",
      alt: "Crispy onion rings, loaded poutine and refreshing drinks combo meal",
      title: "Comfort Food Feast"
    },
    {
      src: "/lovable-uploads/22f186ba-d6fa-4733-b362-95bb2ce79de3.png",
      thumbnail: "/lovable-uploads/22f186ba-d6fa-4733-b362-95bb2ce79de3.png",
      alt: "Refreshing orange soda with crispy onion rings and gourmet burger",
      title: "Classic Meal & Beverage Combo"
    },
    {
      src: "/lovable-uploads/f6fcba50-a41e-46e8-85a9-8f3fbb28cdd0.png",
      thumbnail: "/lovable-uploads/f6fcba50-a41e-46e8-85a9-8f3fbb28cdd0.png",
      alt: "Specialty pizza with ground meat, peppers, and red onions on wooden board",
      title: "Signature Meat Lovers Pizza"
    },
    {
      src: "/lovable-uploads/080e201a-8f4a-4511-8e3c-bc6a02f57fd9.png",
      thumbnail: "/lovable-uploads/080e201a-8f4a-4511-8e3c-bc6a02f57fd9.png",
      alt: "Golden fried arancini stuffed with cheese and served with creamy dipping sauce",
      title: "Homemade Stuffed Arancini"
    },
    {
      src: "/lovable-uploads/3528af3f-72ca-4cab-9ea2-e35841c1f869.png",
      thumbnail: "/lovable-uploads/3528af3f-72ca-4cab-9ea2-e35841c1f869.png",
      alt: "Supreme pizza loaded with pepperoni, vegetables, olives and fresh herbs",
      title: "Supreme Deluxe Pizza"
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
