const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var a=document.querySelector("#container");
var hoverimage=document.querySelector("#hover-image");

a.addEventListener("mouseleave",function(){
    hoverimage.style.display="none";

})
a.addEventListener("mouseenter",function(){
    hoverimage.style.display="block";
})
// var elem1= document.querySelector("#elem1");
// elem1.addEventListener("mouseenter",function(){
//     var image=elem1.getAttribute("data-image");
//     hoverimage.style.backgroundImage=`url(${image})`;

// })



var elems= document.querySelectorAll(".heading");
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image= e.getAttribute("data-image");
        hoverimage.style.backgroundImage=`url(${image})`;
    })
})




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  var loader= document.querySelector("#loader");
  setTimeout(function(){
     loader.style.top="-100%";
  },3500)
  



var navheading= document.querySelector("#menu");
var fullscr= document.querySelector("#full-scr");
var navimg= document.querySelector("#nav img");
var flag=0;

navheading.addEventListener("click",function(){
    if(flag==0){
    fullscr.style.top=0;
    navimg.style.opacity=0;
    flag=1;
    } else{
             fullscr.style.top="-100%"
             navimg.style.opacity=1;
             flag=0;
    }
})
  


