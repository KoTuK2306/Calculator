import { operationButtons } from "./constants.js";

const [buttonsContainer] = document.getElementsByClassName("buttonsBlock");
const [result] = document.getElementsByClassName("result");
let calculating = [];

const buttonClick = (event) => {
  switch (event.target.id) {
    case operationButtons.clean:
      result.innerHTML = 0;
      calculating = [];
      sizingText();
      break;
    case operationButtons.backspace:
      calculating.pop();
      if (calculating.length === 0) {
        result.innerHTML = 0;
        sizingText();
        return;
      }
      result.innerHTML = calculating.join("");
      sizingText();
      break;
    case operationButtons.square:
      const number = calculating.join("");
      result.innerHTML = Math.pow(number, 2);
      calculating = [];
      sizingText();
      break;
    case operationButtons.partOfAWhole:
      const denominator = calculating.join("");
      denominator == 0
        ? (result.innerHTML = operationButtons.uncertainty)
        : (result.innerHTML = 1 / denominator);
      calculating = [];
      sizingText();
      break;
    default:
      calculating.push(event.target.innerHTML);
      result.innerHTML = calculating.join("");
      sizingText();
  }
};

buttonsContainer.addEventListener("click", buttonClick);

const sizingText = () => {
  if ((calculating.length > 15) & (calculating.length <= 38)) {
    document.getElementsByClassName("result")[0].style = "font-size: 15px";
  } else if (calculating.length > 38) {
    calculating.pop();
  } else document.getElementsByClassName("result")[0].style = "font-size: 35px";
};
