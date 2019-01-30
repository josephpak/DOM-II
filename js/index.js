
// Navigation
const navLinks = document.querySelectorAll(".nav-link")

// 1. Mouseover
navLinks.forEach(element => element.addEventListener("mouseover", e => {
    e.target.style.fontWeight = "bold";
    e.target.style.fontVariant = "small-caps";
}))

// 2. Mouseout
navLinks.forEach(element => element.addEventListener("mouseout", e => {
    e.target.style.fontWeight = "normal";
    e.target.style.fontVariant = "normal";
}))

// Logo Header
const busImg = document.querySelector(".fun-bus");

busImg.addEventListener("mouseover", e => e.target.style.cursor = "pointer");

// 3. Dclclick
busImg.addEventListener("dblclick", e => {
    e.target.style.maxWidth  = "50%";
    e.stopPropagation();
})

// 4. Click
busImg.addEventListener("click", e => {
    e.target.style.maxWidth  = "100%";
    e.stopPropagation();
})

// Nav Container
const body = document.querySelector("body");

// 5. Wheel
// body.addEventListener("wheel", e => {
//     e.target.style.backgroundColor = "purple";
//     e.target.style.color = "white";
// })

// All Images
const imgs = document.querySelectorAll("img");

// 6. Drag
imgs.forEach(element => element.addEventListener("drag", e => {
    e.target.style.display = "none";
    e.stopPropagation();
}));

// 7. Keydown (see contact.js)

// 8 Select (see contact.js)

// 9. Copy (see contact.js)

// 10. Cut (see contact.js)

navLinks.forEach(element => element.addEventListener("click", e => {
    e.preventDefault();
}))

const buttons = document.querySelectorAll(".btn")

buttons.forEach(element => element.addEventListener("mouseout", e => {
    TweenMax.to(e.currentTarget, 1, {
        width:200,
        ease:Bounce.easeOut
    });
}))

buttons.forEach(element => element.addEventListener("mouseover", e => {
    TweenMax.to(e.currentTarget, 1, {
        width:150,
        ease:Bounce.easeOut
    });
}))