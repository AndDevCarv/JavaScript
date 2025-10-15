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

let total = 0

db.query("SELECT COUNT(*) FROM visited_countries", (err, res) => {
  if (err) {
    console.log(`Error executing query ${err.stack}`);
  } else {
    total = parseInt(res.rows[0].count)
  }
})

app.get("/", async (req, res) => {
  try {
    const total_number_countries = await db.query("SELECT COUNT(*) FROM visited_countries");
    const countries_id = await db.query("SELECT country_code FROM visited_countries");

    const countries = parseInt(total_number_countries.rows[0].count);
    const total = parseInt(countries_id.rows[0].count);

    
    res.render("index.ejs", {})
  } catch (error) {
    console.log(`Error on querys ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} ${total}`);
});
