const operationButtons = {
  partOfAWhole: "partOfAWhole",
  square: "square",
  backspace: "backspace",
  clean: "clean",
  uncertainty: "Uncertainty",
};

Object.freeze(operationButtons);

const [buttonsContainer] = document.getElementsByClassName("buttonsBlock");
const [result] = document.getElementsByClassName("result");

export { operationButtons, buttonsContainer, result };
