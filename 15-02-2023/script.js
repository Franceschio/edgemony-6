const MongoClient = require("mongodb").MongoClient;
let url =
  "mongodb+srv://Ciccio105:<password>@cluster0.kevhv1n.mongodb.net/school?retryWrites=true";

//Avvio
MongoClient.connect(url)
  .then((db) => {
    accountsDb = db;
    collection = accountsDb.db("school");
    console.log("Connesso");
  })
  .catch((error) => {
    console.log(error);
  });

//Creazione
MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  let dbase = db.db("school");
  dbase.createCollection("professors", function (error, res) {
    if (error) throw error;
    console.log("Collection creata correttamente");
    db.close();
  });
});

//Inserimento di nuovi campi

MongoClient.connect(url, (error, db) => {
  if (error) throw error;
  let dbase = db.db("school");
  let newElement = [
    { nome: "Nino", cognome: "Ninni", materia: "matematica" },
    { nome: "Paolo", cognome: "Paoli", materia: "storia" },
  ];
  dbase.collection("professors").insertMany(newElement, (error, res) => {
    if (error) throw error;
    console.log("Record inseriti correttamente");
    db.close();
  });
});

//Selezione dei dati
MongoClient.connect(url, (error, db) => {
  if (error) throw error;
  let dbase = db.db("school");
  dbase.collection("students").findOne({ nome: "Mario" }, (error, res) => {
    if (error) throw error;
    console.log(`Il nome dello studente è: ${res.nome} ${res.cognome}`);
    db.close();
  });
});

//Eliminazione dei dati
MongoClient.connect(url, (error, db) => {
  if (error) throw error;
  let dbase = db.db("school");
  let query = { nome: "Nino" };
  dbase.collection("professors").deleteMany(query, function (error, obj) {
    if (error) throw error;
    console.log("Dato/i eliminato/i");
    db.close();
  });
});

//Aggiornamento dei dati
MongoClient.connect(url, (error, db) => {
  if (error) throw error;
  let dbase = db.db("school");
  let query = { nome: "Giuseppe" };
  let newValue = {
    $set: { corsi: ["matematica", "storia", "inglese", "arte", "arabo"] },
  };
  dbase
    .collection("students")
    .updateOne(query, newValue, function (error, res) {
      if (error) throw error;
      console.log("record aggiornati");
      db.close();
    });
});

//Tutti i risultati nella relativa cartella
