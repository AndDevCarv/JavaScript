
## O que são Promises e para que servem?

Uma promise é uma construção do JavaScript que representa um valor futuro desconhecido (apenas a "promessa" de um valor). Por conceito, uma promise é apenas o JavaScript "prometendo" retornar um valor. Esse valor pode ser o resultado de uma chamada de API, ou um objeto de erro de uma solicitação à rede que não funcionou. Sua garantia é a de que receberá "alguma coisa".

**Para que serve?**  
Promises são usadas para gerenciar operações que levam tempo, como carregar dados de uma API. Em vez de retornar o resultado direto, a Promise garante que você será notificado quando o resultado estiver pronto ou se ocorrer um erro.

**Exemplo prático**: Ao fazer uma requisição a uma API, você recebe uma Promise que será resolvida com os dados ou rejeitada com um erro.

**O que significa “pausar a execução”?**

****Quando você usa `await promessa`, o JavaScript não bloqueia todo o programa; em vez disso, ele suspende só a função `async` atual até que a Promise seja resolvida ou rejeitada. Outras rotinas continuam rodando normalmente no event loop.****

## ***Async/await***

Async/await são a forma de escrever promises que nos permitam escrever _código assíncrono que parece síncrono_. Vejamos abaixo.

```js
const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()
    
    console.log(data)
}

getData()
```

Aqui, nada mudou internamente. Ainda estamos usando promises para fazer o fetch dos dados, mas agora o código tem a aparência de código síncrono, e não temos mais blocos .then e .catch.

Async/await são, de fato, apenas um adendo sintático que nos dá um modo de criar código mais fácil de se raciocinar a respeito, sem mudar a dinâmica subjacente.

Vejamos como isso funciona.

Async/Await nos permitem usar _[generators](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Generator)_ para __paus_ar_ a execução de uma função. Quando usamos async/await, não estamos bloqueando nada, pois a função está dando o controle de volta para o programa principal.

Assim, quando a promise for resolvida, usaremos o _generator_ para devolver o controle para a função assíncrona com o valor da promise resolvida.

[Você pode ler mais neste artigo para ter uma visão geral sensacional](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md) de _generators_ e de código assíncrono (texto em inglês).

Com efeito, podemos agora escrever código assíncrono que se parece com código síncrono. Isso significa que agora é mais fácil pensar o código. Além disso, agora podemos usar as ferramentas síncronas, como try/catch, para lidar com erros:

```javascript
const getData = async () => {
    try {
    	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    	const data = await response.json()
        console.log(data)
    } catch (err) {
       console.log(err)
    }
    
}

getData()
```

Certo. Como usamos isso? Para usar async/await, precisamos anexar _async_ à função. Isso não a torna uma função assíncrono. Somente nos permite usar _await_ dentro dela.

Se não colocarmos a palavra-chave _async_, teremos um erro de sintaxe ao tentar usar _await_ em uma função regular.

```javascript
const getData = async () => {
	console.log("Podemos usar await nesta função")
}
```

Por causa disso, não podemos usar async/await no código de nível superior. Async e await, no entanto, são apenas um adendo sintático às promises. Podemos, assim, lidar com os casos de nível superior com o encadeamento de promises sem problemas:

```js
async function getData() {
  let response = await fetch('http://apiurl.com');
}

// getData é uma promise
getData().then(res => console.log(res)).catch(err => console.log(err); 
```

Isso expõe outro fato interessante sobre async/await. Ao definir uma função como async, _ela sempre retornará uma _promise.__

Usar async/await pode parecer um pouco com magia de início. Porém, como ocorre com qualquer outro truque de mágica, eles são apenas uma tecnologia avançada o suficiente e que evoluiu com o passar dos anos.