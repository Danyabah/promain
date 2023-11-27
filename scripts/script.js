const introTitle = new SplitType(".intro__title");
const techTitle = new SplitType(".tech__title");
const audTitle = new SplitType(".aud__title");
const formTitle = new SplitType(".form__title");
const scopTitle = new SplitType(".scope__title");
const newsTitle = new SplitType(".news__title");
gsap.registerPlugin(ScrollTrigger);

// let mm = gsap.matchMedia();

// intro
// ScrollTrigger.config({
//   ignoreMobileResize: true,
// });
window.addEventListener("DOMContentLoaded", () => {
  const timeline = gsap.timeline({ defaults: { duration: 0.5, ease: "ease" } });
  timeline
    .from(".intro__title .word", {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
    })
    .from(".intro__text", { yPercent: 100, opacity: 0 }, "0.2")
    .from(
      ".intro__btn",
      {
        yPercent: 100,
        opacity: 0,
      },
      "0.4"
    );

  // popup

  gsap.from(".tech__text", {
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".tech__text",
  });
  gsap.from(".tech__title .word", {
    yPercent: 100,
    opacity: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".tech__title",
  });
  gsap.from(".tech__subtitle", {
    yPercent: 100,
    duration: 0.5,
    delay: 0.5,
    ease: "ease",
    opacity: 0,
    scrollTrigger: ".tech__subtitle",
  });
  // mm.add("(min-width: 800px)", () => {
  gsap.from(".tech .section__item", {
    yPercent: 20,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".tech .section__row",
  });
  // });

  //scope
  gsap.from(".scope__text", {
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".scope__text",
  });
  gsap.from(".scope__title .word", {
    yPercent: 100,
    opacity: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".scope__title",
  });
  gsap.from(".scope__subtitle", {
    yPercent: 100,
    duration: 0.5,
    delay: 0.5,
    ease: "ease",
    opacity: 0,
    scrollTrigger: ".scope__subtitle",
  });
  // aud
  gsap.from(".aud__text", {
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".aud__text",
  });
  gsap.from(".aud__title .word", {
    yPercent: 100,
    opacity: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".aud__title",
  });
  gsap.from(".aud__subtitle", {
    yPercent: 100,
    duration: 0.5,
    delay: 0.5,
    ease: "ease",
    opacity: 0,
    scrollTrigger: ".aud__subtitle",
  });
  // mm.add("(min-width: 800px)", () => {
  gsap.from(".aud .section__item", {
    yPercent: 20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".aud .section__row",
  });
  // });

  //news
  gsap.from(".news__text", {
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".news__text",
  });
  gsap.from(".news__title .word", {
    yPercent: 100,
    opacity: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".news__title",
  });
  gsap.from(".news__subtitle", {
    yPercent: 100,
    duration: 0.5,
    delay: 0.5,
    ease: "ease",
    opacity: 0,
    scrollTrigger: ".news__subtitle",
  });

  // form

  gsap.from(".form__text", {
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".form__text",
  });
  gsap.from(".form__title .word", {
    yPercent: 100,
    opacity: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "ease",
    scrollTrigger: ".form__title",
  });
  gsap.from(".form__subtitle", {
    yPercent: 100,
    duration: 0.5,
    ease: "ease",
    opacity: 0,
    delay: 0.5,
    scrollTrigger: ".form__subtitle",
  });

  // mm.add("(min-width: 800px)", () => {
  gsap.from(".form .inp", {
    yPercent: 50,
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
  // });
});
const videoPlay = document.querySelector(".video__play");
const videoPlayBtn = document.querySelector(".video__play-img");

const popup = document.querySelector(".popup");

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    // gsap.to(".popup", {
    //   opacity: 0,
    //   duration: 0.5,
    // });
    // gsap.to(".popup__video-col", {
    //   y: "-100%",
    //   duration: 0.5,
    // });
    // setTimeout(() => {
    popup.classList.add("hidden");
    // }, 500);
    showPreview();
    pause();
  }
});

function showPreview() {
  videoPoster.classList.remove("hidden");
  videoPlay.classList.add("active");
}

function hidePreview() {
  videoPoster.classList.add("hidden");
  videoPlay.classList.remove("active");
}

videoPlayBtn.addEventListener("click", (e) => {
  popup.classList.remove("hidden");
  gsap.from(".popup", {
    opacity: 0,
    duration: 0.5,
  });
  gsap.from(".popup__video-col", {
    y: "-100%",
    duration: 0.5,
  });
  hidePreview();
  play();
});

const scopeItems = document.querySelectorAll(".scope__item");

scopeItems.forEach((item) => {
  item.onclick = function () {
    clearScopeClass();
    item.classList.add("scope__item-active");
  };
});

function clearScopeClass() {
  scopeItems.forEach((item) => {
    item.classList.remove("scope__item-active");
  });
}

// video

const popupPlay = document.querySelector(".popup__play");
const popupPause = document.querySelector(".popup__pause");
const popupVideo = document.querySelector(".popup__video-item");
const progress = document.querySelector(".popup__range");
const videoPoster = document.querySelector(".video__poster");
const videoHover = document.querySelector(".video__play ");

const time = document.querySelector(".popup__time");

time.innerHTML = sToStr(+popupVideo.duration);

popupPlay.onclick = play;

popupPause.onclick = pause;

popupVideo.ontimeupdate = progressUpdate;

progress.onclick = videoRewind;

function play() {
  popupVideo.play();
  popupPause.classList.remove("hidden");
  popupPlay.classList.add("hidden");
}

function pause() {
  popupVideo.pause();
  popupPause.classList.add("hidden");
  popupPlay.classList.remove("hidden");
}

function progressUpdate() {
  let d = popupVideo.duration;
  let c = popupVideo.currentTime;
  progress.value = (100 * c) / d;

  time.innerHTML = sToStr(
    Math.round(+popupVideo.duration - +popupVideo.currentTime)
  );
}

function videoRewind(event) {
  let w = this.offsetWidth;
  let o = event.offsetX;

  this.value = (100 * o) / w;
  pause();
  popupVideo.currentTime = popupVideo.duration * (o / w);
  play();
}

function sToStr(s) {
  let m = Math.trunc(s / 60) + "";
  s = (s % 60) + "";
  return m.padStart(2, 0) + ":" + s.padStart(2, 0);
}

videoHover.addEventListener("mouseenter", () => {
  videoPoster.pause();
});

videoHover.addEventListener("mouseleave", () => {
  videoPoster.play();
});

// burger
const burger = document.querySelector(".burger");
const header = document.querySelector(".header");
const burgerLinks = document.querySelectorAll(".header__link");

burger.onclick = function () {
  if (burger.classList.contains("burger-active")) {
    burgerClose();
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

burgerLinks.forEach((link) => {
  link.onclick = burgerClose;
});

function burgerClose() {
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
}
