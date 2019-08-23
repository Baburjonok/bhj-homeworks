"use strict"

let menu = document.getElementsByClassName("tab");

let content = document.getElementsByClassName("tab__content");

for (let j = 0; j < menu.length; j++) {

    let menuItem = menu.item(j);
	
    
    function handlerForMenu(eventMenuClick) {
		
		for (let k = 0; k < menu.length; k++) {
		    let menuItem = menu.item(k);
		    if (menuItem.className.includes("tab_active") === true) {
	            menuItem.className = "tab";
            }
		}
		
		let event = eventMenuClick.target;
		if (event.className.includes("tab_active") === false) {
	        event.className = event.className + " tab_active";
        }
		
		for (let i = 0; i < menu.length; i++) {
			let contentItem = content.item(i);
			if (i === j && contentItem.className.includes("tab__content_active") === false) {
	            contentItem.className = contentItem.className + " tab__content_active";
            } else {
			    contentItem.className = "tab__content";
		    }
		}
	};
	
	menuItem.addEventListener("click", handlerForMenu); 
	
};
  