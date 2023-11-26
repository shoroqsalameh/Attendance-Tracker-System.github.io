
document.addEventListener('DOMContentLoaded', function (){
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup:3,
    loop: true,
    loopFillGroupWithBlank:true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:'true',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

        effect: 'slide', // Choose the animation effect (e.g., 'slide', 'fade', 'cube', 'coverflow')
        grabCursor: true, // Change the cursor to a hand when hovering over the swiper
        centeredSlides: true, // Center the active slide

        // Autoplay
        autoplay: {
            delay: 3000, // Set the delay between slides (in milliseconds)
            disableOnInteraction: false, // Continue autoplay even when user interacts with the swiper
        },
    breakpoints:{
        0:{
          slidesPerView:1,
        }

        ,
        768: {
          slidesPerView: 2, // Adjust the number of slides per view on smaller screens
          spaceBetween: 30, // Adjust the space between slides on smaller screens
        }
        ,
        520:{
          slidesPerView:2,
        }

        ,
        1024: {
          slidesPerView: 3, // Adjust the number of slides per view on larger screens
          spaceBetween: 40, // Adjust the space between slides on larger screens
      },
        
        950:{
          slidesPerView:3,
        }
    }
  })});
  fetch('news-data.json').then((data) =>{
    return data.json();
}).then((data) => {
let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');
let img4=document.getElementById('img4');
let img5=document.getElementById('img5');
let img6=document.getElementById('img6');
let img7=document.getElementById('img7');
let img8=document.getElementById('img8');
let img9=document.getElementById('img9');

let p1 =document.getElementById('p1');
let p2 =document.getElementById('p2');
let p3 =document.getElementById('p3');
let p4 =document.getElementById('p4');
let p5 =document.getElementById('p5');
let p6 =document.getElementById('p6');
let p7 =document.getElementById('p7');
let p8 =document.getElementById('p8');
let p9 =document.getElementById('p9');
img1.src=data.news[0].image;
img2.src=data.news[1].image;
img3.src=data.news[2].image;
img4.src=data.news[3].image;
img5.src=data.news[4].image;
img6.src=data.news[5].image;
img7.src=data.news[6].image;
img8.src=data.news[7].image;
img9.src=data.news[8].image;
p1.innerHTML=data.news[0].description;
p2.innerHTML=data.news[1].description;
p3.innerHTML=data.news[2].description;
p4.innerHTML=data.news[3].description;
p5.innerHTML=data.news[4].description;
p6.innerHTML=data.news[5].description;
p7.innerHTML=data.news[6].description;
p8.innerHTML=data.news[7].description;
p9.innerHTML=data.news[8].description;


})


  

