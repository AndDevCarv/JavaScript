## O que é Express.js?

Express.js é um framework web para Node.js que facilita a criação de servidores HTTP e APIs RESTful. Ele fornece uma estrutura leve e flexível para lidar com rotas, middlewares, requisições e respostas.

## O que é Axios?

Axios é uma biblioteca cliente HTTP baseada em Promises, usada para fazer requisições para APIs — seja no navegador ou no backend com Node.js. Ele simplifica chamadas `GET`, `POST`, `PUT`, `PATCH`, `DELETE` e trata erros de forma elegante.

## Como eles se conectam?

Você usa **Express** para criar o servidor e **Axios** para fazer requisições para outras APIs (externas ou internas). Por exemplo, seu servidor Express pode receber uma requisição do frontend e, internamente, usar Axios para buscar dados de outra API.

```js 
// index.js
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.use(express.json());

// Rota que consome uma API externa usando Axios
app.get("/clima", async (req, res) => {
  try {
    const resposta = await axios.get("https://api.exemplo.com/clima?cidade=Caçapava");
    res.json(resposta.data);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

Nesse exemplo estamos rodando o servidor no express que processa uma solicitação .get com o axios.