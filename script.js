import {
  operationButtons,
  buttonsContainer,
  result,
  calculating,
} from "./src/variables.js";
import { sizingText } from "./src/utils/sizingText.js";

const buttonClick = (event) => {
  switch (event.target.id) {
    case operationButtons.clean:
      result.innerHTML = 0;
      calculating.length = 0;
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
      const number = calculating.join("");
      result.innerHTML = Math.pow(number, 2);
      calculating.length = 0;
      break;
    case operationButtons.partOfAWhole:
      const denominator = calculating.join("");
      denominator == 0
        ? (result.innerHTML = operationButtons.uncertainty)
        : (result.innerHTML = 1 / denominator);
      calculating.length = 0;
      break;
    default:
      calculating.push(event.target.innerHTML);
      result.innerHTML = calculating.join("");
  }
  sizingText();
};

buttonsContainer.addEventListener("click", buttonClick);
