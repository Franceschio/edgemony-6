//Esercizio base

// fetch("https://api.escuelajs.co/api/v1/products")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((item) => {
//       console.log("--------------> Oggetto: " + item.id);
//       console.log(item.title);
//       console.log(item.description);
//     });
//   });

//Esercizio avanzato
function createCard(obj) {
  const cardEl = document.createElement("div");
  const cardImageContainerEl = document.createElement("div");
  const cardImageEl = document.createElement("img");
  const cardTitleEl = document.createElement("h2");
  const cardDescriptionEl = document.createElement("p");
  cardEl.className = "card";
  cardTitleEl.classname = "cardTitle";
  cardDescriptionEl.classname = "cardDescription";
  cardImageContainerEl.className = "cardImageContainer";
  cardImageEl.className = "cardImage";
  cardContainerEl.appendChild(cardEl);
  cardImageContainerEl.appendChild(cardImageEl);
  cardEl.append(cardImageContainerEl, cardTitleEl, cardDescriptionEl);
  cardTitleEl.textContent = obj.title;
  cardDescriptionEl.textContent = obj.description;
  cardImageEl.setAttribute("src", obj.images);
  document.body.removeChild(loader);
}

const mainEl = document.body.querySelector("main");
const mainTitle = document.createElement("h1");
const cardContainerEl = document.createElement("div");
mainTitle.className = "mainTitle";
mainTitle.textContent = "I nostri prodotti";
cardContainerEl.className = "container";
let loader = document.createElement("p");
document.body.append(mainEl);
mainEl.append(mainTitle, cardContainerEl);
loader.textContent = "In attesa di risposta dal server..";
document.body.appendChild(loader);
loader.className = "loader";

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      document.body.appendChild(loader);
      createCard(item);
    });
  })
  .catch((error) => {
    loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
    console.error("Purtroppo è stato riscontrato un errore: ", error);
    loader.style.color = "red";
  });
