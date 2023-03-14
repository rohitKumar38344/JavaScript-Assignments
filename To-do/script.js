const addBtnEl = document.querySelector(".add-btn");
const taskListEl = document.querySelector(".task-list");
const taskInputEl = document.querySelector(".task");

const addTaskToList = function () {
  const taskItem = document.createElement("li");
  taskItem.innerText = taskInputEl.value;
  if (taskInputEl.value !== "") {
    taskListEl.appendChild(taskItem);
    taskInputEl.value = "";
  }
};

addBtnEl.addEventListener("click", addTaskToList);
