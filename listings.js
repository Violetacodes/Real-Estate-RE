const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".parentone");
const house = document.querySelector(".houseone");


searchInput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
    divs.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = 'none');
    })
})

const back = document.querySelector("#back");
const next = document.querySelector("#next");
const photos = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "house1.jpeg"];

let i=0;
next.addEventListener("click", () => {
    i++;
    if(i > photos.length - 1) {
        i = 0;
    }
    document.querySelector(".houseone").src = photos[i];
} )

back.addEventListener("click", () =>{
    i--;
    if(i < 0) {
        i = photos.length - 1;
    }
    document.querySelector(".houseone").src = photos[i];
})

const housetwo = document.querySelectorAll(".housetwo");
const backtwo = document.querySelector("#backtwo");
const nexttwo = document.querySelector("#nexttwo");
const photostwo = ["14.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg"];

let k=0;
nexttwo.addEventListener("click", () => {
    k++;
    if(k > photostwo.length - 1) {
        k = 0;
    }
    document.querySelector(".housetwo").src = photostwo[k];
} )

backtwo.addEventListener("click", () =>{
    k--;
    if(k < 0) {
        k = photostwo.length - 1;
    }
    document.querySelector(".housetwo").src = photostwo[k];
})

const housethree = document.querySelectorAll(".housethree");
const backthree = document.querySelector("#backthree");
const nextthree = document.querySelector("#nextthree");
const photosthree = ["11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg"];

let a=0;
nextthree.addEventListener("click", () => {
    a++;
    if(a > photosthree.length - 1) {
        a = 0;
    }
    document.querySelector(".housethree").src = photosthree[a];
} )

backthree.addEventListener("click", () =>{
    a--;
    if(a < 0) {
        a = photosthree.length - 1;
    }
    document.querySelector(".housethree").src = photosthree[a];
})

const housefour = document.querySelectorAll(".housefour");
const backfour = document.querySelector("#backfour");
const nextfour = document.querySelector("#nextfour");
const photosfour = ["24.jpeg", "25.jpeg", "13.jpeg", "15.jpeg", "11.jpeg"];

let c=0;
nextfour.addEventListener("click", () => {
    c++;
    if(c > photosfour.length - 1) {
        c = 0;
    }
    document.querySelector(".housefour").src = photosfour[c];
} )

backfour.addEventListener("click", () =>{
    c--;
    if(c < 0) {
        c = photosfour.length - 1;
    }
    document.querySelector(".housefour").src = photosfour[c];
})

const housefive = document.querySelectorAll(".housefive");
const backfive = document.querySelector("#backfive");
const nextfive = document.querySelector("#nextfive");
const photosfive = ["21.jpeg", "23.jpeg", "22.jpeg", "3.jpeg", "2.jpeg"];

let d=0;
nextfive.addEventListener("click", () => {
    d++;
    if(d > photosfive.length - 1) {
        d = 0;
    }
    document.querySelector(".housefive").src = photosfive[d];
} )

backfive.addEventListener("click", () =>{
    d--;
    if(d < 0) {
        d = photosfive.length - 1;
    }
    document.querySelector(".housefive").src = photosfive[d];
})

const housesix = document.querySelectorAll(".housesix");
const backsix  = document.querySelector("#backsix");
const nextsix  = document.querySelector("#nextsix");
const photossix  = ["25.jpeg", "24.jpeg", "1.jpeg", "5.jpeg", "13.jpeg"];

let z=0;
nextsix.addEventListener("click", () => {
    z++;
    if(z > photossix.length - 1) {
        z = 0;
    }
    document.querySelector(".housesix").src = photossix[z];
} )

backsix.addEventListener("click", () =>{
    z--;
    if(z < 0) {
        z = photossix.length - 1;
    }
    document.querySelector(".housesix").src = photossix[z];
})

const house7 = document.querySelectorAll(".house7");
const back7 = document.querySelector("#back7");
const next7 = document.querySelector("#next7");
const photos7 = ["14.jpeg", "23.jpeg", "21.jpeg", "2.jpeg", "6.jpeg"];

let f=0;
next7.addEventListener("click", () => {
    f++;
    if(f > photos7.length - 1) {
        f = 0;
    }
    document.querySelector(".house7").src = photos7[f];
} )

back7.addEventListener("click", () =>{
    f--;
    if(f < 0) {
        f = photos7.length - 1;
    }
    document.querySelector(".house7").src = photos7[f];
})

const houseeight = document.querySelectorAll(".houseeight");
const backeight = document.querySelector("#backeight");
const nexteight = document.querySelector("#nexteight");
const photoseight = ["25.jpeg", "22.jpeg", "14.jpeg", "15.jpeg", "2.jpeg"];

let l=0;
nexteight.addEventListener("click", () => {
    l++;
    if(l > photoseight.length - 1) {
        l = 0;
    }
    document.querySelector(".houseeight").src = photoseight[l];
} )

backeight.addEventListener("click", () =>{
    l--;
    if(l < 0) {
        l = photoseight.length - 1;
    }
    document.querySelector(".houseeight").src = photoseight[l];
})

const housenine = document.querySelectorAll(".housenine");
const backnine = document.querySelector("#backnine");
const nextnine = document.querySelector("#nextnine");
const photosnine = ["1.jpeg", "3.jpeg", "12.jpeg", "24.jpeg", "5.jpeg"];

let m=0;
nextnine.addEventListener("click", () => {
    m++;
    if(m > photosnine.length - 1) {
        m = 0;
    }
    document.querySelector(".housenine").src = photosnine[m];
} )

backnine.addEventListener("click", () =>{
    m--;
    if(m < 0) {
        m = photosnine.length - 1;
    }
    document.querySelector(".housenine").src = photosnine[m];
})

gsap.from(".listingstitle" ,{x:-900, duration:2, delay: .4} )
gsap.from(".parentone" ,{y:600, duration:1, delay:1, opacity:0} )