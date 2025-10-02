

## axios.patch(url, data, config)

Atualiza **parcialmente** um recurso.

```js 
app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  const {secret, score} = req.body

  try {
    const result = await axios.patch(`url/id`,
      {
        secret: secret,
        score: score
      }, config)
 //é muito semelhante ao post, ele busca pelo id nesse exemplo e substitui os dados antigos pelos novos recebidos no body

      res.render("index.ejs", {content: JSON.stringify(result.data)})

  } catch (error) {

    res.render("index.ejs").send(error.message);

  }

});
```