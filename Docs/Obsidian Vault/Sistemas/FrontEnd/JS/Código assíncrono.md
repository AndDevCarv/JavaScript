

## **O que é código assíncrono**?****

O JavaScript foi idealizado como uma linguagem de programação síncrona. Isso quer dizer que, quando o código é executado, o JavaScript começa no início de um arquivo e executa linha por linha de código até chegar ao final.

O resultado dessa decisão de design é o fato de que apenas uma coisa pode acontecer a cada momento.

Imagine que está fazendo malabarismo com seis bolinhas ao mesmo tempo. Enquanto suas mãos estiverem ocupadas com a proeza, não é possível fazer outras coisas com elas.

O mesmo ocorre com o JavaScript: quando o código começa a ser executado, suas mãos estão ocupadas com aquele código. Chamamos esse tipo de código síncrono de __blo_queador_. Ele, efetivamente, bloqueia a execução de outros códigos.

Voltemos ao exemplo do malabarismo. E se quiséssemos adicionar outra bola? Em vez de seis, faríamos malabarismo com sete bolinhas. Isso pode ser um problema.

Você não quer parar com o malabarismo porque é muito divertido. E também não consegue pegar outra bolinha, pois isso significa que você teria de parar.

A solução? Delegar o trabalho para um amigo ou familiar. Eles não estão fazendo malabarismo, então poder ir lá buscar a bolinha para você, jogá-la para você quando suas mãos estiverem livres e você, então, consegue adicionar a outra bolinha ao jogo.

Isso é o código assíncrono. O JavaScript delega o trabalho para outro e segue com sua vida. Quando o trabalho está pronto, ele recebe os resultados do trabalho de volta.

Imagine que você tenha pedido mais uma bolinha para o amigo e que ele tenha lançado a bola para você quando você não estivesse pronto para recebê-la.

Seria um desastre. Talvez você tivesse sorte, a pegasse e conseguisse incorporá-la à sua rotina de modo eficaz. Há, porém, uma grande possibilidade de ela fazer com que você derrube todas as outras bolinhas e acabe com seu divertimento. Não seria melhor dar instruções claras de quando você quer receber a bolinha?

Acontece que há regras claras com relação a quando o JavaScript pode receber de volta o trabalho que delegou.

Essas regras são governadas pelo laço de evento (_event loop_, em inglês) e envolvem a fila de microtarefas e macrotarefas.

Certo. Então, quando delegamos código assíncrono para o navegador, ele o recebe e executa o código, recebendo a carga de trabalho. Existem, porém, diversas tarefas que são dadas ao navegador. Precisamos, portanto, garantir que podemos priorizar essas tarefas.

É aí que a fila de microtarefas age. O navegador receberá o trabalho, o realizará e colocará o resultado em uma das duas filas com base no tipo de trabalho que recebe.

Promises, por exemplo, são colocadas na fila de microtarefas e têm uma prioridade maior.

Eventos e setTimeout são exemplos de trabalhos que são colocados na fila de macrotarefas, tendo uma prioridade menor.

Agora que o trabalho está feito e colocado em uma das duas filas, o laço de evento percorrerá para trás e para frente, verificando se o JavaScript está ou não pronto para receber os resultados.

Somente quando o JavaScript tiver terminado de executar seu código síncrono é que o laço de eventos começará a pegar as tarefas das filas e a lidar com as funções, enviando-as de volta ao JavaScript para que ele as execute.

Vamos dar uma olhada em um exemplo:

```js
setTimeout(() => console.log("hello"), 0) 

fetch("https://someapi/data").then(response => response.json())
                             .then(data => console.log(data))

console.log("What soup?")
```

Qual será a ordem aqui?

1. Primeiro, setTimeout é delegado para o navegador, que faz o trabalho e coloca a função resultante na fila de macrotarefas.
2. Depois, fetch é delegado para o navegador, que recebe o trabalho. Ele obtém os dados do endpoint e coloca as funções resultantes na fila de microtarefas.
3. O Javascript imprime em tela "What soup"?
4. O laço de eventos verifica se o JavaScript está pronto para receber os resultados dos trabalhos em fila.
5. Quando o console.log terminar, o JavaScript está pronto. O laço de eventos seleciona as funções em fila da fila de microtarefas, que têm uma prioridade maior, e as retorna ao JavaScript para que ele as execute.
6. Depois de esvaziar a fila de microtarefas, a função de callback de setTimeout é retirada da fila de macrotarefas e devolvida ao JavaScript para que ele a execute.

```js
No console:
// What soup?
// os dados da api
// hello
```