"use strict"

const image = document.getElementById("cookie");

image.onclick = function() {
	const clickCountor = document.getElementById("clicker__counter");
	let dateOnClick = new Date().getTime();
	clickCountor.textContent = Number(clickCountor.textContent) + 1;
	if (Number(clickCountor.textContent) % 2 === 0) {
		image.width = 200;
	} else {
	  image.width = 250;
	  };
	  
};


