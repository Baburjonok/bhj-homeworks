"use strict"

let chat = document.getElementsByClassName("chat-widget");

let chatItem = chat.item(0);

let callChat = document.getElementsByClassName("chat-widget__side-text");

let callChatItem = callChat.item(0);

let messageString = document.getElementById("chat-widget__input");

let i;

let messagesBot = [
    "Добрый день!",
    "Сейчас все операторы заняты.",
    "Вы задаете странные вопросы.",
    "Вы мне не нравитесь.",
    "До свидания!"
]

function callWindowCaht() {
	if (chatItem.classList.contains("chat-widget_active") === false) {
	    chatItem.classList.add("chat-widget_active");
    }
}

callChatItem.addEventListener("click", callWindowCaht); 

function keydownEnter(event) {
	if (event.code == "Enter") {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let time;
		if (minutes < 10) {
			time = `${hours}:0${minutes}`;
		} else {
			time = `${hours}:${minutes}`;
		}
				
			
		const messages = document.querySelector( '.chat-widget__messages' );
		messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${time}</div>
                <div class="message__text">
                    ${messageString.value}
                </div>
            </div>
        `;
		
		messageString.value = "";
			
		i = Math.floor(Math.random() * (messagesBot.length - 1));
		
		messages.innerHTML += `
            <div class="message">
                <div class="message__time">${time}</div>
                <div class="message__text">
                    ${messagesBot[i]}
                </div>
            </div>
        `;
			
	} 
};

document.addEventListener('keydown', keydownEnter);