export const signProtection = (input, set) => {
  if (input.innerHTML.includes("--")) {
    set = set.replace("--", "-");
    input.innerHTML = set;
  } else if (input.innerHTML.includes("+-")) {
    set = set.replace("+-", "-");
    input.innerHTML = set;
  }
  return set;
};
