gsap.to(".about", 
{text: "About us ☑️", 
duration:1,  
ease: "power1.in", 
yoyo:true,
})

gsap.from(".real", {y:100, delay:1, opacity:0, duration:2})