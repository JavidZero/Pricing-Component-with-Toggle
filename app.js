const btn = document.querySelector(".container .header .header-plans .switch");
const cards = document.querySelector(".container .main");

btn.addEventListener("click", ()=>{
    btn.classList.toggle("swt");
    cards.classList.toggle("swt");
});