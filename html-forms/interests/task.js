"use strict"

let subCheckbox = document.getElementsByClassName("interests interests_active");

for (let i = 0; i < subCheckbox.length; i++) {
    let subCheckboxItem = subCheckbox.item(i);
    let subCheckboxPerents = subCheckboxItem.closest(".interest");
    let checkbox = subCheckboxPerents.firstElementChild.firstElementChild;
    	
	function changeCheckbox() {
		let subCheckboxes = subCheckboxItem.children;
		
	    for (let j = 0; j < subCheckboxes.length; j++) {
		    let subCheckboxesItem = subCheckboxes.item(j);
			let a = subCheckboxesItem.firstElementChild.firstElementChild;
			a.checked = checkbox.checked;
		}

	}

checkbox.addEventListener('change', changeCheckbox);

}