const express = require("express");
const ex = express();
const users = require("./mock.json");

const PORT = 8080;

ex.use(express.urlencoded({ extended: true }));
ex.use(express.json());

ex.get("/api/users", (req, res) => {
  res.status(200).send({ success: true, users });
});

ex.post("/api/users", (req, res) => {
  const { id, name, username, email, phone, website } = req.body;
  if (!id || !name || !username || !email || !phone || !website) {
    return res
      .status(400)
      .send("I dati inseriti non risultano validi, inserire dei dati corretti");
  }
  return res.status(200).json({
    success: true,
    newUser: {
      id: id,
      name: name,
      username: username,
      email: email,
      phone: phone,
      website: website,
    },
  });
});

ex.listen(PORT, () => {
  console.log("server attivo");
});
