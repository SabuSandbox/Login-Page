// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // 1. Entrance for the main container
    tl.from(".glass-container", { duration: 1.2, opacity: 0, scale: 0.9 })
    
    // 2. Animate Nav links one by one
    .from(".nav-links li", { duration: 0.5, y: -20, opacity: 0, stagger: 0.1 }, "-=0.5")

    // 3. Slide the "clothes" items in from the left
    .from(".item", { 
        duration: 0.8, 
        x: -100, 
        opacity: 0, 
        stagger: 0.15,
        rotation: -5 
    }, "-=0.3")

    // 4. Fade in the text and cards
    .from(".text-content h1, .text-content p", { duration: 0.6, y: 30, opacity: 0, stagger: 0.2 })
    .from(".cat-card", { duration: 0.5, scale: 0.8, opacity: 0, stagger: 0.1 }, "-=0.2");
});
