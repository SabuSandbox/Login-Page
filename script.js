document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".glass-container", { duration: 1.2, opacity: 0, scale: 0.98 })
      .from(".hd-logo", { duration: 1, y: -40, opacity: 0 }, "-=0.6")
      .from(".brand-image", { duration: 1, x: -30, opacity: 0 }, "-=0.8")
      .from(".input-group", { duration: 0.8, y: 30, opacity: 0, stagger: 0.15 }, "-=0.7")
      .from(".nav-btn", { duration: 0.6, scale: 0.8, opacity: 0, stagger: 0.1 }, "-=0.5");
});
