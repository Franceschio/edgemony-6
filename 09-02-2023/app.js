const express = require("express");
const ex = express();
const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");

const PORT = 7000;

const myPreference = {
  pet: "dog",
  color: "green",
  season: "fall",
};

ex.use(express.static("./public"));

ex.get("/", (req, res) => {
  res.render("home.hbs", {
    titolo: "main page",
    myPreference,
  });
});

ex.get("/about", (req, res) => {
  res.render("about.hbs", {
    titolo: "about",
  });
});

ex.get("/login", (req, res) => {
  res.render("login.hbs", {
    titolo: "login",
  });
});

ex.get("/presentazione", (req, res) => {
  res.render("miPresento.hbs", {
    titolo: "presentazione",
  });
});

ex.listen(PORT, () => {
  console.log("server attivo");
});
