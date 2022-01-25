const MAX_DECIMAL = 7;

const roundFloat = (num, maxDecimal = MAX_DECIMAL) => {
  const fractionLength = (num - Math.trunc(num)).toString().length;
  if (fractionLength > maxDecimal) {
    return num.toFixed(maxDecimal);
  }
  return num;
};

export const sqrt = (num, result, maxDecimal) => {
  if (num < 0) {
    result.innerHTML = "Error";
    return;
  }
  const numSqrt = Math.sqrt(num);
  if (!Number.isInteger(numSqrt)) {
    result.innerHTML = roundFloat(numSqrt, maxDecimal);
    return;
  }
  result.innerHTML = numSqrt;
};
