"use strict"

let images = document.getElementsByClassName("slider__item"); 

let navigatorNextAll = document.getElementsByClassName("slider__arrow slider__arrow_next");

let navigatorNext = navigatorNextAll.item(0);

navigatorNext.onclick = function() {
	for (let i = 0; i < images.length - 1; i++) {
	    let image = images.item(i);
		let image2 = images.item(i + 1);
		
	    if (image.className.includes('item_active') === true) {
		    image.className = "slider__item";
			image2.className = "slider__item slider__item_active";
			break;
	    } 
	
	    if (i === images.length - 2) {
			image = images.item(0);
		    image.className = "slider__item slider__item_active";
			image2 = images.item(i + 1);
		    image2.className = "slider__item";
		}
	}
}

let navigatorPrevAll = document.getElementsByClassName("slider__arrow slider__arrow_prev");  

let navigatorPrev = navigatorPrevAll.item(0);
	
navigatorPrev.onclick = function() {
	for (let i = 1; i < images.length; i++) {
	    let image3 = images.item(i);
		let image4 = images.item(i - 1);
	
	    if (image3.className.includes('item_active') === true) {
		    image3.className = "slider__item";
		    image4.className = "slider__item slider__item_active";
								
		    break;
	    } 
	
	    if (i === images.length - 1) {
			let image5 = images.item(0);
			image5.className = "slider__item";
			let image6 = images.item(i);
			image6.className = "slider__item slider__item_active";
		}
	}
}

