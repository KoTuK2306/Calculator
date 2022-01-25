import { result } from "../constants.js";

const numberOfDecimalPlaces = 7;

export const sqrt = (num) => {
  const numSqrt = Math.sqrt(num);
  switch (true) {
    case num < 0:
      result.innerHTML = "Error";
      break;
    case Number.isInteger(numSqrt):
      result.innerHTML = numSqrt;
    case !Number.isInteger(numSqrt):
      (numSqrt - Math.trunc(numSqrt)).toString().length > numberOfDecimalPlaces
        ? (result.innerHTML = numSqrt.toFixed(numberOfDecimalPlaces))
        : (result.innerHTML = numSqrt);
      break;
    default:
      result.innerHTML = numSqrt;
      break;
  }
};
