const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () =>{
    navUl.classList.toggle('show');
});

gsap.from(".nav-ul", {y: 15, ease:"bounce", duration:1})
gsap.from(".link", {opacity:0, duration:1, stagger:.6, delay: 1})
gsap.from(".house", {y: 60, duration: 2, opacity:0 })
gsap.from(".btn", {y: 30, delay: 2, duration:2, opacity: 0})
