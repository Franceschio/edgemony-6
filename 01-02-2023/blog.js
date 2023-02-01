const http = require("http");
const PORT = 3001;
let art = "articoli";
let comm = "commenti";
let ut = "utenti";
let artT = "/articoli";
let commT = "/commenti";
let utT = "/utenti";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  if (req.url === "/" || req.url == artT) {
    res.end(art);
    console.log(`Il server ${PORT} è attivo`);
  } else if (req.url == commT) {
    res.end(comm);
    console.log(`Il server ${PORT} è attivo`);
  } else if (req.url == utT) {
    res.end(ut);
    console.log(`Il server ${PORT} è attivo`);
  } else {
    res.writeHead(404), { "content-type": "text/html" };
    res.end("pagina non trovata");
    console.log(`Il server ${PORT} non è attivo`);
  }
});

server.listen(PORT);
