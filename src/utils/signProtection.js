export const signProtection = (input, set) => {
  if (input.innerHTML.includes("--")) {
    set = set.replace("--", "-");
  } else if (input.innerHTML.includes("+-")) {
    set = set.replace("+-", "-");
  }
  return set;
};
