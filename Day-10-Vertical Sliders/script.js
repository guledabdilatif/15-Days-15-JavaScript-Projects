const upArrow = document.getElementById("up-arrow")
const downArrow = document.getElementById("down-arrow")
const slide = document.getElementById("slide");
let x = 0;
upArrow.addEventListener('click', () => {
    if (x > '-900') {
        x = x - 300;
        slide.style.top = x + "px";
    }
})
downArrow.addEventListener('click', () => {
    if (x < '0') {
        x = x + 300;
        slide.style.top = x + "px";
    }
})