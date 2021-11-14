gsap.to(".about", 
{
    text: "Find your agent ⭐⭐⭐⭐⭐" , 
    duration:2,
    ease:"power1.in",
    yoyo:true,
    delay:0.5
})

gsap.from("p", {
    y:-100, duration:1, delay:0.5, ease:"bounce"
})
