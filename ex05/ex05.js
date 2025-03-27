const taskInputElement = document.querySelector("#taskName");
const Element = document.querySelector(".task-input button");
const pendingColElement = document.querySelector("#pendingTasks");
const inProgressColElement = document.querySelector("#inProgressTasks");
const doneColElement = document.querySelector("#doneTasks");

let taskLocal = JSON.parse(localStorage.getItem("tasks")) || { pending: [], inProgress: [], done: [] };

renderTasks();

Element.addEventListener("click", function () {
    let taskValue = taskInputElement.value.trim();
    if (taskValue === "") return;

    let newTask = { name: taskValue };
    taskLocal.pending.push(newTask);
    taskInputElement.value = "";

    saveTasks();
    renderTasks();
});

function renderTasks() {
    pendingColElement.innerHTML = "";
    inProgressColElement.innerHTML = "";
    doneColElement.innerHTML = "";

    taskLocal.pending.forEach((task, index) => addTaskElement(task, index, "pending"));
    taskLocal.inProgress.forEach((task, index) => addTaskElement(task, index, "inProgress"));
    taskLocal.done.forEach((task, index) => addTaskElement(task, index, "done"));
}

function addTaskElement(task, index, status) {
    let taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `<p>${task.name}</p>`;

    if (status !== "done") { // Nếu chưa hoàn thành thì tạo button
        let nextButton = document.createElement("button");
        nextButton.textContent = "Chuyển tiếp";
        // Chuyển tiếp tiến độ
        nextButton.addEventListener("click", function () {
            moveTask(status, index);
        });
        taskElement.appendChild(nextButton);
    }

    if (status === "pending") {
        pendingColElement.appendChild(taskElement);
    } else if (status === "inProgress") {
        inProgressColElement.appendChild(taskElement);
    } else {
        doneColElement.appendChild(taskElement);
    }
}

function moveTask(status, index) {
    let task;

    if (status === "pending") {
        task = taskLocal.pending.splice(index, 1)[0];
        taskLocal.inProgress.push(task);
    } else if (status === "inProgress") {
        task = taskLocal.inProgress.splice(index, 1)[0];
        taskLocal.done.push(task);
    }

    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(taskLocal));
}
