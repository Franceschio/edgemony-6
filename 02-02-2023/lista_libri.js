const http = require("http");
const url = require("url");
const fs = require("fs");

let server = http.createServer((req, res) => {
  let page = url.parse(req.url).pathname;
  if (page === "/" || page === "/Homepage") {
    res.writeHead(200, { "content-type": "text/html" });
    let home = fs.readFileSync("./homePage.html");
    res.end(home);
    console.log("Server avviato");
  } else if (page === "/chiSono") {
    res.writeHead(200, { "content-type": "text/html" });
    let chiSono = fs.readFileSync("./chiSono.html");
    res.end(chiSono);
  } else if (page === "/booksAPI") {
    res.writeHead(200, { "content-type": "application/json" });
    let booksAPI = fs.readFileSync("./libri.json");
    res.end(booksAPI);
  } else {
    res.writeHead(400);
    res.end("pagina non trovata");
  }
});

server.listen(8090);

// Provato, tutto funzionante
