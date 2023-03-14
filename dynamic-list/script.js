const listItems = [
  "turn on the gas stove",
  "boil water",
  "add tea leaves",
  "add sugar",
  "add milk",
  "boil it for sometime",
  "turn off the gas and strain the tea",
];

let stepsCount = 0;
const displayRecipe = function () {
  if (stepsCount < listItems.length) {
    const listItemEl = document.createElement("li");
    listItemEl.innerText = listItems[stepsCount];
    listEl.appendChild(listItemEl);
    stepsCount++;
    showBtn.innerText = `Show me step ${stepsCount + 1}`;
  } else {
    showBtn.innerText = "finish";
    showBtn.setAttribute("disabled", "disabled");
    const paraEl = document.createElement("p");
    paraEl.innerText = "Your tea is ready 🍵";
    paraEl.style.color = "green";
    listEl.insertAdjacentElement("afterend", paraEl);
  }
};

const listEl = document.querySelector(".recipe");
const showBtn = document.querySelector(".show-btn");

showBtn.addEventListener("click", displayRecipe);
