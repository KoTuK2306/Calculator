const buttons = document.getElementsByClassName("buttonsBlock");
const result = document.getElementsByTagName("p");

buttonClick = (event) => {
  if (event.target.id === "clean") {
    result.innerHTML = 0;
    return;
  }
  document.getElementById("result").innerHTML = event.target.innerHTML;
};

buttons.addEventListener("click", buttonClick);
