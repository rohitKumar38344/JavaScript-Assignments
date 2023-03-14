const progressBar = document.getElementById("progress-bar");

let count = 0;
document.addEventListener("scroll", () => {
  // progressBar.value = Math.floor(this.scrollY);
  console.log(Math.floor(this.scrollY));
  progressBar.value = count++;
});

// const throttle = (fn, delay) => {
//   let lastTime = 0;
//   console.log("called Throttle immediately");
//   let id = 0;
//   return (...args) => {
//     const now = new Date().getTime();
//     id++;
//     if (now - lastTime < delay) {
//       console.log(now - lastTime);
//       return;
//     }
//     lastTime = now;
//     console.log(`event id: ${id}`);
//     fn(...args);
//   };
// };
// let i = 0;
// const updateProgressBar = function () {
//   progressBar.value = i + 2;
//   console.log(i);
// };

// window.addEventListener("scroll", throttle(updateProgressBar, 200));
