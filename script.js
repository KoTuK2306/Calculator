import {
  operationButtons,
  buttonsContainer,
  result,
  input,
} from "./src/constants.js";
import { sizingText } from "./src/utils/sizingText.js";

let str = "";
let set = "";
let flasher = false;

const operationProtect = () => {
  if (result.innerHTML != 0) {
    return;
  } else if (
    set.toString().slice(-1) === "+" ||
    set.toString().slice(-1) === "-" ||
    set.toString().slice(-1) === "/" ||
    set.toString().slice(-1) === "*"
  ) {
    set = set.slice(0, -1);
  }
};

const buttonClick = (event) => {
  switch (event.target.id) {
    case operationButtons.clean:
      str = "";
      set = "";
      result.innerHTML = 0;
      input.innerHTML = "";
      flasher = false;
      break;
    case operationButtons.backspace:
      str = str.slice(0, -1);
      result.innerHTML = str;
      if (str.length === 0) result.innerHTML = 0;
      flasher = false;
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
      flasher = true;
      break;
    case operationButtons.deleteLastOperation:
      result.innerHTML = 0;
      str = "";
      flasher = false;
      break;
    case operationButtons.partOfAWhole:
      str = 1 / Number(str);
      str = Number(eval(set + str).toFixed(6));
      result.innerHTML = str;
      input.innerHTML = set;
      flasher = true;
      break;
    case operationButtons.square:
      str = Math.pow(Number(str), 2);
      str = eval(set + str);
      set = "";
      result.innerHTML = str;
      input.innerHTML = set;
      flasher = true;
      break;
    case operationButtons.sqrt:
      str = Math.sqrt(Number(str));
      str = Number(eval(set + str).toFixed(6));
      set = "";
      result.innerHTML = str;
      input.innerHTML = set;
      flasher = true;
      break;
    case operationButtons.divide:
      operationProtect();
      set += str + "/";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      flasher = false;
      break;
    case operationButtons.multiple:
      operationProtect();
      set += str + "*";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      flasher = false;
      break;
    case operationButtons.minus:
      operationProtect();
      set += str + "-";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      flasher = false;
      break;
    case operationButtons.sum:
      operationProtect();
      set += str + "+";
      input.innerHTML = set;
      str = "";
      result.innerHTML = 0;
      flasher = false;
      break;
    case operationButtons.changeSign:
      str = str * -1;
      result.innerHTML = str;
      flasher = false;
      break;
    case operationButtons.comma:
      str += ".";
      result.innerHTML = str;
      flasher = false;
      break;
    case operationButtons.countUp:
      str = eval(set + str);
      set = "";
      input.innerHTML = set;
      str = str.toString();
      result.innerHTML = str;
      flasher = true;
      break;
    default:
      if (event.target === buttonsContainer) {
        return;
      }
      str += event.target.innerHTML;
      result.innerHTML = str;
      break;
  }
  if (flasher === true && event.target.id == "") {
    str = "";
    set = "";
    result.innerHTML = 0;
    input.innerHTML = "";
    str += event.target.innerHTML;
    result.innerHTML = str;
    flasher = false;
  }
  sizingText(str, result);
};

buttonsContainer.addEventListener("click", buttonClick);
