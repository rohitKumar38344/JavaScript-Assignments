const userInput = "raman";

const capitalizeFirstLetter = function () {
  const fLetter = userInput.slice(0, 1);
  const result =
    fLetter.toUpperCase() !== fLetter
      ? fLetter.toUpperCase() + userInput.slice(1, userInput.length)
      : userInput;
  return result;
};

console.log(capitalizeFirstLetter());
