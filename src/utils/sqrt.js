import { result } from "../constants.js";

export const sqrt = (num) => {
  if (num < 0) {
    result.innerHTML = "Error";
  } else {
    num = Math.sqrt(num);
    if (Number.isInteger(num) === true) {
      result.innerHTML = num;
    } else if ((num - Math.trunc(num)).toString().length > 7) {
      result.innerHTML = num.toFixed(7);
    } else result.innerHTML = num;
  }
};
