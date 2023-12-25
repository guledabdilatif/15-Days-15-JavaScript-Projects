const controller = document.querySelector(".controller")
const header = document.querySelector(".header")
const navigation = document.querySelector(".navigation")



// Styling with css
controller.style.background = "red"
controller.style.width = "60px"
controller.style.height = "60px"
controller.style.position = "absolute"
controller.style.top = "-10px"
controller.style.left = "-20px"
controller.style.borderRadius = "50%";
controller.style.cursor = "pointer";

controller.addEventListener("click", ()=>{
header.classList.toggle("open-nav");
navigation.classList.toggle("close-nav");

})