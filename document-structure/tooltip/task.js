"use strict"

let link = document.getElementsByClassName("has-tooltip");


for (let i = 0; i < link.length; i++) {

	let linkItem = link.item(i);

    function callPrompt(eventClick) {
	
	    eventClick.preventDefault();	
	
	    let event = eventClick.target;
		let element = document.createElement('div');
		
		let elementForDelete = document.getElementsByClassName("tooltip");
		let elementForDeleteItem = elementForDelete.item(0);
		
		let parentOfElementForDelete = document.getElementsByTagName("body");
		let parentOfElementForDeleteItem = parentOfElementForDelete.item(0);
			
		linkItem.insertAdjacentHTML("afterEnd", `<div class='tooltip tooltip_active'>${event.title}</div>`);
		
		if (elementForDeleteItem !== null ) {
			parentOfElementForDeleteItem.removeChild(elementForDeleteItem);
		}
	}
		
	linkItem.addEventListener('click', callPrompt);
}