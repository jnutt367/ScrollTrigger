gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
    scrollTrigger: {
        trigger: ".c",
        start: "top center",
        end: "top 100px",
        scrub: 1,
        pin: true,
        markers: true
    },
    x: 400,
    rotation: 360,
    ease: "none",
    duration: 5
});