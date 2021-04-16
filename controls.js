var animation = gsap.timeline()
    .from("#demo", { duration: 1, opacity: 1 })
    .from("#title", { opacity: 0, duration: 2, scale: 0, ease: "back" })
    .from("#freds img", { y: 160, stagger: 0.2, duration: 0.8, ease: "back" }, "+=0.5")
    .add("test")
    .from("#time", { xPercent: 100, duration: 1, ease: "elastic" })
    .to("#red", { x: -200, y: -50, rotate: "360", scale: "2" })
    .to("#fred", { duration: 2, x: 200, y: -40, rotate: "-360", scale: "1.5", ease: "elastic" })
    .to("#orange", { duration: ".5", x: "-220", })
    .to("h3", { duration: "2", scale: 2.3, y: -230, ease: "back", textDecoration: "none", color: "red" })



document.getElementById("play").onclick = () => animation.play();
document.getElementById("pause").onclick = () => animation.pause();
document.getElementById("reverse").onclick = () => animation.reverse();
document.getElementById("restart").onclick = () => animation.restart();
document.getElementById("test").onclick = () => animation.play("test");








gsap.set("#wrapper", { scale: 1, visibility: "visible", opacity: 1 });