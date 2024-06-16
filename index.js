const $ = document.querySelector.bind(document),
$$ = document.querySelectorAll.bind(document);

const titleContent = $$('.tablinks'),
boxContent = $$('.box-item');

titleContent.forEach((title, index) => {
const boxed = boxContent[index]
title.onclick = function () {
    $('.tablinks.change').classList.remove('change')
    $('.box-item.changes').classList.remove('changes')
    this.classList.add('change')
    boxed.classList.add('changes')
}
})

window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-15%";
    }
  }
  let OpenNav = function(icon){
      let Nav = document.querySelector("nav");
      if(Nav.style.left == "0%"){
        Nav.style.left = "-100%"
  
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-times")
      } else{
        Nav.style.left = "0%"
        icon.classList.add("fa-times")
        icon.classList.remove("fa-bars")
      }
    }
    var swiper = new Swiper(".slide", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: true,
      interval: 8000,
      grabCursor: true,
      pauseOnMouseEnter: true,
      pagination: {
          el: ".swiper-pagination",
      },
    });

