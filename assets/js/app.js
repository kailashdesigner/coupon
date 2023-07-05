
// banner slider
var swiper = new Swiper(".myBannerSwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".topCategoriesSwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
});

// delas
var swiper = new Swiper(".delas", {
  slidesPerView: 3,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});