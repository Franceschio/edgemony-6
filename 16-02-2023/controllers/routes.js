const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const Nota = mongoose.model("notaModel");
const Oggetto = mongoose.model("oggettiModel");

router.get("/", (req, res) => {
  res.render("addupdate", {
    viewTitle: "Inserisci una nota",
  });
});

router.post("/", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  let nota = new Nota();
  nota.name = req.body.name;
  nota.surname = req.body.surname;
  nota.email = req.body.email;
  nota.mobile = req.body.mobile;
  nota.address = req.body.address;
  nota.text = req.body.text;
  nota.save((err, doc) => {
    if (!err) res.redirect("list");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Nota.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect("list");
    } else {
      console.log("Errore durante l' update : " + err);
    }
  });
}

router.get("/list", (req, res) => {
  Nota.find((err, docs) => {
    if (!err) {
      res.render("list", {
        notalist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

router.get("/:id", (req, res) => {
  Nota.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addupdate", {
        viewTitle: "Aggiornamento",
        nota: doc,
      });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  Nota.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/list");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

router.get("/oggetti", (req, res) => {
  res.render("addObject.hbs", {
    viewTitle: "Inserisci un oggetto",
  });
});

router.post("/oggetti", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  let oggetto = new Oggetto();
  oggetto.name = req.body.name;
  oggetto.price = req.body.price;
  oggetto.description = req.body.description;
  oggetto.save((err, doc) => {
    if (!err) res.redirect("objectList.hbs");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Oggetto.updateOne(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("objectList.hbs");
      } else {
        console.log("Errore durante l' update : " + err);
      }
    }
  );
}

router.get("/objectList", (req, res) => {
  Oggetto.find((err, docs) => {
    if (!err) {
      res.render("objectList.hbs", {
        notalist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

router.get("/oggetti/:id", (req, res) => {
  Oggetto.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addObjects.hbs", {
        viewTitle: "Aggiornamento",
        oggetto: doc,
      });
    }
  });
});

router.get("/oggetti/delete/:id", (req, res) => {
  Oggetto.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/objectList");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = router;
