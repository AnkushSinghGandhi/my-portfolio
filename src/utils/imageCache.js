// Image caching utility
const imageCache = new Map();
const loadingImages = new Map();

/**
 * Preload and cache an image
 * @param {string} src - Image source URL
 * @returns {Promise<HTMLImageElement>}
 */
export const preloadImage = (src) => {
  // Return cached image if available
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src));
  }

  // Return existing loading promise if image is being loaded
  if (loadingImages.has(src)) {
    return loadingImages.get(src);
  }

  // Create new image loading promise
  const loadPromise = new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      imageCache.set(src, img);
      loadingImages.delete(src);
      resolve(img);
    };

    img.onerror = (error) => {
      loadingImages.delete(src);
      reject(error);
    };

    img.src = src;
  });

  loadingImages.set(src, loadPromise);
  return loadPromise;
};

/**
 * Preload multiple images
 * @param {string[]} sources - Array of image source URLs
 * @returns {Promise<HTMLImageElement[]>}
 */
export const preloadImages = (sources) => {
  return Promise.all(sources.map(preloadImage));
};

/**
 * Get cached image
 * @param {string} src - Image source URL
 * @returns {HTMLImageElement|null}
 */
export const getCachedImage = (src) => {
  return imageCache.get(src) || null;
};

/**
 * Clear image cache
 */
export const clearImageCache = () => {
  imageCache.clear();
  loadingImages.clear();
};

/**
 * Check if image is cached
 * @param {string} src - Image source URL
 * @returns {boolean}
 */
export const isImageCached = (src) => {
  return imageCache.has(src);
};
