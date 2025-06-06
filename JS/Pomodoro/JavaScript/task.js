const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");
const inputBtn = document.getElementById("inputBtn");


function createElementTask(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    focusButton.textContent = "Delete";
    deleteBtn.className = "deleteBtn"

    deleteBtn.addEventListener("click", function() {
        li.remove()
    })
}