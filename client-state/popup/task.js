"use strict"

let close = document.getElementsByClassName("modal__close modal__close_times");

let closeItem = close.item(0);

let windowShow = document.getElementById("subscribe-modal");

function closeWindow() {
			
	windowShow.className = "modal";
	document.cookie = 'window=close';
};

window.onload = function() {
	
    let getCookie = (name) => {
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length !== 2) {
	    	windowShow.className = "modal modal_active";
	    };
    }; 

getCookie("window");

}


closeItem.addEventListener('click', closeWindow);