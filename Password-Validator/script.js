const signInForm = document.querySelector('[name="login"]');

signInForm.addEventListener("submit", function (event) {
  const password = event.currentTarget.password.value;
  const confirmPassword = event.currentTarget.confirmPassword.value;

  if (password !== confirmPassword) {
    console.log("Password didn't Matched");
    console.log("Password Validation Not Successful");
    event.preventDefault();
  } else {
    console.log("Password Matched");
    console.log("Password Validation Successful");
  }
});
