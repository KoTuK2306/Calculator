const [buttonsContainer] = document.getElementsByClassName("buttonsBlock");
const [result] = document.getElementsByClassName("result");
let calculating = [];

const buttonClick = (event) => {
  switch (event.target.id) {
    case "clean":
      result.innerHTML = 0;
      calculating = [];
      break;
    case "backspace":
      calculating.pop();
      if (calculating.length === 0) {
        return (result.innerHTML = 0);
      }
      result.innerHTML = calculating.join("");
      break;
    case "square":
      let number = calculating.join("");
      result.innerHTML = Math.pow(number, 2);
      calculating = [];
      break;
    default:
      calculating.push(event.target.innerHTML);
      result.innerHTML = calculating.join("");
      break;
  }
};

buttonsContainer.addEventListener("click", buttonClick);
