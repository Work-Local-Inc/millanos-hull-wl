
import { useState, useEffect } from 'react';

interface OptimizedHeroImageProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

const OptimizedHeroImage = ({ src, alt, className = '', children }: OptimizedHeroImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
    img.src = src;
  }, [src]);

  return (
    <section className={`relative min-h-[600px] flex items-center overflow-hidden ${className}`}>
      {/* Immediate placeholder gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-700 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Main hero image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="600"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default OptimizedHeroImage;
