import { result } from "../constants.js";

export const sqrt = (num) => {
  if (num < 0) {
    num = Math.sqrt(Math.abs(num));
    if (Number.isInteger(num) === true) {
      result.innerHTML = num + "i";
    } else if ((num - Math.trunc(num)).toString().length > 7) {
      result.innerHTML = num.toFixed(7) + "i";
    } else result.innerHTML = num + "i";
  } else {
    num = Math.sqrt(num);
    if (Number.isInteger(num) === true) {
      result.innerHTML = num;
    } else if ((num - Math.trunc(num)).toString().length > 7) {
      result.innerHTML = num.toFixed(7);
    } else result.innerHTML = num;
  }
};
