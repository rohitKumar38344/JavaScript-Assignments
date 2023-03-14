const testLink = document.querySelector(".test-link");

testLink.addEventListener("click", function (event) {
  const shouldChangePage = confirm(
    "This website might be malicious! Do you wish to proceed?"
  );

  if (!shouldChangePage) {
    // window.location = event.currentTarget.href;
    event.preventDefault();
  }
  console.log(shouldChangePage);
});
