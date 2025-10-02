

## axios.delete(url, config)

O delete remove um recurso.

## Exemplo de código

```js
app.post("/delete-secret", async (req, res) => {

  const searchId = req.body.id;

  try {

    const result = await axios.delete(`url/id`, config); //perceba que ele não possui data, apenas o id a ser removido no header

    res.render("index.ejs", {content: "sucess"});

  } catch (error) {

    res.status(404);
    

  }

});
```
