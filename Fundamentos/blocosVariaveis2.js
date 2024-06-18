const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push( function (){
        console.log(i)
    })
}

funcs[2]();
funcs[1]();

//Cada uma dessas funções, quando chamada, imprimirá o valor de i no momento em que a função foi criada.
//O uso de let no loop for é importante aqui, pois let cria uma nova variável de escopo de bloco para cada iteração do loop. 
//Isso significa que cada função no array funcs terá seu próprio valor de i correspondente ao valor no momento em que a função foi 
//empurrada para o array.