// let offset = 0;
// let widthCard;
// const sliderLine = document.querySelector(".slider-list");

// document.querySelector(".slider-next-t").addEventListener("click", function () {
//   widthCard = document.querySelector(".slider-item").offsetWidth;
//   offset = offset + widthCard + 16;
//   if (offset > widthCard * 2 + 16) {
//     offset = 0;
//   }
//   sliderLine.style.left = -offset + "px";
// });

// document.querySelector(".slider-prev-t").addEventListener("click", function () {
//   offset = offset - (widthCard + 16);
//   if (offset < 0) {
//     offset = widthCard * 2 - 16;
//   }
//   sliderLine.style.left = -offset + "px";
// });

const cards = document.querySelectorAll(".slider-item");
const sliderLine = document.querySelector(".slider-list");
let count = 0;
let width;
let widthCard;

function init() {
  console.log("resize");
  width = document.querySelector(".wrapper-slider").offsetWidth;
  console.log(width);
  sliderLine.style.width = width + "px";
  widthCard = document.querySelector(".slider-item").offsetWidth;
  console.log(widthCard);
  cards.forEach((item) => {
    console.log((item.style.width = widthCard + "px"));
    item.style.height = "auto";
  });
  rollSlider();
}

init();
window.addEventListener("resize", init);

document.querySelector(".slider-next-t").addEventListener("click", function () {
  count++;
  if (count >= cards.length - 2) {
    count = 0;
  }
  rollSlider();
});

document.querySelector(".slider-prev-t").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = cards.length - 3;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * widthCard + "px)";
}
