//========== sticky-bar ============= // 
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-sec-container .nav-link");
    const indicator = document.querySelector(".nav-indicator");

    function updateIndicator(link) {
      if (!indicator) return; // Exit if indicator is not found
      
      const rect = link.getBoundingClientRect();
      const parentRect = link.parentElement.getBoundingClientRect();

      indicator.style.width = `${rect.width}px`;
      indicator.style.left = `${rect.left - parentRect.left}px`;
    }

    if (navLinks.length === 0) return; // Exit if no nav links found

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // Add null check for this (the link element)
        if (!this) return;

        navLinks.forEach(l => {
          if (l && l.classList) {
            l.classList.remove("active");
          }
        });
        
        if (this.classList) {
          this.classList.add("active");
        }
        
        setTimeout(() => {
          updateIndicator(this);
        }, 400);

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // On scroll — update active and move indicator
    window.addEventListener("scroll", function () {
      navLinks.forEach(link => {
        // Add null check for link element
        if (!link) return;
        
        const section = document.querySelector(link.getAttribute("href"));
        if (section && 
          section.offsetTop - 120 <= window.scrollY &&
          section.offsetTop + section.offsetHeight - 120 > window.scrollY
        ) {
          navLinks.forEach(l => {
            if (l && l.classList) {
              l.classList.remove("active");
            }
          });
          
          if (link.classList) {
            link.classList.add("active");
          }
          updateIndicator(link);
        }
      });
    });

    // Init: set on first active
    const firstActive = document.querySelector(".nav-sec-container .nav-link.active");
    if (firstActive) updateIndicator(firstActive);
  });

