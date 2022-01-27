import { operationButtons } from "./src/constants.js";
import { sizingText } from "./src/utils/sizingText.js";

const [buttonsContainer] = document.getElementsByClassName("buttonsBlock");
const [result] = document.getElementsByClassName("result");
const [input] = document.getElementsByClassName("input");

let str = "";
let set = "";

const buttonClick = (event) => {
  switch (event.target.id) {
    case operationButtons.clean:
      str = "";
      set = "";
      result.innerHTML = 0;
      input.innerHTML = "";
      break;
    case operationButtons.backspace:
      str = str.slice(0, -1);
      result.innerHTML = str;
      if (str.length === 0) result.innerHTML = 0;
      break;
    case operationButtons.percent:
      break;
    case operationButtons.deleteLastOperation:
      result.innerHTML = 0;
      str = "";
      break;
    case operationButtons.partOfAWhole:
      str = 1 / Number(str);
      str = eval(set + str);
      set = "";
      result.innerHTML = str;
      input.innerHTML = set;
      break;
    case operationButtons.square:
      str = Math.pow(Number(str), 2);
      str = eval(set + str);
      set = "";
      result.innerHTML = str;
      input.innerHTML = set;
      break;
    case operationButtons.sqrt:
      str = Math.sqrt(Number(str));
      str = eval(set + str);
      set = "";
      result.innerHTML = str;
      input.innerHTML = set;
      break;
    case operationButtons.divide:
      set += str + "/";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      break;
    case operationButtons.multiple:
      set += str + "*";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      break;
    case operationButtons.minus:
      set += str + "-";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      break;
    case operationButtons.sum:
      set += str + "+";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      break;
    case operationButtons.changeSign:
      str = str * -1;
      result.innerHTML = str;
      break;
    case operationButtons.comma:
      str += ".";
      result.innerHTML = str;
      break;
    case operationButtons.countUp:
      str = eval(set + str);
      set = "";
      input.innerHTML = set;
      str = str.toString();
      result.innerHTML = str;
      break;
    default:
      str += event.target.innerHTML;
      result.innerHTML = str;
  }
  sizingText(str, result);
};

buttonsContainer.addEventListener("click", buttonClick);
