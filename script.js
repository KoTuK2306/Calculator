const [buttonsContainer] = document.getElementsByClassName("buttonsBlock");
const [result] = document.getElementsByClassName("result");
let calculating = [];

const buttonClick = (event) => {
  if (event.target.id === "clean") {
    result.innerHTML = 0;
    calculating = [];
    return;
  } else if (event.target.id == "backspace") {
    calculating.pop();
    result.innerHTML = calculating.join("");
    return;
  } else {
    calculating.push(event.target.innerHTML);
    result.innerHTML = calculating.join("");
  }
};

buttonsContainer.addEventListener("click", buttonClick);
