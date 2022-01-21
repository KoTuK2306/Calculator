const [buttonsContainer] = document.getElementsByClassName("buttonsBlock");
const [result] = document.getElementsByClassName("result");

let buttonClick = (event) => {
  if (event.target.id === "clean") {
    result.innerHTML = 0;
    return;
  }
  result.innerHTML = event.target.innerHTML;
};

buttonsContainer.addEventListener("click", buttonClick);
