## O que são os códigos de status?

Os **códigos de status HTTP** são números que o servidor envia como resposta para indicar o **resultado de uma requisição** feita pelo cliente (como o navegador ou o Axios). Eles ajudam a entender se a operação deu certo, falhou ou precisa de atenção.

## Como funcionam os códigos de status?

📦 Exemplos mais comuns

✅ Sucesso

- `200 OK` → Requisição bem-sucedida
- `201 Created` → Recurso criado com sucesso (ex: `POST`)
- `204 No Content` → Sucesso, mas sem conteúdo na resposta

⚠️ Erros do cliente

- `400 Bad Request` → Requisição malformada
- `401 Unauthorized` → Falta autenticação
- `403 Forbidden` → Acesso negado
- `404 Not Found` → Recurso não encontrado

🔥 Erros do servidor

- `500 Internal Server Error` → Erro genérico no servidor
- `502 Bad Gateway` → Servidor intermediário recebeu resposta inválida
- `503 Service Unavailable` → Servidor fora do ar ou sobrecarregado

## Exemplos

```js
app.get("/usuario/:id", (req, res) => {
  const usuario = buscarUsuario(req.params.id);

  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  res.status(200).json(usuario);
});
```