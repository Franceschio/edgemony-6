const http = require("http");
const os = require("os");
const fs = require("fs");

let prodotti = fs.readFileSync("prodotti.html");
let servizi = fs.readFileSync("servizi.html");

let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();
let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
<h1>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</h1>
<a href = "${prodotti}"></a>
<a href = "${servizi}"></a>
</body>
</html>`;
const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/utente") {
    res.end(messaggio);
  } else if (req.url === "/prodotti") {
    res.end(prodotti);
  } else if (req.url === "/servizi") {
    res.end(servizi);
  }
});

server.listen(3001);
