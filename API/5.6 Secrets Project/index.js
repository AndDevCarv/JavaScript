import axios from "axios";
import express from "express";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(port, () => {
    console.log("app listening on port " + port);
})

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        const response = result.data
        res.render("index.ejs", {secret: response.secret, user: response.username});
    } catch (error) {
        console.log(`erro ${error}`);
    }
})