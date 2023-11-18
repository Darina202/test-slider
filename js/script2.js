const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
