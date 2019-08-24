"use strict"

let fonts = document.getElementsByClassName("font-size");

let textStyle = document.getElementById("book");	
    
function chooserFont(event) {
				
	for (let k = 0; k < fonts.length; k++) {
		let fontItem = fonts.item(k);
		if (fontItem.classList.contains("font-size_active") === true) {
	        fontItem.classList.remove("font-size_active");
        }
	};
		
	if (this.classList.contains("font-size_active") === true) {
		this.classList.remove("font-size_active");
						
	} else {
		if (this.classList.contains("font-size_big") === true) {
			textStyle.className = "book book_fs-big";
		} else if (this.classList.contains("font-size_small") === true) {
			textStyle.className = "book book_fs-small";
		} else {
			textStyle.className = "book";
		}
			
		this.classList.add("font-size_active");
					
	};
			
	event.preventDefault();
				
};
	
for (let j = 0; j < fonts.length; j++) {

    let fontItem = fonts.item(j);
	
	fontItem.addEventListener("click", chooserFont); 
	
};