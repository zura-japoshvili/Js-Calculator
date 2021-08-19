let inputSrn = document.getElementById("input"),
number = document.querySelectorAll("nums-sec"),
result = document.getElementById("equal"),
clear = document.getElementById("clear"),
operator = document.querySelectorAll("s1-btns"),
resultDisplay = false;

for(let i = 0; i < number.length;i++){
    number[i].addEventListener("click", function(e){
        let currentInput = inputSrn.innerHTML;
        let lastChar = currentInput[currentInput.length - 1];
        if (resultDisplayed === false) {
            inputSrn.innerHTML += e.target.innerHTML;
          }

    });
}