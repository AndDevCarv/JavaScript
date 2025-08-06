import express from "express";
import bodyParser from "body-parser"; //bodyparser é um middleware para traduzir o body codificado
import { dirname } from "path"; //path é um modulo do node e dirname é uma ferramenta
import { fileURLToPath } from "url"; //path é um modulo do node e fileUrlToPath é uma ferramenta

const __dirname = dirname(fileURLToPath(import.meta.url)); //aqui ele vai criar um caminho diretamente para a pasta atual ele vai transformar uma url codificada em um endereço de arquivos tipo C:public/teste.txt e pegar somente a pasta pra nós podermos manipular os arquivos tipo, minhaPasta(dirname) + arquivo (index.html)

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  req.bandName = req.body["street"] + req.body["pet"]; //da pra declarar usando req.algumacoisa desde que seja temporariamente (durante um ciclo de requisição cliente servidor)
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/submit", (req, res) => {
  res.send(`<h1>your band name is ${req.bandName}</h1>`)
})