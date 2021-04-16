gsap.set("#demo", { scale: "1.2" });
gsap.to("#wrapper", { y: -200 });

gsap.timeline()
    .from("#demo", { duration: 1, opacity: 0 })
    .from("#title", { duration: 2, opacity: "0", scale: "0", ease: "back" })
    .from("#freds img", { y: 160, stagger: 0.1, duration: 0.8, ease: "back" })
    .from("#time", { xPercent: 100 })
    .to("#purple", { y: 200 })
    .to("#red", {
        x: -200,
        y: -50,
        rotate: "360",
        scale: "2"
    })
    .to("#fred", { duration: 1.5, scale: "1.2", ease: "bounce" })