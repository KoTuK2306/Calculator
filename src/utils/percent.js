export const percent = (str, set) => {
  if (set === "") {
    str = str / 100;
  } else {
    let sign = set.toString().slice(-1);
    if (sign == "*" || sign == "/") {
      str = Number(eval(eval(set.slice(0, -1)) + sign + str / 100).toFixed(7));
    } else {
      str = Number(
        eval(
          eval(set.slice(0, -1)) +
            sign +
            eval(Number(eval(set.slice(0, -1))) * (str / 100))
        ).toFixed(7)
      );
    }
  }
  return str;
};
