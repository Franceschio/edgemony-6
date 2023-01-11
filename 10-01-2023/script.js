//Esercizio base; creazione della hero tramite js

const bodyEl = document.body;
const heroEl = document.createElement("div");
const hero = document.createElement("div");
const imageHero = document.createElement("img");
const heroTitle = document.createElement("h1");
const heroDescription = document.createElement("p");

bodyEl.appendChild(hero);
heroEl.append(imageHero, heroTitle, heroDescription);
hero.appendChild(heroEl);

heroEl.className = "heroEl";
hero.className = "hero";
imageHero.className = "imageHero";
heroTitle.className = "heroTitle";
heroDescription.className = "heroDescription";

imageHero.setAttribute("src", "https://picsum.photos/id/1/800/800");
heroTitle.textContent = "Welcome back";
heroDescription.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

//Esercizio avanzato
const productListEl = document.createElement("div");
const mainEl = document.createElement("main");
const mainTitle = document.createElement("h1");
mainTitle.textContent = "I nostri prodotti";
mainEl.appendChild(mainTitle);
mainEl.className = "main";
bodyEl.appendChild(mainEl);
mainEl.appendChild(productListEl);
productListEl.className = "productListEl";

//oggetto dei prodotti
let products = [
  {
    id: 1,
    img: "https://picsum.photos/800/800?1",
    title: "Nome prodotto 1",
    descrption: "descrizione prodotto 1",
  },
  {
    id: 2,
    img: "https://picsum.photos/800/800?2",
    title: "Nome prodotto 2",
    descrption: "descrizione prodotto 2",
  },
  {
    id: 3,
    img: "https://picsum.photos/800/800?3",
    title: "Nome prodotto 3",
    descrption: "descrizione prodotto 3",
  },
  {
    id: 4,
    img: "https://picsum.photos/800/800?4",
    title: "Nome prodotto 4",
    descrption: "descrizione prodotto 4",
  },
];

//funzione per crearli
const createCard = (img, title, description) => {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h2");
  const descriptionEl = document.createElement("p");

  cardEl.className = "card";

  imgEl.className = "card__img";
  imgEl.setAttribute("src", img);

  titleEl.className = "card__title";
  titleEl.textContent = title;

  descriptionEl.className = "card__description";
  descriptionEl.textContent = description;

  cardEl.append(imgEl, titleEl, descriptionEl);
  productListEl.appendChild(cardEl);
};

//invocazione con for
for (let product of products) {
  createCard(product.img, product.title, product.descrption);
}
