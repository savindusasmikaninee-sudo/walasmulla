// Modern JavaScript functionality for Walasmulla website
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  };

  // Intersection Observer for animations
  const observeElements = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe cards and sections
    const elementsToObserve = document.querySelectorAll(
      ".card, .stat, .highlight"
    );
    elementsToObserve.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(el);
    });
  };

  // Enhanced navigation highlighting
  const highlightCurrentPage = () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href");
      if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
      ) {
        link.classList.add("active");
      }
    });
  };

  // Mobile menu toggle
  const setupMobileMenu = () => {
    const navContainer = document.querySelector("nav .nav-container");
    const nav = document.querySelector("nav ul");

    if (!navContainer || !nav) return;

    // Create menu toggle button
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "☰";
    menuToggle.className = "mobile-menu-toggle";
    menuToggle.setAttribute("aria-label", "Toggle mobile menu");
    menuToggle.style.display = "none";

    // Insert toggle button into nav container
    navContainer.appendChild(menuToggle);

    // Toggle functionality
    menuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      nav.classList.toggle("mobile-open");

      // Update button icon
      if (nav.classList.contains("mobile-open")) {
        menuToggle.innerHTML = "✕";
        menuToggle.setAttribute("aria-label", "Close mobile menu");
      } else {
        menuToggle.innerHTML = "☰";
        menuToggle.setAttribute("aria-label", "Toggle mobile menu");
      }
    });

    // Close menu when clicking on a link
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("mobile-open");
        menuToggle.innerHTML = "☰";
        menuToggle.setAttribute("aria-label", "Toggle mobile menu");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !navContainer.contains(e.target) &&
        nav.classList.contains("mobile-open")
      ) {
        nav.classList.remove("mobile-open");
        menuToggle.innerHTML = "☰";
        menuToggle.setAttribute("aria-label", "Toggle mobile menu");
      }
    });

    // Media query handler
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaChange = (e) => {
      if (e.matches) {
        menuToggle.style.display = "flex";
      } else {
        menuToggle.style.display = "none";
        nav.classList.remove("mobile-open");
        menuToggle.innerHTML = "☰";
      }
    };

    // Use the newer addEventListener for media queries
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleMediaChange);
    }

    // Initial check
    handleMediaChange(mediaQuery);
  };

  // Scroll-to-top button
  const createScrollToTop = () => {
    const scrollButton = document.createElement("button");
    scrollButton.innerHTML = "↑";
    scrollButton.className = "scroll-to-top";
    scrollButton.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: var(--primary-color);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.5rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(44, 95, 45, 0.3);
        `;

    document.body.appendChild(scrollButton);

    // Show/hide based on scroll position
    const toggleScrollButton = () => {
      if (window.pageYOffset > 300) {
        scrollButton.style.opacity = "1";
        scrollButton.style.visibility = "visible";
      } else {
        scrollButton.style.opacity = "0";
        scrollButton.style.visibility = "hidden";
      }
    };

    window.addEventListener("scroll", toggleScrollButton);

    // Scroll to top functionality
    scrollButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  // Page loading animation
  const pageLoadAnimation = () => {
    const main = document.querySelector("main");
    if (main) {
      main.style.opacity = "0";
      main.style.transform = "translateY(20px)";

      setTimeout(() => {
        main.style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";
        main.style.opacity = "1";
        main.style.transform = "translateY(0)";
      }, 100);
    }
  };

  // Enhanced card hover effects
  const enhanceCards = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px) scale(1.02)";
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
      });
    });
  };

  // Statistics counter animation
  const animateStats = () => {
    const statNumbers = document.querySelectorAll(".stat-number");

    const animateNumber = (element, target) => {
      const increment = target / 50;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        // Format number with + or % if needed
        let displayValue = Math.floor(current);
        if (element.textContent.includes("%")) {
          displayValue += "%";
        } else if (element.textContent.includes("+")) {
          displayValue += "+";
        }

        element.textContent = displayValue;
      }, 30);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.textContent);
          if (!isNaN(target)) {
            animateNumber(entry.target, target);
            observer.unobserve(entry.target);
          }
        }
      });
    });

    statNumbers.forEach((stat) => observer.observe(stat));
  };

  // Gallery Lightbox functionality
  const initGalleryLightbox = () => {
    const galleryItems = document.querySelectorAll('.photo-gallery .gallery-item img');
    
    if (galleryItems.length === 0) {
      console.log('No gallery items found');
      return;
    }

    console.log(`Found ${galleryItems.length} gallery items`);

    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    const lightboxContent = document.createElement('div');
    lightboxContent.className = 'lightbox-content';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'lightbox-nav lightbox-prev';
    prevBtn.innerHTML = '‹';
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'lightbox-nav lightbox-next';
    nextBtn.innerHTML = '›';
    
    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-image';
    lightboxImg.src = '';
    lightboxImg.alt = '';
    
    const counter = document.createElement('div');
    counter.className = 'lightbox-counter';
    
    lightboxContent.appendChild(closeBtn);
    lightboxContent.appendChild(prevBtn);
    lightboxContent.appendChild(lightboxImg);
    lightboxContent.appendChild(nextBtn);
    lightboxContent.appendChild(counter);
    lightbox.appendChild(lightboxContent);
    document.body.appendChild(lightbox);

    let currentIndex = 0;
    const images = Array.from(galleryItems);

    // Function to show image
    const showImage = (index) => {
      currentIndex = index;
      const img = images[index];
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      counter.textContent = `${index + 1} / ${images.length}`;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    // Function to close lightbox
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    // Function to show next image
    const showNext = () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    };

    // Function to show previous image
    const showPrev = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    };

    // Add click handlers to gallery images
    galleryItems.forEach((img, index) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(`Clicked image ${index + 1}`);
        showImage(index);
      });
    });

    // Close button
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });

    // Navigation buttons
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showNext();
    });

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrev();
    });

    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxContent) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });

    console.log('Lightbox initialized successfully');
  };

  // Initialize all functionality
  const init = () => {
    smoothScroll();
    observeElements();
    highlightCurrentPage();
    setupMobileMenu();
    createScrollToTop();
    pageLoadAnimation();
    enhanceCards();
    animateStats();
    initGalleryLightbox();
  };

  // Run initialization
  init();

  // Mobile menu styles are now in CSS file
});

// Utility functions for enhanced UX
const showNotification = (message, type = "info") => {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${
          type === "success" ? "var(--secondary-color)" : "var(--primary-color)"
        };
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--border-radius-small);
        box-shadow: var(--shadow-medium);
        z-index: 1001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(0)";
  }, 100);

  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100%)";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
};

// Enhanced page transitions
const navigateWithTransition = (href) => {
  const main = document.querySelector("main");
  if (main) {
    main.style.opacity = "0";
    main.style.transform = "translateY(20px)";

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  } else {
    window.location.href = href;
  }
};
