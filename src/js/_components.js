import Swiper, { Navigation, Pagination } from '../resources/plugins/swiper/swiper-bundle.min.js';

// Подключение свайпера
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
