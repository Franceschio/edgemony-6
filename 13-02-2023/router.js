const express = require("express");
const session = require("cookie-session");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(
  session({
    secret: "Sessione pagina",
    name: "session",
  })
);

const titles = {
  login: "Login",
  Warning: "avviso",
  home: "home Page",
  about: "about",
  formazione: "formazione",
  webDesign: "Web design",
  contatti: "contattami",
};

router.get("/", (req, res) => {
  res.render("login.hbs", {
    title: titles.login,
  });
});

router.post("/", (req, res) => {
  if (!req.body.name || !req.body.password) {
    res.status(400);
    res.render("login.hbs", {
      messaggio: "Per favore, inserisci i dati correttamente e riprova",
    });
    return;
  } else {
    let name = "Francesco";
    let password = "3000";
    let userAuth = { name: name, password: password };

    if (name === req.body.name && password === req.body.password) {
      req.session.user = userAuth;
      res.redirect("/home");
    } else {
      res.status(401).redirect("/warning");
    }
  }
});

function checkPage(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).redirect("/warning");
  }
}

router.get("/home", checkPage, (req, res) => {
  res.render("index.hbs", {
    title: titles.home,
  });
});

router.get("/about", checkPage, (req, res) => {
  res.render("about.hbs", {
    title: titles.about,
  });
});

router.get("/web-design", checkPage, (req, res) => {
  res.render("web-design.hbs", {
    title: titles.webDesign,
  });
});

router.get("/formazione", checkPage, (req, res) => {
  res.render("formazione.hbs", {
    title: titles.formazione,
  });
});

router.get("/contatti", checkPage, (req, res) => {
  res.render("contatti.hbs", {
    title: titles.contatti,
  });
});

router.get("/logout", (req, res) => {
  req.session = null;
  res.render("login.hbs");
});

router.get("/warning", (req, res) => {
  res.render("warning.hbs", {
    title: titles.Warning,
  });
});

module.exports = router;
