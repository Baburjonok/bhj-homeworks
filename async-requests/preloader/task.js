"use strict"

let imageLoader = document.getElementById("loader");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status == 200) {
	    let answerJSON = xhr.responseText;
		let answerObject = JSON.parse(answerJSON);
		let response = answerObject.response;
		let valute  = response.Valute;
			
		
		for (let j in valute) {
			let nameOfValute = valute[j].CharCode;
			let rate = valute[j].Value;
					
            let items = document.getElementById("items");

            items.innerHTML += `
                <div class="item">
                    <div class="item__code">
                        ${nameOfValute}
                    </div>
                    <div class="item__value">
                        ${rate}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
			
                </div>
		    `;
        }

		imageLoader.className = "loader";
    };
};

