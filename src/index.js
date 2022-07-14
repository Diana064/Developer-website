// var item = document.getElementsByClassName('services-item');
// var button = document.querySelectorAll('.services-item__button');
// for (i = 0; i < button.length; i++) {
//   button[i].addEventListener('click', toggleItem, false);
//   console.log(button);
// }
// function toggleItem() {
//   var itemClass = this.parentNode.className;
//   console.log(button);

//   for (i = 0; i < item.length; i++) {
//     item[i].className = 'services-item close';
//     if (itemClass == 'services-item close') {
//       this.parentNode.className = 'services-item open';
//     }
//   }
// }

// let accButtons = document.getElementsByClassName('services-item__button');
// let panels = document.getElementsByClassName('services-item__content');

// for (let i = 0; i < accButtons.length; i++) {
//   accButtons[i].onclick = function () {
//     for (let x = 0; x < panels.length; x++) {
//       panels[x].classList.remove('close');
//     }
//     this.nextElementSibling.classList.toggle('close');
//   };
// }
// var acc = document.getElementsByClassName('services-item__button');
// for (let i = 0; i < acc.length; i++) {
//   acc[i].onclick = function () {
//     for (j = 0; j < acc.length; j++) {
//       if (acc[j] !== this) {
//         acc[j].classList.remove('active');
//         acc[j].nextElementSibling.classList.remove('show');
//       } else {
//         this.classList.toggle('active');
//         this.nextElementSibling.classList.toggle('show');
//       }
//     }
//   };
// }
// let acc = document.querySelectorAll('.services-item__button');
// let panel = document.querySelectorAll('.services-item__content');
// panel[0].classList.add('show');

// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener('click', e => {
//     let show = document.querySelectorAll('.close');
//     show.length >= 1
//       ? (show[0].classList.remove('show'),
//         e.target.nextElementSibling.classList.add('close'))
//       : e.target.nextElementSibling.classList.add('show');
//   });
// }
var acc = document.getElementsByClassName('services-item__button');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('close');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  slidesPerView: 1,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper('.mySwiper3', {
  spaceBetween: 30,
  slidesPerView: 2,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// var swiper = new Swiper('.mySwiper2', {
//   spaceBetween: 50,
//   slidesPerView: 1,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   history: {
//     key: 'slide',
//   },
// });

// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
// });
// var swiper = new Swiper('.mySwiper', {
//   slidesPerView: 3,
//   centeredSlides: true,
//   loop: true,
//   direction: 'vertical',
//   spaceBetween: 70,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
