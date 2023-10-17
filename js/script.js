// Slider Swiper
const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.body-main-block__arrow.swiper-button-next',
      prevEl: '.body-main-block__arrow.swiper-button-prev',
   },
});


// Tabs

const tabNavItems = document.querySelectorAll(".tabs-deals__button");
const tabItems = document.querySelectorAll(".item-tabs");

document.addEventListener("click", function (event) {
   const targetElemenet = event.target;
   let currentActiveIndex = null;
   let newActiveIndex = null;
   if (targetElemenet.closest(".tabs-deals__button")) {
      tabNavItems.forEach((tabNavItem, index) => {
         if(tabNavItem.classList.contains("active")) {
            currentActiveIndex = index;
            tabNavItem.classList.remove("active");
         }
         if(tabNavItem === targetElemenet){
            newActiveIndex = index;
         }
      });
      targetElemenet.classList.add("active");
      tabItems[currentActiveIndex].classList.remove("active");
      tabItems[newActiveIndex].classList.add("active");
   }
});