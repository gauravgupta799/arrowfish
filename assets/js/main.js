
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
  