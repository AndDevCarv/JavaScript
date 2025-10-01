**O método then() retorna uma [[Promisses|promisse]]. Possui dois argumentos, ambos são "**call back functions**", sendo uma para o sucesso e outra para o fracasso da promessa.**


```js
getUser()
  .then(function(user) {
    return getPosts(user.id);
  })
  .then(function(posts) {
    return renderPosts(posts);
  })
  .catch(function(err) {
    console.error("Erro geral:", err);
  });
});
```