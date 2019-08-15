"use strict"

let menuLink = document.getElementsByClassName("menu__link");

for (let i = 0; i < menuLink.length; i++) {  
	let menuLink1 = menuLink.item(i);
	let parentMenuLink = menuLink1.parentElement;
		
	parentMenuLink.onclick = function() {
		let menuSubMenu = document.getElementsByClassName("menu_sub");
      		
	    for (let j = 0; j < menuSubMenu.length; j++) {	
		    let subMenu = menuSubMenu.item(j);
            let parentSubMenu = subMenu.parentElement;
				
	        if (parentMenuLink == parentSubMenu) {
				
				if (subMenu.className.includes('menu_active') === true) {
					subMenu.className = "menu menu_sub";
					return false;
				} else {
				    subMenu.className = subMenu.className + " menu_active";
					return false;	
				}
			
	        }
	  
	    }
	  
	    
	}
}
