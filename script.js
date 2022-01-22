import { variables } from "./constants.js";

const [buttonsContainer] = document.getElementsByClassName("buttonsBlock");
const [result] = document.getElementsByClassName("result");
let calculating = [];

const buttonClick = (event) => {
  switch (event.target.id) {
    case variables.clean:
      result.innerHTML = 0;
      calculating = [];
      break;
    case variables.backspace:
      calculating.pop();
      if (calculating.length === 0) {
        result.innerHTML = 0;
        return;
      }
      result.innerHTML = calculating.join("");
      break;
    case variables.square:
      const number = calculating.join("");
      result.innerHTML = Math.pow(number, 2);
      calculating = [];
      break;
    case variables.partOfAWhole:
      const denominator = calculating.join("");
      denominator == 0
        ? (result.innerHTML = variables.uncertainty)
        : (result.innerHTML = 1 / denominator);
      calculating = [];
      break;
    default:
      calculating.push(event.target.innerHTML);
      result.innerHTML = calculating.join("");
  }
};

buttonsContainer.addEventListener("click", buttonClick);
