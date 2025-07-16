function addTask () {
    const inputTask = document.querySelector("#inputTask");
    const task = inputTask.value.trim();

    if (task == "") return;

    const li = createElementTask(task);

    const taskList = document.querySelector("#taskList");
    taskList.appendChild(li)

    localStorageSave(task);

    inputTask.value = "";
}

function createElementTask(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const button = document.createElement("button");
    button.textContent = "Excluir";
    button.className = "deleteBtn";

    button.addEventListener("click", function() {
        li.remove();
        localStorageRemove(task);   
    });

    li.appendChild(button);
    return li;
}

function localStorageSave (task) {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

function loadSavedTasks () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        const li = createElementTask(task);
        document.getElementById("taskList").appendChild(li);
    });
}

function localStorageRemove(taskToRemove) {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks = savedTasks.filter(task => task !== taskToRemove);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

document.querySelector("#addTask").addEventListener("click", addTask);


loadSavedTasks();