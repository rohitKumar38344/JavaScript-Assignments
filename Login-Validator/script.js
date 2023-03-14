const loginForm = document.querySelector("form");

const validEmail = (email) => (email.includes("@") ? true : false);

const validPassword = (password) => (password.length >= 8 ? true : false);

const validateUserInput = function (ev) {
  const userEmail = ev.currentTarget.email.value;
  const userPassword = ev.currentTarget.password.value;
  const isValid = validEmail(userEmail) && validPassword(userPassword);

  if (!isValid) {
    ev.preventDefault();
    ev.currentTarget.password.insertAdjacentElement(
      "afterend",
      createHTMLEl(isValid)
    );
  } else {
    ev.currentTarget.password.insertAdjacentElement(
      "afterend",
      createHTMLEl(isValid)
    );
  }
};

const createHTMLEl = function (isValid) {
  const paraEl = document.createElement("p");
  if (!isValid) {
    paraEl.innerText = "Invalid email or password!";
    paraEl.style.color = "red";
    return paraEl;
  } else {
    paraEl.innerText = "Valid email and password!";
    paraEl.style.color = "green";
    return paraEl;
  }
};

loginForm.addEventListener("submit", validateUserInput);
