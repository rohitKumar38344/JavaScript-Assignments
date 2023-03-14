const heading = document.querySelector("h1");
const btn = document.querySelector("button");

const changeHeadingText = function (params) {
  if (heading.innerText === "The most affordable learning platform") {
    heading.innerText = "PW Skills";
  } else if (heading.innerText === "PW Skills") {
    heading.innerText = "The most affordable learning platform";
  }
};

btn.addEventListener("click", changeHeadingText);
