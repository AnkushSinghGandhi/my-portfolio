import { useState, useEffect } from "react";
import { preloadImage, isImageCached } from "@/utils/imageCache";

/**
 * CachedImage component with built-in caching and loading states
 * Uses an Overlay Strategy to prevent flicker:
 * 1. Checks memory cache first.
 * 2. Always renders the <img> to leverage browser disk cache directly.
 * 3. Shows skeleton only while waiting for the image to be ready.
 */
export default function CachedImage({ src, alt, className, ...props }) {
  const [isLoaded, setIsLoaded] = useState(() => isImageCached(src));
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      preloadImage(src).catch(() => setError(true));
    }
  }, [src, isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
    // Ensure we update our memory cache record
    try {
      preloadImage(src);
    } catch (e) { }
  };

  if (error) {
    return (
      <div className={`bg-neutral-800 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-[10px] font-mono uppercase">img_err</span>
      </div>
    );
  }

  // Extract dimensions/positioning classes from className if possible, 
  // but usually className is applied to the wrapper or image.
  // We apply className to the wrapper to ensure correct size, 
  // and w-full h-full to inner elements to fill it.

  return (
    <div className={`relative ${className} overflow-hidden`}>
      {/* Skeleton Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-neutral-800 animate-pulse">
          <div className="w-full h-full bg-neutral-700/50" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleLoad}
        onError={() => setError(true)}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
}
