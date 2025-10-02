

## axios.put(url, data, config)

Substitui **o recurso inteiro**.

```js
app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  const {secret, score} = req.body;
  
  try {

    const result = await axios.put("url/id", //é muito semelhante ao post, ele busca pelo id nesse exemplo e substitui os dados antigos pelos novos recebidos no body
      {
        secret: secret,
        score: score
      }, config)

      res.render("index.ejs")

  } catch (error) {

    res.status(404).send(error.message)

  };

});
```