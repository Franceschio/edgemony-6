const express = require("express");
const { use } = require("./router");
const router = require("./router");
const ex = express();

const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");

ex.use(express.static("./public"));

ex.use("/", router);

ex.get("*", (req, res) => {
  res.status(404).render("error.hbs");
});

ex.listen(3000, () => {
  console.log("server attivo sulla porta 3000");
});
