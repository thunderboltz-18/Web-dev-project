// // const slide= document.querySelectorAll(".slide")
// // var counter =0;

// // slide.forEach(
// //     (slide,index)=>{
// //         slide.style.left=`${index*100}%`
// //     }
// // )
// // const slideImage=()=>{

// //     Slideshow.forEach(
// //         (slide)=>
// // {
// //     slide.style.transform=`translateX(-${counter*100}%)`
// // }    )
// // }
// // const
// let slideIndex = 0;
// const slides = document.querySelectorAll('.slide');
// let autoForwardInterval;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.style.transform = `translateX(${-100 * index}%)`;
//   });
// }

// function changeSlide(direction) {
//   slideIndex = (slideIndex + direction + slides.length) % slides.length;
//   showSlide(slideIndex);
// }

// function autoForward() {
//   clearInterval(autoForwardInterval); // Clear any existing intervals
//   autoForwardInterval = setInterval(() => {
//     changeSlide(1);
//   }, 0.2); // Change slide every 2 seconds
// }

// document.addEventListener('DOMContentLoaded', () => {
//   showSlide(slideIndex);
// });

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});