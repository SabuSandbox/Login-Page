document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(".glass-container", { duration: 1, opacity: 0, scale: 0.95 })
      .from(".clothing-image", { duration: 1, x: -50, opacity: 0 }, "-=0.5")
      .from(".main-logo", { duration: 0.8, y: -20, opacity: 0 }, "-=0.5")
      .from(".input-group", { duration: 0.5, opacity: 0, y: 20, stagger: 0.2 }, "-=0.3")
      .from(".nav-btn", { duration: 0.5, opacity: 0, scale: 0.8, stagger: 0.1 }, "-=0.2");
});
