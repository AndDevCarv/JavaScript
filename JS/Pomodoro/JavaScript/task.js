const inputTask = document.getElementById("inputTask"); 
const taskList = document.getElementById("taskList"); //as 3 const capturam o id pra manipulacao
const inputBtn = document.getElementById("inputBtn");



function createElementTask(task) { //function pra estruturar o elemento dentro do UL
    const li = document.createElement("li");
    li.textContent = task; //vai criar o elemento

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = "deleteBtn"; //na criacao já adiciona o botao de Delete

    deleteBtn.addEventListener("click", function() {
        li.remove() //no click ele remove do DOM
        save(); //e salva pra dar o resfresh limpo
    })

    li.appendChild(deleteBtn);
    return li;
}



function addTask() {
    const form = inputTask.value.trim(); //vai pegar o elemento, ir até o texto (value) e retirar espacos
    if (form === "") return; //se o elemento for vazio retorna
    
    let task = createElementTask(form);
    taskList.appendChild(task); //vai criar o elemento e já dar o append no UL

    save();
    inputTask.value = ""; //salva e reseta o placeholder do input
}

function save() {
    let taskArr = [];
    document.querySelectorAll("#taskList li").forEach(task => { //como a const da tasklist estava no começo estava bugando por estar no inicio do codigo, dai é acessado o elemento aqui
        taskArr.push(task.firstChild.textContent.trim()); //o for each percorre cada li, pega só o texto (first child) e formata com o trim, depois da um push no arr
    });

    localStorage.setItem("task", JSON.stringify(taskArr)); //aqui ele pega o local storage, dá um identificado e passa pelo json pra armazenar
}

function loadSavedTasks() {
    const localSaved = JSON.parse(localStorage.getItem("task")) || []; //aqui ele vai buscar pela identificacao e retornar como arr
    localSaved.forEach(task => {
        const taskCreated = createElementTask(task); //pra cada li dentro dele ele vai novamente criar os elementos no html
        taskList.appendChild(taskCreated);
    });
}




window.addEventListener("load", loadSavedTasks); //quando damos refresh ele recarrega as task
inputBtn.addEventListener("click", addTask); //action do addbtn
