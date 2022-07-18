//acordeon for services section
var acc = document.getElementsByClassName('services-item__content');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('close');
  });
}

// slider
var slider1 = new Swiper('.mySwiper', {
  spaceBetween: 30,
  slidesPerView: 1,
  hashNavigation: {
    watchState: true,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
var slider1 = new Swiper('.mySwiper3', {
  spaceBetween: 25,
  slidesPerView: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var slider2 = new Swiper('.slider2', {
  spaceBetween: 30,
  slidesPerView: 1,

  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// open/close header-menu mobile version

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

function formValidation() {
  var uid = document.registration.userid;
  var uname = document.registration.username;

  var uemail = document.registration.email;

  if (userid_validation(uid, 5, 12)) {
    if (passid_validation(passid, 7, 12)) {
      if (allLetter(uname)) {
        if (countryselect(ucountry)) {
          if (ValidateEmail(uemail)) {
          }
        }
      }
    }
  }
  return false;
}
//validating email
function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    document.form1.text1.focus();

    return true;
  } else {
    alert('Invalid email address!');

    document.form1.text1.focus();

    return false;
  }
}
