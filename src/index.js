var acc = document.getElementsByClassName('services-item__content');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('close');
  });
}

// var swiper = new Swiper('.mySwiper', {
//   spaceBetween: 30,
//   slidesPerView: 1,
//   hashNavigation: {
//     watchState: true,
//   },

//   navigation: {
//     nextEl: '#button-next',
//     prevEl: '#button-prev',
//   },
// });
// var myswiper = new Swiper('.mySwiper2', {
//   spaceBetween: 30,
//   slidesPerView: 1,
//   hashNavigation: {
//     watchState: true,
//   },

//   navigation: {
//     nextEl: '#swiper-next',
//     prevEl: '#swiper-prev',
//   },
// });
var slider1 = new Swiper('.mySwiper', {
  spaceBetween: 30,
  slidesPerView: 1,
  hashNavigation: {
    watchState: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var slider2 = new Swiper('.slider2', {
  spaceBetween: 30,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
