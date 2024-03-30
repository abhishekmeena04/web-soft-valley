gsap.from(
  ".leftpart h3,.leftpart p, .leftpart button, .leftpart .google-btn img",
  {
    opacity: 0,
    y: -40,
    duration: 2,
    stagger: 0.5
  }
);

gsap.from(".righ img", {
  opacity: 0,
  y: -40,
  duration: 2,
});
gsap.to(".cards .card", {
  stagger: 0.3,
  y: -40,
  scrollTrigger: {
    trigger: ".cards .card",
    scroller: "body",
    start: "top 70%",
    end: "top 75%",
  },
});
