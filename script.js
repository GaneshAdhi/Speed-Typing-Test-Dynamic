// container element 
let speedTypingTestEl = document.getElementById("speedTypingTest");

//paragraph elements  
let timerEl = document.getElementById("timer");

let quoteDisplayEl = document.getElementById("quoteDisplay");

let resultEl = document.getElementById("result");

// textarea element 
let quoteInputEl = document.getElementById("quoteInput");

// button elements 
let submitBtnEl = document.getElementById("submitBtn");

let resetBtnEl = document.getElementById("resetBtn");

// spinerElement 

let spinnerEl = document.getElementById("spinner");

//URL  HTTP request to get a random quotation 

let url = "https://apis.ccbp.in/random-quote";


//Time define
let timeDefine;

function time() {
    let counter = 0;
    timeDefine = setInterval(function() {
        timerEl.textContent = counter;
        counter += 1
    }, 1000);

}

time()






// data display funtion 

let dataDisplay = function() {
    spinnerEl.classList.remove("d-none");
    speedTypingTestEl.classList.add("d-none");

    let option = {
        method: "GET"
    }
    fetch(url, option)
        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            let content = data.content;
            quoteDisplayEl.textContent = content;
            spinnerEl.classList.add("d-none");
            speedTypingTestEl.classList.remove("d-none");




            // resetFunction
            function resetNew() {
                clearInterval(timeDefine);
                time()
                quoteInputEl.value = "";
                resultEl.textContent = "";
                dataDisplay();

            }

            resetBtnEl.onclick = function() {
                resetNew();
            }

            // submit function 

            submitBtnEl.onclick = function() {
                if (quoteInputEl.value === content) {
                    clearInterval(timeDefine);
                    resultEl.textContent = "You typed in " + timerEl.textContent + " Seconds";
                } else {
                    resultEl.textContent = "You typed incorrect sentence"
                }
            }


        })
}
dataDisplay();
