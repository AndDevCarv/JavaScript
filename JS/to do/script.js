function addTask () {
    const inputTask = document.querySelector("#inputTask");
    const task = inputTask.ariaValueMax.trim();

    if (task == "") return;

    const li = document.createElement("li");
    li.textContent = task;

    const taskList = document.querySelector("#taskList");
    taskList.appendChild(li)

    localStorageSave(task);

    inputTask.value = "";
}

function localStorageSave () {
    
}