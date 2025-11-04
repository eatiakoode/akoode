// Performance monitoring utility
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      libraryLoadTimes: {},
      componentInitTimes: {},
      totalLoadTime: 0,
      errors: []
    };
    this.startTime = performance.now();
  }

  // Track library loading time
  trackLibraryLoad(libraryName, startTime) {
    const endTime = performance.now();
    this.metrics.libraryLoadTimes[libraryName] = endTime - startTime;
    console.log(`📚 ${libraryName} loaded in ${(endTime - startTime).toFixed(2)}ms`);
  }

  // Track component initialization time
  trackComponentInit(componentName, startTime) {
    const endTime = performance.now();
    this.metrics.componentInitTimes[componentName] = endTime - startTime;
    console.log(`⚡ ${componentName} initialized in ${(endTime - startTime).toFixed(2)}ms`);
  }

  // Track errors
  trackError(error, context) {
    this.metrics.errors.push({
      error: error.message || error,
      context,
      timestamp: new Date().toISOString()
    });
    console.error(`❌ Error in ${context}:`, error);
  }

  // Get performance summary
  getPerformanceSummary() {
    const endTime = performance.now();
    this.metrics.totalLoadTime = endTime - this.startTime;

    const summary = {
      totalLoadTime: this.metrics.totalLoadTime,
      libraryCount: Object.keys(this.metrics.libraryLoadTimes).length,
      componentCount: Object.keys(this.metrics.componentInitTimes).length,
      errorCount: this.metrics.errors.length,
      averageLibraryLoadTime: this.getAverageTime(this.metrics.libraryLoadTimes),
      averageComponentInitTime: this.getAverageTime(this.metrics.componentInitTimes),
      slowestLibrary: this.getSlowestItem(this.metrics.libraryLoadTimes),
      slowestComponent: this.getSlowestItem(this.metrics.componentInitTimes)
    };

    console.log('📊 Performance Summary:', summary);
    return summary;
  }

  // Helper methods
  getAverageTime(times) {
    const values = Object.values(times);
    return values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
  }

  getSlowestItem(times) {
    const entries = Object.entries(times);
    if (entries.length === 0) return null;
    
    return entries.reduce((max, current) => 
      current[1] > max[1] ? current : max
    );
  }

  // Log performance tips
  logPerformanceTips() {
    const summary = this.getPerformanceSummary();
    
    console.log('💡 Performance Tips:');
    
    if (summary.averageLibraryLoadTime > 100) {
      console.log('⚠️  Library loading is slow. Consider using CDN or optimizing script loading.');
    }
    
    if (summary.averageComponentInitTime > 50) {
      console.log('⚠️  Component initialization is slow. Check for blocking operations.');
    }
    
    if (summary.errorCount > 0) {
      console.log('⚠️  Errors detected. Check console for details.');
    }
    
    if (summary.totalLoadTime < 1000) {
      console.log('✅ Great performance! Page loads quickly.');
    } else if (summary.totalLoadTime < 3000) {
      console.log('⚠️  Moderate performance. Consider optimizations.');
    } else {
      console.log('❌ Poor performance. Immediate optimization needed.');
    }
  }
}

// Create a singleton instance
const performanceMonitor = new PerformanceMonitor();

// Auto-log performance summary after page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.logPerformanceTips();
    }, 1000);
  });
}

export default performanceMonitor;

