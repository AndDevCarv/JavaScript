const pesoQuestao1 = 1;
const pesoQuestao2 = Number("2.0"); //conversão de string para numero, muito estranho

console.log(pesoQuestao1);
console.log(pesoQuestao2);

const prova1 = 9.734;
const prova2 = 7.345;

const total = prova1 * pesoQuestao1 + prova1 * pesoQuestao2 + prova2;
console.log(total.toFixed(2)); //formatação de casas decimais

const mediaNota = total / (pesoQuestao1 + pesoQuestao2);

console.log(mediaNota.toFixed(2));
console.log(typeof(mediaNota));