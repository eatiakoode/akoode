//========== sticky-bar ============= // 
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-sec-container .nav-link");
    const indicator = document.querySelector(".nav-indicator");

    function updateIndicator(link) {
      const rect = link.getBoundingClientRect();
      const parentRect = link.parentElement.getBoundingClientRect();

      indicator.style.width = `${rect.width}px`;
      indicator.style.left = `${rect.left - parentRect.left}px`;
    }

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
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
        const section = document.querySelector(link.getAttribute("href"));
        if (
          section.offsetTop - 120 <= window.scrollY &&
          section.offsetTop + section.offsetHeight - 120 > window.scrollY
        ) {
          navLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
          updateIndicator(link);
        }
      });
    });

    // Init: set on first active
    const firstActive = document.querySelector(".nav-sec-container .nav-link.active");
    if (firstActive) updateIndicator(firstActive);
  });

