document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Entrance for the entire glass container
    tl.from(".glass-container", { duration: 1.2, opacity: 0, scale: 0.9 })
      
      // 2. Staggered fade and slide for navigation links
      .from(".nav-links li", { duration: 0.6, y: -30, opacity: 0, stagger: 0.15 }, "-=0.5")

      // 3. Slide in the attached clothing image from the left
      .from(".clothing-image", { duration: 1, x: -100, opacity: 0, delay: 0.2 })

      // 4. Staggered float in for the login section and categories
      .from(".info-panel h2, .login-box, .cat-card", { duration: 0.8, y: 40, opacity: 0, stagger: 0.2 }, "-=0.5");
});
