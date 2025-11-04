// Library loading utility for better performance
import performanceMonitor from './performanceMonitor';

class LibraryLoader {
  constructor() {
    this.loadedLibraries = new Set();
    this.loadingPromises = new Map();
    this.retryCount = 0;
    this.maxRetries = 3;
  }

  // Check if a library is available
  isLibraryLoaded(libraryName) {
    switch (libraryName) {
      case 'jquery':
        return typeof window !== 'undefined' && window.$ && window.jQuery;
      case 'bootstrap':
        return typeof window !== 'undefined' && window.bootstrap;
      case 'swiper':
        return typeof window !== 'undefined' && window.Swiper;
      case 'slick':
        return typeof window !== 'undefined' && window.$ && window.$.fn && typeof window.$.fn.slick === 'function';
      case 'owlCarousel':
        return typeof window !== 'undefined' && window.$ && window.$.fn && typeof window.$.fn.owlCarousel === 'function';
      case 'magnificPopup':
        return typeof window !== 'undefined' && window.$ && window.$.fn && typeof window.$.fn.magnificPopup === 'function';
      case 'aos':
        return typeof window !== 'undefined' && window.AOS;
      case 'particles':
        return typeof window !== 'undefined' && window.particlesJS;
      case 'gsap':
        return typeof window !== 'undefined' && window.gsap;
      case 'scrollTrigger':
        return typeof window !== 'undefined' && window.ScrollTrigger;
      case 'splitText':
        return typeof window !== 'undefined' && window.SplitText;
      case 'waypoints':
        return typeof window !== 'undefined' && window.Waypoint;
      case 'counter':
        return typeof window !== 'undefined' && window.$ && window.$.fn && typeof window.$.fn.countUp === 'function';
      case 'circleProgress':
        return typeof window !== 'undefined' && window.$ && window.$.fn && typeof window.$.fn.circleProgress === 'function';
      case 'niceSelect':
        return typeof window !== 'undefined' && window.$ && window.$.fn && typeof window.$.fn.niceSelect === 'function';
      default:
        return false;
    }
  }

  // Wait for a library to be available
  async waitForLibrary(libraryName, timeout = 15000) {
    if (this.isLibraryLoaded(libraryName)) {
      this.loadedLibraries.add(libraryName);
      return true;
    }

    // Check if we're already waiting for this library
    if (this.loadingPromises.has(libraryName)) {
      return this.loadingPromises.get(libraryName);
    }

    const promise = new Promise((resolve, reject) => {
      const startTime = performance.now();
      
      const checkLibrary = () => {
        if (this.isLibraryLoaded(libraryName)) {
          this.loadedLibraries.add(libraryName);
          performanceMonitor.trackLibraryLoad(libraryName, startTime);
          resolve(true);
          return;
        }

        if (performance.now() - startTime > timeout) {
          const error = new Error(`Library ${libraryName} timeout`);
          performanceMonitor.trackError(error, `waitForLibrary:${libraryName}`);
          reject(error);
          return;
        }

        // Check every 100ms instead of 500ms for faster response
        setTimeout(checkLibrary, 100);
      };

      checkLibrary();
    });

    this.loadingPromises.set(libraryName, promise);
    return promise;
  }

  // Wait for multiple libraries
  async waitForLibraries(libraryNames, timeout = 15000) {
    const promises = libraryNames.map(lib => this.waitForLibrary(lib, timeout));
    try {
      await Promise.all(promises);
      return true;
    } catch (error) {
      console.warn('Some libraries failed to load:', error);
      return false;
    }
  }

  // Initialize a component with proper library dependencies
  async initializeComponent(componentName, dependencies, initFunction) {
    const startTime = performance.now();
    
    try {
      console.log(`Initializing ${componentName}...`);
      
      // Wait for all required libraries
      const success = await this.waitForLibraries(dependencies);
      
      if (!success) {
        const error = new Error(`Failed to load dependencies for ${componentName}`);
        performanceMonitor.trackError(error, `initializeComponent:${componentName}`);
        console.warn(`Failed to load dependencies for ${componentName}`);
        return false;
      }

      // Wait for DOM to be ready
      if (typeof window !== 'undefined' && window.$) {
        await new Promise(resolve => {
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', resolve);
          } else {
            resolve();
          }
        });
      }

      // Initialize the component
      initFunction();
      performanceMonitor.trackComponentInit(componentName, startTime);
      console.log(`${componentName} initialized successfully`);
      return true;
    } catch (error) {
      performanceMonitor.trackError(error, `initializeComponent:${componentName}`);
      console.error(`Error initializing ${componentName}:`, error);
      return false;
    }
  }

  // Clean up resources
  cleanup() {
    this.loadingPromises.clear();
    this.retryCount = 0;
  }
}

// Create a singleton instance
const libraryLoader = new LibraryLoader();

export default libraryLoader;
