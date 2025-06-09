const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");
const inputBtn = document.getElementById("inputBtn");


function createElementTask(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn"

    deleteBtn.addEventListener("click", function() {
        li.remove()
    })

    return li;
}

function addTask() {
    const inputTask = document.getElementById("inputTask");
    if (inputTask.value.trim() == "") return;

    let add;
    add.textContent = inputTask.value;
    createElementTask(add);
    
    const taskList = document.getElementById("taskList");
    taskList.appendChild(add);
}

inputBtn.addEventListener("click", addTask);