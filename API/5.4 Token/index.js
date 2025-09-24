import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "toolagd";
const yourPassword = "";
const yourAPIKey = "4cc0d5fb-3e43-44f4-8607-06e9207ac5d7";
const yourBearerToken = "8178153a-3302-4c74-a136-6906e40a9540";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}random`);
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  } catch (error) {
    res.render("index.ejs", { content: `Error: ${error}` });
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", {content: result});
  } catch (error) {
    res.render("index.ejs", {content: `Error ${error}`});
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`, {
      auth: {
        username: yourUsername,
        password: yourPassword
      }
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", {content: result});
  } catch (error) {
    res.render("index.ejs", {content: `Error: ${error}`});
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}secrets/42`,
      {
        headers: {
          Authorization : `Bearer ${yourBearerToken}`
        }
      }
    )
    const result = JSON.stringify(response.data);
    res.render("index.ejs", {content: result})
  } catch (error){
    res.render("index.ejs", {content: `Error ${error}`})
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
