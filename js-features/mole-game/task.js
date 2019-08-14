"use strict"

function game() {
	let date = new Date().getTime();
	const dead = document.getElementById("dead");
	dead.textContent = 0;
	const lost = document.getElementById("lost");
    lost.textContent = 0;
	for (let i = 1; i < 10; i++) {
	    let hole = document.getElementById("hole"+i);
				
	    let holeClass = hole.className;
			
	    hole.onclick = function() {
	        let dateOnClick = new Date().getTime();
            if (hole.className.includes("hole_has-mole") === true) {
	        dead.textContent = Number(dead.textContent) + 1;
	        } else {
		        lost.textContent = Number(lost.textContent) + 1;
	        } 
	  
	        if (Number(dead.textContent) === 10 && dateOnClick - date <= 12000) {
		        alert("Победа!");
		        game();
	        } else if (Number(lost.textContent) === 4 || dateOnClick - date > 12000) {
		        alert("Вы проиграли!");
		        game();
	        }
	    }
    }
}

game();
