import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.listen(port, (req, res) => {
    console.log("server on port " + port);
})

app.get("/", (req, res) => {
    
})