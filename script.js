const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let tl = gsap.timeline({
  scrollTrigger:{
    trigger: "#container",
    pin: true,
    scrub: 1,
    start: "center center",
    end: "200% 50%",
  }
})

tl.from("#social",{
  opacity: 0,
  filter: "blur(5px)"
})
.from("#metric",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#logo",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#mobile",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#product",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#reels",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#budget",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#website",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#premium",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#review",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#animation",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#awards",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#audit",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})
.from("#redesign",{
  opacity: 0,
  filter: "blur(5px)",
  delay: -0.4
})