const express = require("express");
let routerLibri = express.Router();
const mongoose = require("mongoose");
const Libro = mongoose.model("libroModel");

//get

routerLibri.get("/", (req, res) => {
  res.render("addupbook", {
    viewTitle: "Inserisci un libro",
  });
});

routerLibri.get("/bookList", (req, res) => {
  res.render("listBook", {
    viewTitle: "vedi i libri",
  });
});

//post

router.post("/newBookList", async (req, res) => {
  const book = new Libro({
    title: req.body.title,
    author: req.body.author,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//put

router.put("/ModifyBook/:id", getBook, async (req, res) => {
  if (req.body.title != null) {
    res.sub.title = req.body.title;
  }
  if (req.body.author != null) {
    res.sub.author = req.body.author;
  }
  try {
    const bookUpdate = await res.book.save();
    res.json(bookUpdate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete

router.delete("/deleteBook/:id", getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: "utente cancellato" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = routerLibri;
