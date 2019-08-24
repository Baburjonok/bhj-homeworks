"use strict"

let winds = document.querySelectorAll(".reveal");

for (let i = 0; i < winds.length; i++) {
	let wind = winds.item(i);
	function handler() {
	    let viewportHeight = window.innerHeight;
		let elementTop = wind.getBoundingClientRect().top;
	    if (wind.classList.contains("reveal") === true && elementTop < viewportHeight) {
            wind.classList.add("reveal_active");
	    } else {
			wind.classList.remove("reveal_active");
		};
	}

   window.addEventListener("scroll", handler); 
}

