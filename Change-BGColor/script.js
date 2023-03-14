const arrayOfColors = [
  "red",
  "green",
  "magenta",
  "rebeccapurple",
  "papayawhip",
];

document.querySelector(".change-color").addEventListener("click", function () {
  document.body.style.backgroundColor =
    arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
});
