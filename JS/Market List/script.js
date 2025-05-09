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
    li.dataset.nome = item.nome;
    li.dataset.quantidade = item.quantidade;

    const buttonAdd = addButtonPurchased(li); //adiciona o botao
    const buttonRemove = addButtonRemove(li);

    li.appendChild(buttonAdd);//adiciona o botao
    li.appendChild(buttonRemove);//adiciona o botao
    
    return li;
}


function localStorageSave(item) {
    let savedItem = JSON.parse(localStorage.getItem("item")) || []; //busca no storage e tira do modo json "tira da gaveta"
    savedItem.push(item); //insere o item
    localStorage.setItem("item", JSON.stringify(savedItem)); //retorna pro storage na forma de json "coloca na gaveta"
}

function loadSavedItem() {

    document.getElementById("needToBuy").innerHTML = ""; //limpa o html antes de buscar os dados novos no banco
    document.getElementById("purchased").innerHTML = "";

    let item = JSON.parse(localStorage.getItem("item")) || []; //tira da gaveta

    item.forEach(item => {
        const li = createItem(item);

        if (item.comprado) {
            document.getElementById("purchased").appendChild(li); //se o item tiver true ele vai ir pra lista de comprado
            li.removeChild(li.querySelector(".buyButton"))
        } else {
            document.getElementById("needToBuy").appendChild(li) //se nao, vai pra lista de compras
        }
    });
}

function updateLocalStorage(updatedItem) {
    let items = JSON.parse(localStorage.getItem("item")) || [] //tira da gaveta

    items = items.map(item => {
        if (
            item.nome === updatedItem.nome && //se o item bater com o item que estamos procurando
            item.quantidade === updatedItem.quantidade
        ) {
            return {...item, comprado: true} //ele vai atualizar pra true, ou seja, comprado
        }

        return item //retorna o item modificado
    });

    localStorage.setItem("item", JSON.stringify(items)); //coloca na gaveta
    loadSavedItem(); //recarrega o DOM
}

function localStorageRemove(li) {
    let savedItem = JSON.parse(localStorage.getItem("item")) || [];
    savedItem = savedItem.filter(item => {
        return !(item.nome == li.dataset.nome && item.quantidade == li.dataset.quantidade);
    })

    localStorage.setItem("item", JSON.stringify(savedItem));

    loadSavedItem();
}

function addButtonRemove (li) {
    const buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Remover";
    buttonRemove.className = "buttonRemove";

    buttonRemove.addEventListener("click", function() {
        li.remove();
        localStorageRemove(li);
    })

    return buttonRemove;
}

function addButtonPurchased(li) {
    const buttonPuchased = document.createElement("button");
    buttonPuchased.textContent = "Comprado";
    buttonPuchased.className = "buyButton"; //vai criar o elemento

    buttonPuchased.addEventListener("click", function() {
        const nome = li.dataset.nome;
        const quantidade = li.dataset.quantidade;

        li.removeChild(buttonPuchased);
        updateLocalStorage({nome, quantidade});
        
    })

    return buttonPuchased;
}



document.getElementById("addButton").addEventListener("click", addItem);
loadSavedItem();