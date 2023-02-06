const express = require("express");
const libri = require("./libri.json");
const autorizzazione = require("./autorizzazione");

const ex = express();

ex.get("/", (req, res) => {
  res.send("Home");
});

ex.get("/libri", (req, res) => {
  res.json(libri);
});

ex.get("/libri/:libroId", autorizzazione, (req, res) => {
  const libroId = req.params;

  let libroCercato = libri.find((libro) => libroId === parseInt(libro.id));

  if (!libroCercato) {
    return res
      .status(404)
      .send(
        "Il libro che stai cercando non esiste o non è presente nel nostro database"
      );
  }
  return res.json(libroCercato);
});

ex.listen(8181, () => {
  console.log("Server attivo");
});
