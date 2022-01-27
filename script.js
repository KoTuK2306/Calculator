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
      let sign = set.toString().slice(-1);
      str = eval(
        eval(set.slice(0, -1)) +
          sign +
          eval(Number(eval(set.slice(0, -1))) * (str / 100))
      );
      result.innerHTML = str;
      input.innerHTML = "";
      str = "";
      set = "";
      sign = 0;
      break;
    case operationButtons.deleteLastOperation:
      result.innerHTML = 0;
      str = "";
      break;
    case operationButtons.partOfAWhole:
      str = 1 / Number(str);
      str = eval(set + str);
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
      if (
        set.toString().slice(-1) === "+" ||
        set.toString().slice(-1) === "-" ||
        set.toString().slice(-1) === "*"
      ) {
        set = set.slice(0, -1);
      }
      set += str + "/";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      break;
    case operationButtons.multiple:
      if (
        set.toString().slice(-1) === "+" ||
        set.toString().slice(-1) === "-" ||
        set.toString().slice(-1) === "/"
      ) {
        set = set.slice(0, -1);
      }
      set += str + "*";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      break;
    case operationButtons.minus:
      if (
        set.toString().slice(-1) === "+" ||
        set.toString().slice(-1) === "*" ||
        set.toString().slice(-1) === "/"
      ) {
        set = set.slice(0, -1);
      }
      set += str + "-";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      break;
    case operationButtons.sum:
      if (
        set.toString().slice(-1) === "-" ||
        set.toString().slice(-1) === "*" ||
        set.toString().slice(-1) === "/"
      ) {
        set = set.slice(0, -1);
      }
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
      console.log(set);
      set = "";
      input.innerHTML = set;
      str = str.toString();
      result.innerHTML = str;
      break;
    default:
      if (event.target === buttonsContainer) {
        return;
      }
      str += event.target.innerHTML;
      result.innerHTML = str;
      break;
  }
  sizingText(str, result);
};

buttonsContainer.addEventListener("click", buttonClick);
