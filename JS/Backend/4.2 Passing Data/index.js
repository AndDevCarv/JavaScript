import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); //bodyparser, middleware que pega informações do body, ex: nome:andre

app.get("/", (req, res) => { //default da página, ao entrar no 127.. vai iniciar aqui
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const firstName = req.body.fName; // pega o name do body
  const lastName = req.body.lName; 

  if (!firstName && !lastName) { //aqui estamos verificando se essas variáveis já existem, ou seja, se o campo foi preenchido, se ele nao for preenchido (!lastName) vamos lançar o index.ejs default
    res.render("index.ejs");
  } else{ //ja aqui, pressupondo que as variáveis foram declaradas (campos preenchidos) declaramos uma const para contagem das letras e lançamos o index.ejs com os objetos recebidos pelo bodyparser
    const countLetter = firstName.length + lastName.length
    res.render("index.ejs", {nome: firstName, sobNome: lastName, qtdLetra: countLetter})
  }
});

app.listen(port, () => { //confirmação do status
  console.log(`Server running on port ${port}`);
});
