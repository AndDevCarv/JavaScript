import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello");
})

app.get("/about", (req, res) => {
    res.send("About me!");
})

app.get("/contact", (req, res) => {
    res.send("40028922");
})

app.listen(port, () => {
    console.log("running");
    
})

