"use strict"

const startTime = document.getElementById("timer");
let sec = Number(startTime.textContent[6] + startTime.textContent[7]);
let min = Number(startTime.textContent[3] + startTime.textContent[4]);
let hour = Number(startTime.textContent[0] + startTime.textContent[1]);


const timer = function() {
	if (sec <= 60) {
	    sec -= 1;
		
	    if (sec < 0) {
		    sec = 59;
		    min -= 1;
			
	        if (min < 0){
		        sec = 59;
		        min = 59;
		        hour -= 1;
			}	
		}
	} 
	
	if (Number(hour) < 10) {
        hour = "0" + Number(hour);
    };
 
    if (Number(min) < 10) {
        min = "0" + Number(min);
    };
  
    if (Number(sec) < 10) {
        sec = "0" + Number(sec);
    };
	
	startTime.textContent = hour + ":" + min + ":" + sec;
	
	if (hour === "0-1") {
		startTime.textContent = 0;
		alert("Вы победили в конкурсе!");
		clearInterval(id);
		startTime.textContent = "00:00:00";
	};
	
};
	
const id = setInterval(timer, 1000);

	
