🧠 O que acontece quando o JavaScript encontra `await`

1. **Chega no `await`**  
    A função `async` está rodando normalmente até encontrar um `await`. Nesse momento, ela **pausa** sua execução e **retorna o controle** para o Event Loop.
2. **A Promise está pendente**  
    O valor que está sendo aguardado (como `fetch(...)`) ainda não foi resolvido. Então o JavaScript **coloca o restante da função como uma microtask** — uma tarefa que será executada assim que possível.
3. **O código síncrono continua**  
    Enquanto a Promise não resolve, o Event Loop segue rodando outras tarefas: renderização da UI, eventos de clique, timers, etc. Nada trava.
4. **A Promise é resolvida ou rejeitada**  
    Quando a operação assíncrona termina, o resultado é colocado na **fila de microtasks**.
5. **Event Loop esvazia a fila de microtasks**  
    Antes de iniciar o próximo ciclo, o Event Loop verifica se há microtasks pendentes. Se houver, ele executa — e aí a função `async` **retoma exatamente de onde parou**, com o valor resolvido da Promise.


🧭 Analogia: fila do mercado

- Você (a função `async`) está na fila esperando o caixa (`await`)
- Enquanto espera, outras pessoas passam em outros caixas (código síncrono continua)
- Quando seu caixa libera (Promise resolvida), você volta pra ação e termina sua compra (continua a função)

Basicamente, se não fosse pelo await a página congelaria enquanto os dados de um fetch da API não retornassem algum valor, usando o async await tudo ocorre normal, só fica congelado a função async