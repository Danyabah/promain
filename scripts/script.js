const introTitle = new SplitType(".intro__title");
const techTitle = new SplitType(".tech__title");
const audTitle = new SplitType(".aud__title");
const formTitle = new SplitType(".form__title");
gsap.registerPlugin(ScrollTrigger);
// intro

const timeline = gsap.timeline({ defaults: { duration: 0.5, ease: "bounse" } });
timeline
  .from(".intro__title .word", {
    y: "100%",
    opacity: 0,
    stagger: 0.05,
  })
  .from(".intro__text", { y: "100%", opacity: 0 })
  .from(".intro__btn", {
    y: "100%",
    opacity: 0,
  });

// tech
gsap.from(".tech__text", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "bounse",
  scrollTrigger: ".tech__text",
});
gsap.from(".tech__title .word", {
  y: "100%",
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "bounse",
  scrollTrigger: ".tech__title",
});
gsap.from(".tech__subtitle", {
  y: "100%",
  duration: 0.5,
  delay: 0.5,

  ease: "bounse",
  opacity: 0,
  scrollTrigger: ".tech__subtitle",
});
gsap.from(".tech .section__item", {
  y: "100%",
  opacity: 0,
  stagger: 0.5,
  delay: 0.5,

  duration: 0.5,
  ease: "bounse",
  scrollTrigger: ".tech .section__row",
});
// aud
gsap.from(".aud__text", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "bounse",
  scrollTrigger: ".aud__text",
});
gsap.from(".aud__title .word", {
  y: "100%",
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "bounse",
  scrollTrigger: ".aud__title",
});
gsap.from(".aud__subtitle", {
  y: "100%",
  duration: 0.5,
  delay: 0.5,
  ease: "bounse",
  opacity: 0,
  scrollTrigger: ".aud__subtitle",
});
gsap.from(".aud .section__item", {
  y: "100%",
  opacity: 0,
  stagger: 0.5,
  duration: 0.5,
  ease: "bounse",
  scrollTrigger: ".aud .section__row",
});
// form

gsap.from(".form__text", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "bounse",
  scrollTrigger: ".form__text",
});
gsap.from(".form__title .word", {
  y: "100%",
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "bounse",
  scrollTrigger: ".form__title",
});
gsap.from(".form__subtitle", {
  y: "100%",
  duration: 0.5,
  ease: "bounse",
  opacity: 0,
  delay: 0.5,
  scrollTrigger: ".form__subtitle",
});
gsap.from(".form .form__item", {
  y: "100%",
  opacity: 0,
  delay: 0.5,
  duration: 0.5,
  ease: "bounse",
  scrollTrigger: ".form .form__item",
});
const video = document.querySelector(".video__item");
const videoPlay = document.querySelector(".video__play");
const videoPlayBtn = document.querySelector(".video__play-img");

videoPlayBtn.addEventListener("click", (e) => {
  if (video.paused) {
    videoPlay.classList.remove("active");
    video.play();
  } else {
    videoPlay.classList.add("active");
    video.pause();
  }
});
