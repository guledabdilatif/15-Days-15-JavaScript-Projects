const header = document.querySelector('.header');
const preloader = document.getElementById('preloader');

function Createheader() {
    const div = document.createElement("div");
    div.classList.add('header');
    div.innerHTML = `<div className="header-right">
<h1>"Discover Paradise: Embark on Unforgettable Adventures Across Continents"</h1>
<p>Travel Brilliance: Crafting Memories in Every Expedition.</p>
<button>Get Started</button>
</div>
<img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" alt="">`
    header.appendChild(div);
   }
Createheader();

window.addEventListener('load', function () {
    preloader.style.display = 'none';

})
