

## axios.post(url, data, config)

Usado para **criar** um novo recurso.

```js
app.post("/post-secret", async (req, res) => {

  try {
    const {id, secret, score} = req.body; //dados que foram enviados no body
    const response = await axios.post("url", {
      id: id,
      secret: secret, //dados enviados para o servidor
      score: score
    }, config) //config, as vezes token, se necessário
    
    res.render("index.ejs");

  } catch (error) {

    res.status(404).send(error.message);

  }

});
```