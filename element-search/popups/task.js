"use strict"

const showFirstWindow = document.getElementById("modal_main");  //Находим первое окно
showFirstWindow.className = showFirstWindow.className + " modal_active";  //Делаем первое окно активным

const closeAll = document.getElementsByClassName("modal__close modal__close_times");  //Находим все закрывающие элементы


for (let i = 0; i < closeAll.length; i++) {  
	let closeWindow = closeAll.item(i);
	closeWindow.onclick = function() {  
	     modal_main.className = "modal";
	     modal_success.className = "modal";
    }
}

const button = document.getElementsByClassName("show-success");    //Находим кнопку
let buttonWindow = button.item(0);

const showSecondWindow = document.getElementById("modal_success");   //Находим второе окно

buttonWindow.onclick = function() {
	modal_success.className = modal_main.className + " modal_active";   //Делаем второе окно активным при нажатии на кнопку
	showFirstWindow.className = "modal";
}


