import { cardItems } from './cards';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const myList = document.querySelector('.slider-list');

// const array = [
//   {
//     code: 'Код: 00000001',
//     title: 'Аниме 1',
//   },
//   { code: 'Код: 00000002', title: 'Аниме 2' },
//   { code: 'Код: 00000003', title: 'Аниме 3' },
// ];
// function createCards(arr) {
//   return arr
//     .map(
//       ({ code, title }) => `
//          <li class="slider-item">
//                 <h3 class="slider-code">${code}</h3>
//                            <p class="title-slider">${title}</p>
//               </li>
//   `
//     )
//     .join('');
// }
myList.insertAdjacentHTML('beforeend', createCards(cardItems));

function createCards(arr) {
  return arr
    .map(
      ({ code, picture, title, priceNow, priceBefore }) => `
       <div class="slider-item swiper-slide">
              <h3 class="slider-code">${code}</h3>
              // <img class="box-img" src=${picture} alt="" width="360" />

              <p class="title-slider">${title}</p>

              <div class="price-offer">
                <p class="price-now-offer">${priceNow}</p>
                <p class="price-before-offer">${priceBefore}</p>
              </div>
              <button type="submit" class="menu-button-offer">"Замовити"</button>
            </div>
`
    )
    .join('');
}
