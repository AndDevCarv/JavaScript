

## axios.get(url, config)

Chave para **ler dados** de um recurso.

```js
app.post("/get-secret", async (req, res) => {

  const searchId = req.body.id;

  try {
    const result = await axios.get("url/id", config); //aqui ele vai fazer um get id de algum usuario por exemplo
    res.render("index.ejs");
  } catch (error) {

    res.render("index.ejs", { content:JSON.stringify(error.response.data) });

  }

});
```

Pra pegar um dado específico do objeto que o axios retorna é assim: 

```js
app.get("/", (req, res) => {

    try {

        const result = axios.get(API_URL);

        const response = result.data.dadoEspecifico

    } catch (error) {

    }

})
```