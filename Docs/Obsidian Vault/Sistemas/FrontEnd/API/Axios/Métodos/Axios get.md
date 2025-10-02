

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