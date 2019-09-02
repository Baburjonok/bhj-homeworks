"use strict"

let form = document.getElementById("form");

let progress = document.getElementById("progress");

form.addEventListener("submit", (e) => {
	e.preventDefault();
    let formData = new FormData(form);
	let request = new XMLHttpRequest();
	
    request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
   
    request.upload.onprogress = function(event) {
		progress.value = event.loaded / event.total;
    }
		
	request.upload.onload = function() {
        alert("Данные полностью загружены на сервер!");
    }

	request.send(formData);

});