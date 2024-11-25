const body = document.querySelector('body');

// const swiper = new Swiper('.mySwiper', {
//   spaceBetween: 30,
//   effect: 'fade',
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

const swiper = new Swiper(".mySwiper", {
 
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
swiper.on('slideChange', function () {
  console.log(swiper.realIndex);

  let active = swiper.realIndex;

  if (active == 0) {
    body.classList.remove(...body.classList);
    body.classList.add('zero');
  } else if (active == 1) {
    body.classList.remove(...body.classList);
    body.classList.add('first');
  } else if (active == 2) {
    body.classList.remove(...body.classList);
    body.classList.add('second');
  } else if (active == 3) {
    body.classList.remove(...body.classList);
    body.classList.add('threed');
  }
});
