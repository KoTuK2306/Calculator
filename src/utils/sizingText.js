export const sizingText = (calculating, result) => {
  if (calculating.length > 15 && calculating.length <= 38)
    result.style = "font-size: 15px";
  else if (calculating.length > 38) calculating.slice(0, -1);
  else result.style = "font-size: 35px";
  return calculating;
};
