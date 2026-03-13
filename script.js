document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(".glass-container", { duration: 1, opacity: 0, y: 30 })
      .from(".brand-image", { duration: 1, scale: 0.8, opacity: 0 }, "-=0.5")
      .from(".main-logo", { duration: 0.8, x: -30, opacity: 0 }, "-=0.5")
      .from(".input-group", { duration: 0.5, opacity: 0, y: 15, stagger: 0.2 }, "-=0.3")
      .from(".nav-btn", { duration: 0.5, opacity: 0, scale: 0.5, stagger: 0.1 }, "-=0.2");
});
