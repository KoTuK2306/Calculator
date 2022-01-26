import { operationButtons } from "./src/constants.js";
import { sizingText } from "./src/utils/sizingText.js";

const [buttonsContainer] = document.getElementsByClassName("buttonsBlock");
const [result] = document.getElementsByClassName("result");

let str = "";
let num = 0;
let sqrtNumberLength = 0;
let flasher = true;

const buttonClick = (event) => {
  switch (event.target.id) {
    case operationButtons.clean:
      str = "";
      result.innerHTML = 0;
      break;
    case operationButtons.backspace:
      str = str.slice(0, -1);
      result.innerHTML = str;
      if (str.length === 0) result.innerHTML = 0;
      break;
    case operationButtons.countUp:
      let calc = [];
      str.split("").map((elem) => {
        if (elem === "x") {
          elem = "*";
          flasher = true;
        } else if (elem === "÷") {
          elem = "/";
          flasher = true;
        } else if (elem === "√") {
          elem = "Math.sqrt(";
          flasher = false;
        } else if (
          elem === "+" ||
          elem === "-" ||
          elem === "/" ||
          elem === "*"
        ) {
          flasher = true;
        }
        if (flasher == false) {
          sqrtNumberLength = sqrtNumberLength + 1;
        }
        calc.push(elem);
        num = calc.indexOf("Math.sqrt(");
      });
      if (sqrtNumberLength !== 0) {
        calc.splice(num + sqrtNumberLength, 0, ")");
      }
      str = eval(calc.join(""));
      result.innerHTML = str;
      str = str.toString();
      break;
    default:
      str += event.target.innerHTML;
      result.innerHTML = str;
  }
  sizingText(str, result);
};

buttonsContainer.addEventListener("click", buttonClick);
