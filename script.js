let buttons = document.getElementById("buttonsBlock");
let result = document.getElementById("result");

buttons.onclick = function (event) {
    if (event.target.id == "b3") {
        result.innerHTML = 0;
    } else {
        document.getElementById("result").innerHTML = event.target.innerHTML;
    }
};
