
O `JSON.stringify()` é uma função nativa do JavaScript que serve para **converter um objeto ou array em uma string JSON** — ou seja, transformar dados estruturados em texto plano.

## Para que serve `JSON.stringify()`?

- Enviar dados para uma API (como no `axios.post`)
- Armazenar dados em `localStorage` ou `sessionStorage`
- Salvar dados em arquivos ou bancos que exigem formato texto
- Visualizar objetos de forma legível no console

📦 Exemplo básico
```js
const usuario = { nome: "André", idade: 30, ativo: true }; 
const json = JSON.stringify(usuario); 
console.log(json); 

// Saída: {"nome":"André","idade":30,"ativo":true}
```
