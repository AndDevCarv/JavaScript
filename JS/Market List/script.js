function addItem () {
    const inputItem = document.querySelector("#inputItem").value.trim(); //busca o nome do item
    const inputNum = document.querySelector("#inputNum").value.trim(); //busca a quantidade dos itens
    

    if (inputItem == "" || inputNum == "" || isNaN(inputNum)) return; //se o item for vazio ou negativo, retorna
    
    const item = {
        nome: inputItem,
        quantidade: inputNum, //constroi o objeto
        comprado: false
    }
    const created = createItem(item);

    const needList = document.querySelector("#needToBuy"); //busca a coluna dos itens a serem comprados
    needList.appendChild(created); //insere no html o novo item

    localStorageSave(item) //salva no storage
    document.querySelector("#inputItem").value = ""; //retorna os valores para os iniciais
    document.getElementById("inputNum").value = "";
}

function createItem(item) {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - ${item.quantidade}`; //cria o esqueleto

    const buttonAdd = addButtonPurchased(li); //adicina o botao
    const buttonRemove = addButtonRemove(li);

    li.appendChild(buttonAdd);
    li.appendChild(buttonRemove);
    
    return li;
}


function localStorageSave(item) {
    let savedItem = JSON.parse(localStorage.getItem("item")) || []; //busca no storage e tira do modo json "tira da gaveta"
    savedItem.push(item); //insere o item
    localStorage.setItem("item", JSON.stringify(savedItem)); //retorna pro storage na forma de json "coloca na gaveta"
}

function loadSavedItem() {

    document.getElementById("needToBuy").innerHTML = "";
    document.getElementById("purchased").innerHTML = "";

    let item = JSON.parse(localStorage.getItem("item")) || [];

    item.forEach(item => {
        const li = createItem(item);

        if (item.comprado) {
            document.getElementById("purchased").appendChild(li);
            li.removeChild(li.querySelector(".buyButton"))
        } else {
            document.getElementById("needToBuy").appendChild(li)
        }
    });
}

function updateLocalStorage(updatedItem) {
    let items = JSON.parse(localStorage.getItem("item")) || []

    items = items.map(item => {
        if (
            item.nome.trim() === updatedItem.nome.trim() &&
            item.quantidade.trim() === updatedItem.quantidade.trim()
        ) {
            return {...item, comprado: true}
        }

        return item
    });

    localStorage.setItem("item", JSON.stringify(items));
    loadSavedItem();
}

function localStorageRemove(li) {
    const [nome, quantidade] = li.textContent.split("-").map(t => t.trim());
    let savedItem = JSON.parse(localStorage.getItem("item")) || [];

    savedItem = savedItem.filter(item => {
        return !(item.nome == nome && item.quantidade == quantidade);
    })

    localStorage.setItem("item", JSON.stringify(savedItem));
}

function addButtonRemove (li) {
    const buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Remover";
    buttonRemove.className = "buttonRemove";

    buttonRemove.addEventListener("click", function() {
        li.remove();
        localStorageRemove(li);
        loadSavedItem();
    })

    return buttonRemove;
}

function addButtonPurchased(li) {
    const buttonPuchased = document.createElement("button");
    buttonPuchased.textContent = "Comprado";
    buttonPuchased.className = "buyButton"; //vai criar o elemento

    buttonPuchased.addEventListener("click", function() {
        const [nome, quantidade] = li.textContent.split("-").map(t => t.trim());

        li.remove()
        updateLocalStorage({nome, quantidade});
        
    })

    return buttonPuchased;
}



document.getElementById("addButton").addEventListener("click", addItem);
loadSavedItem();