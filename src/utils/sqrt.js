const MAX_DECIMAL = 7;

const roundFloat = (num, result, maxDecimal = MAX_DECIMAL) => {
  const fractionLength = (num - Math.trunc(num)).toString().length;
  if (fractionLength > maxDecimal) {
    result.innerHTML = num.toFixed(maxDecimal);
    return;
  }
  result.innerHTML = num;
};

export const sqrt = (num, result, maxDecimal) => {
  if (num < 0) {
    result.innerHTML = "Error";
    return;
  }
  const numSqrt = Math.sqrt(num);
  if (!Number.isInteger(numSqrt)) {
    roundFloat(numSqrt, result, maxDecimal);
    return;
  }
  result.innerHTML = numSqrt;
};
