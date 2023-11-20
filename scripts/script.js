const introTitle = new SplitType(".intro__title");
const techTitle = new SplitType(".tech__title");
const audTitle = new SplitType(".aud__title");
const formTitle = new SplitType(".form__title");
const scopTitle = new SplitType(".scope__title");

gsap.registerPlugin(ScrollTrigger);

// intro
ScrollTrigger.config({
  ignoreMobileResize: true,
});

const timeline = gsap.timeline({ defaults: { duration: 0.5, ease: "ease" } });
timeline
  .from(".intro__title .word", {
    y: "100%",
    opacity: 0,
    stagger: 0.05,
  })
  .from(".intro__text", { y: "100%", opacity: 0 }, "0.2")
  .from(
    ".intro__btn",
    {
      y: "100%",
      opacity: 0,
    },
    "0.4"
  );

// popup

gsap.from(".tech__text", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".tech__text",
});
gsap.from(".tech__title .word", {
  y: "100%",
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".tech__title",
});
gsap.from(".tech__subtitle", {
  y: "100%",
  duration: 0.5,
  delay: 0.5,
  ease: "ease",
  opacity: 0,
  scrollTrigger: ".tech__subtitle",
});
gsap.from(".tech .section__item", {
  y: "20%",
  opacity: 0,
  stagger: 0.2,
  delay: 0.5,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".tech .section__row",
});
//scope
gsap.from(".scope__text", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".scope__text",
});
gsap.from(".scope__title .word", {
  y: "100%",
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".scope__title",
});
gsap.from(".scope__subtitle", {
  y: "100%",
  duration: 0.5,
  delay: 0.5,
  ease: "ease",
  opacity: 0,
  scrollTrigger: ".scope__subtitle",
});
// aud
gsap.from(".aud__text", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".aud__text",
});
gsap.from(".aud__title .word", {
  y: "100%",
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".aud__title",
});
gsap.from(".aud__subtitle", {
  y: "100%",
  duration: 0.5,
  delay: 0.5,
  ease: "ease",
  opacity: 0,
  scrollTrigger: ".aud__subtitle",
});
gsap.from(".aud .section__item", {
  y: "20%",
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
  ease: "ease",
  scrollTrigger: ".aud .section__row",
});
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

const videoPlay = document.querySelector(".video__play");
const videoPlayBtn = document.querySelector(".video__play-img");
const videoPoster = document.querySelector(".video__poster");
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
