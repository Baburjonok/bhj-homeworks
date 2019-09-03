"use strict"

let editor = document.getElementById("editor");

function addLocalStorage(event) {
			
	localStorage.text = editor.value;
	
};

window.onload = function() {
	
	if (localStorage.text === undefined) {
		
		editor.value = "";
		
	} else {
   
    editor.value = localStorage.text;
     
	}; 
};

document.addEventListener('keyup', addLocalStorage);


