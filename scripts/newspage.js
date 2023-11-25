const burger = document.querySelector(".burger");
const header = document.querySelector(".header");
const formTitle = new SplitType(".form__title");
gsap.registerPlugin(ScrollTrigger);

// intro
ScrollTrigger.config({
  ignoreMobileResize: true,
});
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

// form

gsap.from(".form__text", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".form__text",
});
gsap.from(".form__title .word", {
  y: "100%",
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".form__title",
});
gsap.from(".form__subtitle", {
  y: "100%",
  duration: 0.5,
  ease: "ease",
  opacity: 0,
  delay: 0.5,
  scrollTrigger: ".form__subtitle",
});

gsap.from(".form .inp", {
  y: "50%",
  opacity: 0,
  stagger: 0.2,
  delay: 0.5,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".form .form__item",
});

gsap.to(".form .inp", {
  y: "0%",
  opacity: 1,
  stagger: 0.2,
  delay: 0.5,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".form .form__item",
});
