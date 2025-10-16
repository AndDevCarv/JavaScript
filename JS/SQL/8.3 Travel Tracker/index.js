import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "qwe123",
  port: 5432
});

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", async (req, res) => {
  try {
    const totalNumberCountries = await db.query("SELECT COUNT(*) FROM visited_countries");
    const countriesResult = await db.query("SELECT country_code FROM visited_countries");
    const countries = countriesResult.rows.map(element => element.country_code)

    const total = parseInt(totalNumberCountries.rows[0].count);
    res.render("index.ejs", {total: total, countries: countries})
  } catch (error) {
    console.log(`Error on query ${error}`);
  }
});

app.post("/add", async (req, res) => {
  try {
    const country = req.body.country;
    const result = await db.query("SELECT country_code FROM countries WHERE country_name ILIKE $1", [country]);

    console.log(result);
    
  } catch (error) {
    console.log(`Error in query ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
