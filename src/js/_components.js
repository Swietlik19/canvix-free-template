import Swiper, { Navigation, Pagination } from '../resources/plugins/swiper/swiper-bundle.min.js';

// Swiper
const reviewsSlider = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.js--reviewsArrowNext',
    prevEl: '.js--reviewsArrowPrev',
  },
  // pagination: {
  //   el: '.js--reviewsPagination',
  //   clickable: true,
  // },
});

// Fixed header
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const headerTop = header.offsetTop;
const headerBottom = headerTop + headerHeight;
const headerFixedClass = 'header--fixed';
let lastScrollTop = 0;
let scrollDirection = 'down';

const headerFixed = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    scrollDirection = 'down';
  } else {
    scrollDirection = 'up';
  }

  if (scrollTop > headerBottom) {
    header.classList.add(headerFixedClass);
  } else {
    header.classList.remove(headerFixedClass);
  }

  if (scrollDirection === 'down' && scrollTop > 30) {
    header.classList.add(headerFixedClass);
  }

  if (scrollDirection === 'up' && scrollTop < 30) {
    header.classList.remove(headerFixedClass);
  }

  lastScrollTop = scrollTop;
};

window.addEventListener('scroll', headerFixed);
window.addEventListener('load', headerFixed());

// Burger
const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('menu--active');
});
