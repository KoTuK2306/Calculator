import { result } from "../constants.js";
import { calculating } from "../../script.js";
const sizingText = () => {
  if (calculating.length > 15 && calculating.length <= 38)
    result.style = "font-size: 15px";
  else if (calculating.length > 38) calculating.pop();
  else result.style = "font-size: 35px";
};

export { sizingText };
