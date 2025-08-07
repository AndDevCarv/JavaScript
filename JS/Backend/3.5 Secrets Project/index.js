import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url)); //caminho diretamente pro diretório atual para manipulação dos arquivos

const app = express();
const port = 3000;


app.listen(port, (req, res) => { //ligação do server na 3000
    console.log("app listening on port " + port);
    
})

app.use(express.urlencoded({extended: true})) //express internpretando os dados dos formulários, ele transforma em obj pra ler tipo um req.body.name

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
    const senha = req.body.password //senha que foi pega no body
    const regex = /^ILoveProgramming$/; //senha absoluta, tipo um regex

    if (!regex.test(senha)) { //o test é uma função nativa de testes do regex
        return res.status(400).send("senha inválida");
    } else {
        res.sendFile(__dirname + "/public/secret.html");
    }
})