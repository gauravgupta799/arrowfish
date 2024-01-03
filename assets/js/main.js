
window.onload = function() {
  const loader = document.querySelector(".loader-container");
  loader.style.transform = "translateY(-100%)";
}

//====== Sticky header start ======
function toggleHeaderSticky(scrollY){
    const header = document.querySelector(".header");
    if (scrollY > 20){
      header.classList.add("sticky");
    }else{
      header.classList.remove("sticky");
    }
  }
  window.addEventListener("scroll",()=>{
    const scrollY = window.scrollY;
    toggleHeaderSticky(scrollY);
  });
  //====== Sticky header end ======

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(function (item) {
      const toggleButton = item.querySelector('.faq-toggle');
      const questionSection = item.querySelector('.faq-question');
      const answerSection = item.querySelector('.faq-answer');
  
      questionSection.addEventListener('click', function (){
        answerSection.classList.toggle('show-answer');
        questionSection.classList.toggle("active");
        toggleButton.textContent = answerSection.classList.contains('show-answer') ? '-' : '+';
      });
    });
});
  
// swiper
var swiper = new Swiper(".steps-swiper", {
  slidesPerView: 1.4,
  // centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  autoplay:{
    delay:3000,
  },
  breakpoints:{
    576:{
      slidesPerView: 2.2,
    },
    1024:{
      slidesPerView: 3.2,
    },
    1280:{
      slidesPerView: 4.2,
    },
  }
});