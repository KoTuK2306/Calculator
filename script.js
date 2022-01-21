const buttons = document.getElementById("buttonsBlock");
const result = document.getElementById("result");

buttonClick = (event) => {
    if (event.target.id == "clean") {
        result.innerHTML = 0;
        return;
    }
    document.getElementById("result").innerHTML = event.target.innerHTML;
};

buttons.addEventListener("click", buttonClick)
    
