const arrTeste = [2,12,15,'sds', 2, 'a', 'r']

function separaArr(arr) {
    const arrNovo = []
    arrNovo.push(arr[0])
    arrNovo.push(arr[arr.length-1])
    console.log(arrNovo);   
}

separaArr(arrTeste)