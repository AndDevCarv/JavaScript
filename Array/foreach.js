const aprovados = ['andre', 'bruno', 'luana']

aprovados.forEach(function(nome, indice){ 
    console.log(`${nome}, ${indice}`);
})

//o primeiro elemento do forEach é o elemento que vai ser percorrido (string,bool,obj,array), o segundo paramentro é o indice e o terceiro o proprio array