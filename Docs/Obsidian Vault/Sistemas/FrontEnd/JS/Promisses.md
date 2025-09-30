
Documentação:
	{
		 [FreeCodeCamp](https://www.freecodecamp.org/portuguese/news/tutorial-de-promises-em-javascript-como-concluir-ou-rejeitar-promises-em-js/)
	} 

## O que são Promises e para que servem?

**O que é uma Promise?**  
Uma Promise é um objeto que representa uma operação assíncrona, ou seja, algo que não entrega um resultado imediatamente, mas “promete” entregá-lo no futuro. Ela pode estar em três estados:

- **Pending**: Aguardando conclusão.
- **Fulfilled**: Concluída com sucesso (usa resolve).
- **Rejected**: Concluída com erro (usa reject).

**Para que serve?**  
Promises são usadas para gerenciar operações que levam tempo, como carregar dados de uma API. Em vez de retornar o resultado direto, a Promise garante que você será notificado quando o resultado estiver pronto ou se ocorrer um erro.

**Exemplo prático**: Ao fazer uma requisição a uma API, você recebe uma Promise que será resolvida com os dados ou rejeitada com um erro.

**O que significa “pausar a execução”?**

Quando você usa `await promessa`, o JavaScript **não bloqueia todo o programa**; em vez disso, ele suspende só a função `async` atual até que a Promise seja resolvida ou rejeitada. Outras rotinas continuam rodando normalmente no event loop.

**Consumindo Promises

**Usando then() e catch()**
```js
minhaPromise
  .then(resultado => {
    console.log(resultado)   // 'Dados carregados com sucesso'
  })
  .catch(erro => {
    console.error(erro)      // 'Falha ao carregar dados'
  })
```



**Usando async/await**
```js
async function executar() {
  try {
    const resultado = await minhaPromise
    console.log(resultado)
  } catch (erro) {
    console.error(erro)
  }
}
```