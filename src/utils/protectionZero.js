export const ProtectionZero = (str) => {
  if (Number(str) === 0 && !str.includes("0.")) {
    str = "";
  }
  return str;
};
