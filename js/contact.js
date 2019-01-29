// 7. Keydown
const firstName = document.querySelector(".first");
firstName.addEventListener("keydown", e => console.log("Are we there yet?"))

// 8. Select
firstName.addEventListener("select", e => e.target.style.color = "red")

// 9. Copy
firstName.addEventListener("copy", e => alert("You've copied text!"))

// 10. Cut
firstName.addEventListener("cut", e => alert("You've cut text!"))
