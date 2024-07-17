let th_1 = document.querySelector(".th_1");
let th_2 = document.querySelector(".th_2");
let th_3 = document.querySelector(".th_3");
let dropdown = document.querySelector(".dropdown ul li a");
let dumi_input = document.querySelector(".dumi_input");
let search_box_back_shadow = document.querySelector(".search_box_back_shadow");
let search_input_box = document.querySelector(".search_input_box");
let suggestion_container = document.querySelector(".suggestion_container");
let mobile_search = document.querySelector("#mobile_search");
let element = document.body;

th_1.addEventListener("click",()=>{
   element.dataset.bsTheme = "dark";
})
th_3.addEventListener("click",()=>{
   element.dataset.bsTheme = "light";
})

dumi_input.addEventListener("click",()=>{
   search_box_back_shadow.classList.toggle("active_search");
   search_box_back_shadow.style.zIndex = "999";
   search_input_box.classList.toggle("active_search_m");
   search_input_box.style.zIndex = "999";
   suggestion_container.classList.toggle("active_search");
   suggestion_container.style.zIndex = "999";
})
search_box_back_shadow.addEventListener("click",()=>{
   search_box_back_shadow.classList.toggle("active_search");
   search_input_box.classList.toggle("active_search_m");
   suggestion_container.classList.toggle("active_search");
})
mobile_search.addEventListener("click",()=>{
   search_box_back_shadow.classList.toggle("active_search");
   search_box_back_shadow.style.zIndex = "999";
   search_input_box.classList.toggle("active_search_m");
   search_input_box.style.zIndex = "999";
   suggestion_container.classList.toggle("active_search");
   suggestion_container.style.zIndex = "999";
})