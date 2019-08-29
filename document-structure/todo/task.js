"use strict"

let buttonAdd = document.getElementById("tasks__add");

let buttonDelete = document.getElementsByClassName("task__remove");

let stringOfTaskes = document.getElementsByClassName("task");

for (let i = 0; i < buttonDelete.length; i++) {

    let buttonDeleteItem = buttonDelete.item(i);
	
	let stringOfTaskesItem = stringOfTaskes.item(i);
	
    function deleteTask(eventDelet) {
	    eventDelet.preventDefault();	
	 	stringOfTaskesItem.remove();
	}
		
	buttonDeleteItem.addEventListener('click', deleteTask);
}

function taskAdd(event) {
	 event.preventDefault();	
	
	let inputTaskes = document.getElementById("task__input");
		
	let task = document.getElementById("tasks__list");

	task.innerHTML += `
        <div class="task">
            <div class="task__title">
               ${inputTaskes.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `;
		
	inputTaskes.value = "";
}

buttonAdd.addEventListener('click', taskAdd);

