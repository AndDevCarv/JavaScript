O que é `data` no Axios?

Quando você faz uma requisição com Axios (como `axios.get()` ou `axios.post()`), ele retorna uma **Promise**. Quando essa Promise é resolvida, você recebe um **objeto de resposta** com várias propriedades:

```js
axios.get("https://api.exemplo.com/usuarios") .then(function(resposta) { console.log(resposta.data); // 👈 aqui está o payload });
```

- `resposta` é o objeto completo retornado pelo Axios
- `resposta.data` é o **conteúdo da resposta da API** — ou seja, os **dados que o servidor enviou de volta**

🧠 E o que é "payload"?

**Payload** é um termo técnico que significa **a carga útil** — ou seja, os **dados principais** que estão sendo enviados ou recebidos.

- No contexto de uma resposta HTTP, o payload é o **corpo da resposta**
- No Axios, esse corpo vem dentro da propriedade `data`

🔍 Exemplo visual

Imagine que a API responde com isso:

```json
{ "id": 42, "nome": "André", "email": "andre@email.com" }
```
Então:

```json
resposta.data === { id: 42, nome: "André", email: "andre@email.com" }
```

Esse objeto é o **payload da resposta**, e o Axios já te entrega ele direto em `data`.

🧪 Outras propriedades do Axios

Além de `data`, o objeto de resposta também tem:

- `status`: o código HTTP (ex: 200, 404, 500)
- `headers`: os cabeçalhos da resposta
- `config`: a configuração da requisição
- `request`: o objeto da requisição original

Se quiser, posso te mostrar como interceptar o `data`, validar o payload ou montar uma função genérica que trata qualquer resposta. Quer seguir por aí?