"use strict"

let question = document.getElementById("poll__title");

let buttonAnswers = document.getElementById("poll__answers");

let buttonAnswer = document.getElementsByClassName("poll__answer");


let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status == 200) {
	   let answerJSON = xhr.responseText;
		let answerObject = JSON.parse(answerJSON);
		let data = answerObject.data;
		let title = data.title;
		let answers = data.answers;
		question.innerText = title;
		for (let i = 0; i < answers.length; i++) {
						
			buttonAnswers.innerHTML += `
                <button class="poll__answer">
                    ${answers[i]}
				</button>
		    `;
		}
		
		for (let j = 0; j < answers.length; j++) {
			let buttonAnswerItem = buttonAnswer.item(j);
						
			buttonAnswerItem.addEventListener("click", (e) => {alert("Спасибо, ваш голос засчитан!")});
		}
	};
}	