const buttons = document.getElementById("buttonsBlock");
const result = document.getElementById("result");

buttons.onclick = function (event) {
    if (event.target.id == "clean") {
        result.innerHTML = 0;
    } else {
        document.getElementById("result").innerHTML = event.target.innerHTML;
    }
};
