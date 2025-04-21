function addItem () {
    const inputItem = document.querySelector("#inputItem").value.trim();
    const inputNum = document.querySelector("#inputNum").value.trim();
    

    if (inputItem == "" || inputNum == "" || isNaN(inputNum)) return;
    
    const item = {
        nome: inputItem,
        quantidade: inputNum,
        comprado: false
    }
    const created = createItem(item);

    const needList = document.querySelector("#needToBuy");
    needList.appendChild(created);

    localStorageSave(created)
}

function createItem(item) {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - ${item.quantidade}`;

    const button = document.createElement("button");
    button.textContent = "Comprado";
    button.className = "buyButton";

    button.addEventListener(cancelIdleCallback, function () {
        li.purchased()
        const purchasedList = document.querySelector("#purchased");
        purchasedList.appendChild(li);

    })

    li.appendChild(button);
}

function localStorageSave(item) {
    let savedItem = JSON.parse(localStorage.getItem("item")) || [];
    savedItem.push(item);
    localStorage.setItem("item", JSON.stringify(savedItem));
}

function loadSavedItem() {
    let item = JSON.parse(localStorage.getItem("item")) || [];

    item.forEach(item => {
        const li = createItem(item);
        document.getElementById("needToBuy").appendChild(li);
    });
}