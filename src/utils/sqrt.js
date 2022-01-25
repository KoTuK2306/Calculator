const MAX_DECIMAL = 7;

const roundNotInteger = (numSqrt, result) => {
  let fractionLength = (numSqrt - Math.trunc(numSqrt)).toString().length;
  if (fractionLength > MAX_DECIMAL) {
    result.innerHTML = numSqrt.toFixed(MAX_DECIMAL);
    return;
  }
  result.innerHTML = numSqrt;
};

export const sqrt = (num, result) => {
  if (num < 0) {
    result.innerHTML = "Error";
    return;
  }
  const numSqrt = Math.sqrt(num);
  switch (true) {
    case !Number.isInteger(numSqrt):
      roundNotInteger(numSqrt, result);
      break;
    default:
      result.innerHTML = numSqrt;
      break;
  }
};
