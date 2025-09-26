🔐 Tipos de Autenticação em APIs

```js
//Variáveis
const yourUsername = "toolagd";
const yourPassword = "1234";
const yourAPIKey = "4cc0d5fb-3e43-44f4-8607-06e9207ac5d7";
const yourBearerToken = "8178153a-3302-4c74-a136-6906e40a9540";
```

**Autenticação com Login e Senha (Basic Auth)**

📘 Como funciona

- O cliente envia **usuário e senha** codificados em base64 no cabeçalho `Authorization`.
- É chamada de **Basic Authentication**.
- Muito usada em sistemas simples ou internos.

📦 Exemplo

```js
axios.get("https://api.exemplo.com/dados", {
  auth: {
    username: "usuario",
    password: "senha"
  }
})
```



Authorization: Basic base64(usuario:senha)

✅ Vantagens

- Fácil de implementar
- Suporte nativo em Axios e navegadores

⚠️ Desvantagens

- Menos segura se não usada com HTTPS
- Não escala bem para múltiplos serviços
- Requer envio das credenciais a cada requisição






**Autenticação com API Key**

📘 Como funciona

- O cliente envia uma **chave secreta** (API Key) junto com a requisição.
- Pode ser enviada na URL ou no cabeçalho.

📦 Exemplos

Algumas APIs exigem uma chave no header ou na URL:
```js
axios.get("https://api.exemplo.com/dados?apikey=MINHA_CHAVE")
```

```js
// Rota que consome uma API protegida por API Key e autenticação básica
app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`, { //Usando variáveis para representar os parametros
      auth: {
        username: yourUsername,
        password: yourPassword
      }
    });

    // Converte os dados recebidos em string para renderizar na view
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });

  } catch (error) {
    // Em caso de erro, renderiza a mensagem na mesma view
    res.render("index.ejs", { content: `Error: ${error}` });
  }
});
```

✅ Vantagens

- Simples e rápida de usar
- Boa para acesso público ou limitado

⚠️ Desvantagens

- Pode ser exposta facilmente se não protegida
- Não identifica usuários individualmente
- Não possui controle de sessão ou expiração






**Autenticação com Token (Bearer Token / JWT)**

📘 Como funciona

- O usuário faz login e recebe um **token** (geralmente JWT).
- Esse token é enviado no cabeçalho `Authorization` em cada requisição.
- O servidor valida o token sem precisar consultar o banco de dados.

📦 Exemplo
```js
// Rota protegida que consome uma API usando autenticação via Bearer Token
app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      }
    });

    // Converte os dados recebidos em string para renderizar na view
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });

  } catch (error) {
    // Em caso de erro, renderiza a mensagem na mesma view
    res.render("index.ejs", { content: `Error: ${error}` });
  }
});
```
✅ Vantagens

- Mais seguro e escalável
- Permite controle de expiração e permissões
- Ideal para aplicações modernas (web, mobile, microserviços)

⚠️ Desvantagens

- Requer lógica de geração e validação de tokens
- Pode exigir refresh tokens e controle de sessão
- Mais complexo para implementar do zero