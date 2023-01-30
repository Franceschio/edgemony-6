//metodo require() => richiamo il modulo built-in

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/paginainiziale") res.end("Benvenuto nella pagina iniziale!");
  else if (req.url == "/studenti") res.end("Studenti");
  else if (req.url == "/corsi") res.end("I nostri corsi");
  else {
    res.writeHead(404);
    res.end("pagina non trovata");
  }
});

server.listen(3000);

//I tre percorsi:
//localhost:3000/Paginainiziale
//localhost:3000/Studenti
//localhost:3000/Corsi
//Provato, funziona tutto correttamente
