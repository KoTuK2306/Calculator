const MAX_DECIMAL = 7;

const roundFloat = (num, maxDecimal = MAX_DECIMAL) => {
  const fractionLength = (num - Math.trunc(num)).toString().length;
  if (fractionLength > maxDecimal) {
    num = Number(num.toFixed(maxDecimal));
  }
  return num;
};

export const sqrt = (num, result, maxDecimal) => {
  console.log(num);
  if (num < 0) {
    result.innerHTML = "Error";
    return;
  }
  const numSqrt = Math.sqrt(num);
  console.log(numSqrt);
  if (!Number.isInteger(numSqrt)) {
    result.innerHTML = numSqrt;
  }
  result.innerHTML = roundFloat(numSqrt, maxDecimal);
};
