const newsTitle = new SplitType(".news__title");
gsap.registerPlugin(ScrollTrigger);

// intro
ScrollTrigger.config({
  ignoreMobileResize: true,
});
//news
gsap.from(".news__text", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".news__text",
});
gsap.from(".news__title .word", {
  y: "100%",
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".news__title",
});
gsap.from(".news__subtitle", {
  y: "100%",
  duration: 0.5,
  delay: 0.5,
  ease: "ease",
  opacity: 0,
  scrollTrigger: ".news__subtitle",
});

const burger = document.querySelector(".burger");
const header = document.querySelector(".header");

burger.onclick = function () {
  if (burger.classList.contains("burger-active")) {
    burger.classList.remove("burger-active");
    header.classList.remove("header-active");
    gsap.to(".header__nav", {
      duration: 0.6,
      ease: "ease",
      height: "0px",
    });
    gsap.to(".header__right", {
      duration: 0.6,
      ease: "ease",
      height: "0px",
      delay: 0.1,
    });
  } else {
    burger.classList.add("burger-active");
    header.classList.add("header-active");
    gsap.to(".header__nav", {
      duration: 0.6,
      ease: "ease",
      height: "173px",
    });
    gsap.to(".header__right", {
      duration: 0.6,
      ease: "ease",
      height: "98px",
      delay: 0.1,
    });
  }
};
