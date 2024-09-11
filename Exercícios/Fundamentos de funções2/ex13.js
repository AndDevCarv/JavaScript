const arrTeste = [1,'2',33,'a', 3]

function filtrarNumeros(arr) {
    const aray = []
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number'){
            aray.push(arr[i])
        } 
    } return console.log(aray);
}

filtrarNumeros(arrTeste)