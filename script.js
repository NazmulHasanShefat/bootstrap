let th_1 = document.querySelector(".th_1");
let th_2 = document.querySelector(".th_2");
let th_3 = document.querySelector(".th_3");
let dropdown = document.querySelector(".dropdown ul li a");
let element = document.body;

th_1.addEventListener("click",()=>{
   element.dataset.bsTheme = "dark";
})
th_3.addEventListener("click",()=>{
   element.dataset.bsTheme = "light";
})