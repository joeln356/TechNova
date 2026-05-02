/* script.js - TechNova Interactions */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      // Adiciona estilo de vidro quando scrollar
      navbar.classList.add('bg-background/80', 'backdrop-blur-md', 'border-border/50', 'shadow-lg');
      navbar.classList.remove('bg-transparent', 'border-transparent');
    } else {
      // Volta para transparente no topo
      navbar.classList.add('bg-transparent', 'border-transparent');
      navbar.classList.remove('bg-background/80', 'backdrop-blur-md', 'border-border/50', 'shadow-lg');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      mobileMenu.classList.add('open');
      iconMenu.classList.remove('block');
      iconMenu.classList.add('hidden');
      iconClose.classList.remove('hidden');
      iconClose.classList.add('block');
    } else {
      mobileMenu.classList.remove('open');
      iconMenu.classList.remove('hidden');
      iconMenu.classList.add('block');
      iconClose.classList.remove('block');
      iconClose.classList.add('hidden');
    }
  }

  // Bind click event to hamburger button
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMenu);
  }
  
  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // 3. Form Submission Prevent Default (Mockup)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerText;
      
      btn.innerText = 'Transmitting...';
      btn.classList.add('opacity-80');
      
      // Simulate network request
      setTimeout(() => {
        btn.innerText = 'Data Sent Successfully!';
        btn.classList.remove('bg-primary', 'text-primary-foreground');
        btn.classList.add('bg-green-500', 'text-white');
        
        contactForm.reset();
        
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.add('bg-primary', 'text-primary-foreground');
          btn.classList.remove('bg-green-500', 'text-white', 'opacity-80');
        }, 3000);
      }, 1500);
    });
  }

  // 4. Scroll Reveal Animation using Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Dispara quando 15% do elemento estiver visível
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Opcional: parar de observar após a primeira animação
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observa todos os elementos com as classes fade-in-up ou scale-up
  const elementsToAnimate = document.querySelectorAll('.fade-in-up, .scale-up');
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });

});