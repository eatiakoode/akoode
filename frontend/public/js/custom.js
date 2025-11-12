
;(function () {
  if (typeof window === 'undefined') {
    return;
  }

  if (window.__AKOODE_CUSTOM_INITIALIZED) {
    return;
  }

  window.__AKOODE_CUSTOM_INITIALIZED = true;

  // Add global error handler for custom.js
  window.addEventListener('error', function(e) {
    if (e.message && e.message.includes('getElementsByClassName')) {
      console.error('getElementsByClassName error in custom.js:', e.message);
      console.error('Error stack:', e.error ? e.error.stack : 'No stack trace');
      console.error('Error source:', e.filename, 'Line:', e.lineno, 'Column:', e.colno);
    }
  });

  // Initialize particles with proper library loading check
  let particlesRetryCount = 0;
  const maxParticlesRetries = 50; // Maximum 5 seconds of retries

  function initializeParticles() {
    particlesRetryCount++;
    
    if (particlesRetryCount > maxParticlesRetries) {
      console.log('Max retries reached for particles initialization, giving up.');
      return;
    }
    
    if (typeof window !== 'undefined' && window.particlesJS) {
      // Check if the particles-js element exists
      const particlesElement = document.getElementById('particles-js');
      if (particlesElement) {
        try {
          particlesJS("particles-js", {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.1, random: false },
              size: { value: 3, random: true },
              line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
              move: { enable: true, speed: 3, direction: "none", random: false, straight: false, out_mode: "out" }
            },
            interactivity: {
              detect_on: "canvas",
              events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
              modes: { grab: { distance: 200, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
            },
            retina_detect: true
          });
          console.log('Particles initialized successfully');
        } catch (error) {
          console.error('Error initializing particles:', error);
        }
      } else {
        console.log('Particles-js element not found, retrying... (' + particlesRetryCount + '/' + maxParticlesRetries + ')');
        setTimeout(initializeParticles, 100);
      }
    } else {
      console.log('ParticlesJS not available, retrying... (' + particlesRetryCount + '/' + maxParticlesRetries + ')');
      setTimeout(initializeParticles, 100);
    }
  }

  function scheduleParticles() {
    if (window.__NEXT_HYDRATED) {
      initializeParticles();
    } else {
      window.addEventListener('next-hydrated', initializeParticles, { once: true });
    }
  }

  scheduleParticles();
})();

