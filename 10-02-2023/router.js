const express = require("express");

const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");

const router = express.Router();

const titles = {
  home: "home Page",
  about: "about",
  formazione: "formazione",
  webDesign: "web-design",
  contatti: "contattami",
};

router.get("/", (req, res) => {
  res.render("index.hbs", {
    title: titles.home,
  });
});

router.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: titles.about,
  });
});

router.get("/web-design", (req, res) => {
  res.render("web-design.hbs", {
    title: titles.webDesign,
  });
});

router.get("/formazione", (req, res) => {
  res.render("formazione.hbs", {
    title: titles.formazione,
  });
});

router.get("/contatti", (req, res) => {
  res.render("contatti.hbs", {
    title: titles.contatti,
  });
});

module.exports = router;
