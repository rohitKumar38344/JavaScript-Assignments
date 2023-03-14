const checkColorBtn = document.querySelector(".checkColorBtn");
const outputField = document.querySelector(".output");

const validColors = ["red", "blue", "yellow"];
const isValidColor = function (userInput) {
  let valid = false;
  for (let i = 0; i < validColors.length; i++) {
    if (userInput === validColors[i]) {
      valid = true;
      break;
    }
  }
  return valid;
};

const checkColor = function () {
  const fColor = document.getElementById("firstColor").value;
  const sColor = document.getElementById("secondColor").value;
  let msg = "Invalid color";
  if (isValidColor(fColor) && isValidColor(sColor)) {
    msg = colorMixer(fColor + sColor);
  }
  outputField.innerText = msg;
};

const colorMixer = function (color) {
  let result;
  switch (color) {
    case "redblue":
    case "bluered":
      result = "purple";
      break;
    case "redyellow":
    case "yellowred":
      result = "orange";
      break;
    case "blueyellow":
    case "yellowblue":
      result = "green";
      break;
    default:
      result = "Invalid color";
  }
  return result;
};

checkColorBtn.addEventListener("click", checkColor);
