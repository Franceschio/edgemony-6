const autorizzazione = (req, res, next) => {
  const { user } = req.query;

  if (user === "francesco") {
    next();
  } else {
    res.status(401).send("Utente non autorizzato");
  }
};

module.exports = autorizzazione;
