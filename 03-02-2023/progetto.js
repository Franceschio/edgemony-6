const express = require("express");
const path = require("path");

const app = express();

const port = 8181;

app.use(express.static("public"));

//routing
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/home.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/home.html"));
});

app.get("/mainpage", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/mainPage.html"));
});

app.get("/chisiamo", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/chiSiamo.html"));
});

app.get("*", (req, res) => {
  res.send("Error 404, pagina non trovata");
});

//server in ascolto
app.listen(port, () => {
  console.log("server attivo");
});
