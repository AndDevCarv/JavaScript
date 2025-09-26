
Axios é um cliente HTTP isomórfico baseado em [[Promisses|promessas]], compatível com navegadores (XMLHttpRequest) e Node.js (módulo http), que automatiza parsing de [JSON](URL) e simplifica chamadas assíncronas

Documentação:
	{
		[Axios NPM](https://www.npmjs.com/package/axios)
		[Exemplos minimalistas | Axios Docs](https://axios-http.com/ptbr/docs/example)
		
	} 

Métodos HTTP

- `axios.get(url, config)`
- `axios.post(url, {...data}, config)`
- `axios.put(url, {...data}, config)`
- `axios.delete(url, config)`
- `axios.request(config)` para chamadas genéricas
- `axios.all(promises)` + `axios.spread(callback)` para execução paralela de múltiplas requisições

Funcionalidades Principais

- Suporte a requisições HTTP em navegador e Node.js
- API de promessas, permitindo uso de async/await e then/catch
- Interceptores de requisição e resposta para lógica global de autenticação, log e tratamento de erros
- Transformação automática de dados de request/response (JSON, FormData, URL-encoded)
- Cancelamento de requisições e configuração de timeouts
- Serialização de parâmetros de consulta com suporte a aninhamento
- Serialização automática de bodies para JSON, multipart/form-data e application/x-www-form-urlencoded

Configuração e Instâncias

- `axios.defaults` para definir valores globais (headers, baseURL, timeout)
- `axios.create(config)` para criar instâncias isoladas com configuração customizada
- `instance.interceptors.request.use()` e `instance.interceptors.response.use()` para adicionar lógica pré-envio ou pós-resposta (autenticação, logs, tratamento de erros)


Estrutura da Resposta

Ao resolver a Promise, o objeto de resposta contém:

- `data`: payload da resposta
- `status`, `statusText`: código e mensagem HTTP
- `headers`: cabeçalhos retornados
- `config`: configuração usada na requisição
- `request`: instância do request original

Tratamento de Erros

No catch, o objeto de erro pode expor:

- `error.response`: detalhes da resposta (status, headers, data) em caso de falha HTTP
- `error.request`: quando não houve resposta do servidor
- `error.message`: descrição do erro lançado



Exemplo de código
```js
app.get("/basicAuth", async (req, res) => { //requisição de API
  try {
    const response = await axios.get(`${API_URL}all?page=2`, {
      auth: { //autenticação
        username: yourUsername,
        password: yourPassword,
      },
    });
    const result = JSON.stringify(response.data); //Transforma o response em string
    res.render("index.ejs", {content: result});
  } catch (error) { //aqui ele vai exibir o erro 404 caso a requisição não encontre nada na 2a página
    res.render("index.ejs", {content: `Error ${error}`});
  }
});
```

