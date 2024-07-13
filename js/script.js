AOS.init(
 {once:true}
);

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      loop:true
    },
    320: {
      loop:false
    },
  }
});


 let swiper2 = new Swiper(".slider2 .mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
  //  autoplay:{
  //       delay: 3000
  //  },
   centeredSlides: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
     },
   breakpoints: {
     768: {
       slidesPerView: 3,
       centeredSlides: false,
     },
     320: {
       slidesPerView: 1,
       centeredSlides: false,
     },
   },
 })




const bars = document.querySelector('.fa-bars')
const hiddenMenu = document.querySelector("#hidden-nav")
const galery = document.querySelector("#hidden-galery")
const hamburger = gsap.timeline({ paused: true });


function openGalery() {
  galery.classList.toggle('hide-galery')
}



function openMenu() {
  hiddenMenu.classList.toggle('translate');

}

gsap.set(["#top-line", "#bottom-line"], {
	transformOrigin: "center"
});

hamburger
	.to("#top-line", {
		y: 10,
		ease: "back.in(1.4)"
	})
	.to(
		"#bottom-line",
		{
			y: -10,
			ease: "back.in(1.4)"
		},
		0
	)
	.set("#middle-line", {
		opacity: 0
	})
	.to("#top-line", {
		rotate: 45,
		ease: "back.out(1.4)"
	})
	.to(
		"#bottom-line",
		{
			rotate: -45,
			ease: "back.out(1.4)"
		},
		"<"
	);

const burger = document.querySelector("#hamburger");

burger.addEventListener("click", (e) => {
	hamburger.play();
});
