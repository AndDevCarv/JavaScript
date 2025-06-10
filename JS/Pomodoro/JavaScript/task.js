const inputTask = document.getElementById("inputTask"); 
const taskList = document.getElementById("taskList"); //as 3 const capturam o id pra manipulacao
const inputBtn = document.getElementById("inputBtn");



function createElementTask(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn"

    deleteBtn.addEventListener("click", function() {
        li.remove()
        save();
    })

    li.appendChild(deleteBtn);
    return li;
}



function addTask() {
    const form = inputTask.value.trim();
    if (form === "") return;
    
    let task = createElementTask(form);
    taskList.appendChild(task);

    save();
    inputTask.value = "";
}

function save() {
    let taskArr = [];
    document.querySelectorAll("#taskList li").forEach(task => {
        taskArr.push(task.firstChild.textContent.trim());
    });

    localStorage.setItem("task", JSON.stringify(taskArr));
}

function loadSavedTasks() {
    const localSaved = JSON.parse(localStorage.getItem("task")) || [];
    localSaved.forEach(task => {
        const taskCreated = createElementTask(task);
        taskList.appendChild(taskCreated);
    });
}




window.addEventListener("load", loadSavedTasks);
inputBtn.addEventListener("click", addTask);