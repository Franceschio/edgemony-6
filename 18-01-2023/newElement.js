const Form = document.querySelector("#Form");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");
const mainEl = document.querySelector("main");

//Esercizio base
// let formProperties = [];
// Form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   formProperties.push(
//     inputTitle.value,
//     parseInt(inputPrice.value),
//     parseInt(inputCategory.value),
//     inputDescription.value,
//     inputImage.value
//   );
//   formProperties.forEach((propertie) => console.log(propertie));
// });

//Esercizio avanzato

const cardCreator = (item) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.images);
  imgEl.setAttribute("alt", "card img");
  imgEl.className = "cardImg";

  const h3El = document.createElement("h3");
  h3El.className = "title";
  h3El.textContent = `${item.title.slice(0, 30)}`;

  const priceEl = document.createElement("h2");
  priceEl.className = "price";
  priceEl.textContent = `${item.price}.00$`;

  const descEl = document.createElement("p");
  descEl.className = "description";
  descEl.textContent = `${item.description.slice(0, 31)}`;

  cardEl.append(imgEl, h3El, priceEl, descEl);
  const laTuaCard = document.createElement("div");
  laTuaCard.appendChild(cardEl);
  mainEl.appendChild(laTuaCard);
};

function post(prod) {
  if (prod.categoryId > 8) {
    return alert("la categoryId non può essere più grande di 8");
  }
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(prod),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Risposta al POST ", data);
      const risposta = document.createElement("h1");
      risposta.textContent = `La tua card!`;
      mainEl.appendChild(risposta);
      mainEl.style.margin = "50px";
      const newProd = {
        title: inputTitle.value,
        price: inputPrice.value,
        description: inputDescription.value,
        categoryId: inputCategory.value,
        images: [inputImage.value],
      };
      cardCreator(newProd);
    })
    .catch((error) => {
      alert("Ci dispiace, è stato riscontrato un problema");
      console.warn(error);
      mainEl.removeChild(risposta);
      mainEl.removeChild(laTuaCard);
      const err = document.createElement("h1");
      error.textContent = `Sembrerebbe che ci sia un problema, ritenta inserendo i dati correttamente`;
      mainEl.appendChild(err);
    });
}

Form.addEventListener("submit", (event) => {
  const newProd = {
    title: inputTitle.value,
    price: inputPrice.value,
    description: inputDescription.value,
    categoryId: inputCategory.value,
    images: [inputImage.value],
  };
  event.preventDefault();
  post(newProd);
});
