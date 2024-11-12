document.querySelector(".todo__add-button").addEventListener("click", addTask);
document.querySelector(".todo__filters").addEventListener("click", filterTasks);

function addTask() {
  const taskInput = document.querySelector(".todo__input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.querySelector(".todo__list");

    const newTask = document.createElement("li");
    newTask.classList.add("todo__task");

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskContent.classList.add("todo__task-content");
    newTask.appendChild(taskContent);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.classList.add("todo__delete-button");
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTask(newTask);
    });
    newTask.appendChild(deleteButton);

    newTask.addEventListener("click", () => toggleTaskCompletion(newTask));

    taskList.appendChild(newTask);

    taskInput.value = "";
  }
}

function toggleTaskCompletion(taskContent) {
  taskContent.classList.toggle("todo__task--completed");
}

function deleteTask(task) {
  task.remove();
}

function filterTasks(event) {
  const filter = event.target.dataset.filter;
  if (!filter) return;

  const tasks = document.querySelectorAll(".todo__task");
  tasks.forEach((task) => {
    const isCompleted = task
      .querySelector(".todo__task")
      .classList.contains("todo__task--completed");
    switch (filter) {
      case "all":
        task.style.display = "flex";
        break;
      case "completed":
        task.style.display = isCompleted ? "flex" : "none";
        break;
      case "pending":
        task.style.display = !isCompleted ? "flex" : "none";
        break;
    }
  });
}
