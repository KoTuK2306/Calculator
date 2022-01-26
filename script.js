import { operationButtons, buttonsContainer, result } from "./src/constants.js";
import { sizingText } from "./src/utils/sizingText.js";
import { sqrt } from "./src/utils/sqrt.js";

let calculating = [];

const buttonClick = (event) => {
  switch (event.target.id) {
    case operationButtons.clean:
      result.innerHTML = 0;
      calculating = [];
      break;
    case operationButtons.backspace:
      calculating.pop();
      if (calculating.length === 0) {
        result.innerHTML = 0;
        return;
      }
      result.innerHTML = calculating.join("");
      break;
    case operationButtons.square:
      let number = calculating.join("");
      number = Math.pow(number, 2);
      if (number.toString().length > 15) {
        result.innerHTML = number;
        result.style = "font-size: 15px";
        calculating = [];
        return;
      }
      result.innerHTML = number;
      calculating = [];
      break;
    case operationButtons.partOfAWhole:
      const denominator = calculating.join("");
      let fraction = 0;
      denominator == 0
        ? (result.innerHTML = operationButtons.uncertainty)
        : (fraction = 1 / denominator);
      if (fraction.toString().length > 10) {
        result.innerHTML = fraction.toFixed(10);
        calculating = [];
        return;
      }
      result.innerHTML = fraction;
      calculating = [];
      break;
    case operationButtons.sqrt:
      sqrt(calculating.join(""), result);
      calculating = [];
      break;
    default:
      calculating.push(event.target.innerHTML);
      result.innerHTML = calculating.join("");
  }
  sizingText(calculating, result);
};

buttonsContainer.addEventListener("click", buttonClick);
