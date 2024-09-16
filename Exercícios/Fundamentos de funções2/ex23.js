const str = "O rato roeu a roupa"

const strParaArray = [...str]

function contaPalavra(arr){
    let palavras = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == " "){
            palavras++
        }
    } return console.log(`Na string existem ${palavras} palavras`);
}

contaPalavra(str)