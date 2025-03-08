// script.js
let currentIndex = 0;
const intervalTime = 5000;

const images = document.querySelectorAll(".slider-image");
const circles = document.querySelectorAll(".slider-button-circle-span");

images[currentIndex].classList.add("slider-image-active");
circles[currentIndex].classList.add("slider-button-circle-span-active");

document.getElementById("right").addEventListener("click", () => {
  changeSlide(-1);
});

document.getElementById("left").addEventListener("click", () => {
  changeSlide(1);
});

// افزودن رویداد کلیک برای دایره‌ها
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    currentIndex = index; // به دایره کلیک شده بروید
    updateSlides(); // به‌روزرسانی تصویر و دایره فعال
  });
});

// تابع تغییر اسلاید
function changeSlide(direction) {
  images[currentIndex].classList.remove("slider-image-active");
  circles[currentIndex].classList.remove("slider-button-circle-span-active");

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1; // به آخرین تصویر برگرد
  } else if (currentIndex >= images.length) {
    currentIndex = 0; // به اولین تصویر برگرد
  }

  updateSlides(); // به‌روزرسانی تصویر و دایره فعال
}

// تابع به‌روزرسانی تصاویر و دایره‌ها
function updateSlides() {
  images.forEach((img, index) => {
    img.classList.remove("slider-image-active"); // حذف کلاس active از همه تصاویر
    circles[index].classList.remove("slider-button-circle-span-active"); // حذف کلاس active از همه دایره‌ها
  });

  images[currentIndex].classList.add("slider-image-active"); // اضافه کردن کلاس active به تصویر فعلی
  circles[currentIndex].classList.add("slider-button-circle-span-active"); // اضافه کردن کلاس active به دایره فعلی
}

setInterval(() => {
  changeSlide(1);
}, intervalTime);

// Product slider
const rightMoveButton = document.getElementById("haragi-slider-right");
const leftMoveButton = document.getElementById("haragi-slider-left"); // Add your left button ID here
const slider = document.getElementById("hargi-slider-gal");
let position = 0; // Initialize position

rightMoveButton.addEventListener("click", () => {
  productSlider(80); // Move right
});

leftMoveButton.addEventListener("click", () => {
  productSlider(-80); // Move left
});

function productSlider(moveAmount) {
  // Update position based on moveAmount
  const newPosition = position + moveAmount;

  // Check bounds
  if (newPosition <= 0 && newPosition >= -200) {
    // Adjust bounds as needed
    position = newPosition; // Update position
    slider.style.left = -position + "%"; // Update the slider position
  } else {
    console.log("Cannot move further in that direction");
  }
}
