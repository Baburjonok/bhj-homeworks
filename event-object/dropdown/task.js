"use strict"

let dropdown = document.getElementsByClassName("dropdown__value");

let menuList = document.getElementsByClassName("dropdown__list");

for (let j = 0; j < dropdown.length; j++) {

    let dropdownItem = dropdown.item(j);
    let menuListItem = menuList.item(j);

    function handlerForButton() {
		
		for (let k = 0; k < menuList.length; k++) {
		    let menuListItem = menuList.item(k);
		    if (menuListItem.className.includes('dropdown__list_active') === true) {
	            menuListItem.className = "dropdown__list";
            }
		}
		
		if (menuListItem.className.includes('dropdown__list_active') === true) {
	        menuListItem.className = "dropdown__list";
        } else {
			menuListItem.className = menuListItem.className + " dropdown__list_active";
	    }
	};

    dropdownItem.addEventListener("click", handlerForButton); 

    let menuLink = document.getElementsByClassName("dropdown__item");

    function handlerForLink(eventSubMenu) {
	    eventSubMenu.preventDefault();
		let event = eventSubMenu.target;
		if (menuListItem.className.includes('dropdown__list_active') === true) {
	        dropdownItem.textContent = event.textContent;
        }
	    menuListItem.className = "dropdown__list";
	}

    for (let i = 0; i < menuLink.length; i++) { 
        let menuLinkItem = menuLink.item(i);
		menuLinkItem.addEventListener("click", handlerForLink); 
    }

};