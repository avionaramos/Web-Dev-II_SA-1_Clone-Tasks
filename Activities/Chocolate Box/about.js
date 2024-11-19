window.onload = function() {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
};

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Mockups section animation
gsap.from(".mockups-images img", {
    scrollTrigger: {
        trigger: ".mockups",  // Trigger the animation when ".mockups" comes into view
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
    },
    opacity: 0,
    scale: 0.8,              // Start with 80% scale
    stagger: 0.2,            // Delay each image by 0.2s
    duration: 1,
});

// Feedback section animation
gsap.from(".feedback img", {
    scrollTrigger: {
        trigger: ".feedback",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
    },
    opacity: 0,
    x: -100,                 // Slide in from the left
    stagger: 0.3,            // Delay each image by 0.3s
    duration: 1,
});

// Palette section animation
gsap.from(".palette img", {
    scrollTrigger: {
        trigger: ".palette",
        start: "top 90%",
        end: "bottom 70%",
        scrub: true,
    },
    opacity: 0,
    y: 50,                   // Slide in from the bottom
    duration: 1,
});
