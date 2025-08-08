import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.listen(port, (req, res) => {
    console.log("server on port " + port);
})

app.get("/", (req, res) => {
    res.render("index");
})