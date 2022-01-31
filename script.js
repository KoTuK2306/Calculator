import {
  operationButtons,
  buttonsContainer,
  result,
  input,
} from "./src/constants.js";
import { sizingText } from "./src/utils/sizingText.js";
import { ProtectionZero } from "./src/utils/protectionZero.js";
import { percent } from "./src/utils/percent.js";
import { signProtection } from "./src/utils/signProtection.js";

let str = "";
let set = "";
let flasher = false;

const zeroing = () => {
  str = "";
  set = "";
};

const operationProtect = () => {
  if (result.innerHTML != 0) {
    return;
  } else if (isNaN(Number(set.slice(-1)))) {
    set = set.slice(0, -1);
    return set;
  } else if (set == "") {
    set = "0";
    return set;
  }
};

const buttonClick = (event) => {
  switch (event.target.id) {
    case operationButtons.clean:
      zeroing();
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
      str = percent(str, set);
      result.innerHTML = str;
      input.innerHTML = "";
      flasher = true;
      break;
    case operationButtons.deleteLastOperation:
      result.innerHTML = 0;
      str = "";
      flasher = false;
      break;
    case operationButtons.partOfAWhole:
      str = Number(eval(set + 1 / Number(str)).toFixed(6));
      result.innerHTML = str;
      input.innerHTML = set;
      flasher = true;
      break;
    case operationButtons.square:
      str = eval(set + Math.pow(Number(str), 2));
      set = "";
      result.innerHTML = str;
      input.innerHTML = set;
      flasher = true;
      break;
    case operationButtons.sqrt:
      str = Number(eval(set + Math.sqrt(Number(str)).toFixed(6)));
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
      if (str.length == 0) {
        str += "0.";
      } else if (str.includes(".")) return;
      else str += ".";
      result.innerHTML = str;
      flasher = false;
      break;
    case operationButtons.countUp:
      if (isNaN(Number(set.slice(-1))) && result.innerHTML == 0) {
        set += "0";
      }
      if (input.innerHTML.slice(-1) === "-" && str < 0) {
        str = Math.abs(str);
      }
      set = signProtection(input, set);
      str = Number(eval(set + str).toFixed(7)).toString();
      set = "";
      input.innerHTML = set;
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
    zeroing();
    result.innerHTML = 0;
    input.innerHTML = "";
    str += event.target.innerHTML;
    result.innerHTML = str;
    flasher = false;
  }
  signProtection(input, set);
  sizingText(str, result);
  str = ProtectionZero(str);
};

buttonsContainer.addEventListener("click", buttonClick);
