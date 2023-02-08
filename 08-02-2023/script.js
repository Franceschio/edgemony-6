const express = require("express");
const ex = express();
const users = require("./mock.json");

const PORT = 8080;

ex.use(express.urlencoded({ extended: true }));
ex.use(express.json());

//metodo GET

ex.get("/api/users", (req, res) => {
  res.status(200).send({ success: true, users });
});

//metodo POST

ex.post("/api/new", (req, res) => {
  const { id, name, username, email, phone, website } = req.body;
  if (!id || !name || !username || !email || !phone || !website) {
    return res
      .status(400)
      .send("I dati inseriti non risultano validi, inserire dei dati corretti");
  }
  return res.status(201).json({
    success: true,
    newUsersList: [
      ...users,
      {
        id: id,
        name: name,
        username: username,
        email: email,
        phone: phone,
        website: website,
      },
    ],
  });
});

//metodo POST(2)

ex.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .send("I dati inseriti non risultano validi, inserire dei dati corretti");
  }
  return res.status(200).send("benvenuti al login " + name + "!");
});

//metodo PUT

ex.put("api/putUser/:id", (req, res) => {
  const id = req.params;
  const name = req.body;
  const person = users.find((user) => {
    user.id === Number(id);
  });
  if (!person) {
    return res
      .status(400)
      .send("I dati inseriti non risultano validi, inserire dei dati corretti");
  }
  const newPerson = users.forEach((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).send({ success: true, newPerson });
});

//metodo DELETE

ex.delete("api/delete/:id", (req, res) => {
  const person = users.filter((user) => {
    user.id === Number(req.params);
  });
  if (!person) {
    return res
      .status(400)
      .send("I dati inseriti non risultano validi, inserire dei dati corretti");
  }
  const newUsers = users.filter((person) => {
    person.id !== Number(req.params);
  });
  return res.status(200).json({ success: true, newUsers });
});

//chiamata

ex.listen(PORT, () => {
  console.log("server attivo");
});
