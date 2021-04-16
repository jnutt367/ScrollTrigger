var animation = gsap.timeline()
    .from("#demo", { duration: 1, opacity: 1 })
    .from("#title", { opacity: 0, duration: 3, scale: 0, ease: "back" })
    .from("#freds img", { y: 160, stagger: 0.5, duration: 0.8, ease: "back" }, "+=0.5")
    .add("test")
    .from("#time", { xPercent: 100, duration: 1, ease: "bounce" });



document.getElementById("play").onclick = () => animation.play();
document.getElementById("pause").onclick = () => animation.pause();
document.getElementById("reverse").onclick = () => animation.reverse();
document.getElementById("restart").onclick = () => animation.restart();
document.getElementById("test").onclick = () => animation.play("test");








gsap.set("#wrapper", { scale: 1, visibility: "visible", opacity: 1 });