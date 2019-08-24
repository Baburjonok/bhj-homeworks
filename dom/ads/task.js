"use strict"

let rotatorString = document.querySelectorAll(".rotator__case");

let rotatorCase = document.querySelectorAll(".rotator");

function rotate() {
		
	for (let j = 0; j < rotatorCase.length; j++) {
		let rotatorCaseItem = rotatorCase.item(j);
		let childrenOfrotatorCase = rotatorCaseItem.children;
		
	    for (let i = 0; i < childrenOfrotatorCase.length - 1; i++) {
	        let string = childrenOfrotatorCase.item(i);
		    let stringNext = childrenOfrotatorCase.item(i + 1);
				
	        if (string.classList.contains("rotator__case_active") === true) {
		        string.classList.remove("rotator__case_active");
			    stringNext.classList.add("rotator__case_active");
			    break;
	        } 
		
		    if (i === childrenOfrotatorCase.length - 2) {
			    string = childrenOfrotatorCase.item(0);
		        string.classList.add("rotator__case_active");
			    stringNext = childrenOfrotatorCase.item(i + 1);
		        stringNext.classList.remove("rotator__case_active");
		    }
		}
	}
		
}

const id = setInterval(rotate, 1000);