function filtroPrezzo(prezzo) {
  productsList.innerHTML = "";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      productsList.appendChild(loader);
      data.forEach((el) => {
        if (parseInt(el.price) < prezzo) {
          cardCreator(el);
        }
      });
      productsList.removeChild(loader);
    })
    .catch((error) => {
      loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
      console.error("Purtroppo è stato riscontrato un errore: ", error);
      loader.style.color = "red";
    });
}

function creatoreFiltro(prezzo) {
  const filtratore = document.createElement("li");
  filtratore.textContent = `Meno di ${prezzo}€`;
  prezziFiltrati.appendChild(filtratore);
  filtratore.addEventListener("click", () => {
    filtroPrezzo(prezzo);
  });
}

const cartpopulator = (obj) => {
  const newObj = {
    id: obj.id,
    title: obj.title,
    price: obj.price,
    images: obj.images,
    qty: 1,
  };

  const search = cart.filter((element) => {
    if (element.id === newObj.id) {
      element.qty++;
      element.price = parseInt(element.price) * parseInt(element.qty);
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  cartCreator();
};

const cardCreator = (item) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.images);
  imgEl.setAttribute("alt", "card img");
  imgEl.className = "cardImg";

  const h2El = document.createElement("h3");
  h2El.className = "title";
  h2El.textContent = `${item.title}`;

  const priceEl = document.createElement("h2");
  priceEl.className = "price";
  priceEl.textContent = `${item.price}€`;

  const descEl = document.createElement("p");
  descEl.className = "description";
  descEl.textContent = item.description;

  const addBtn = document.createElement("button");
  addBtn.textContent = "Aggiungi al carrello";

  addBtn.addEventListener("click", () => {
    cartTotPrice = 0;
    cartpopulator(item);
  });

  cardEl.append(imgEl, h2El, priceEl, descEl, addBtn);
  productsList.appendChild(cardEl);
};

const cartCreator = () => {
  tendina.innerHTML = "";
  cart.forEach((item, index) => {
    function deleteCartProduct() {
      tendina.removeChild(cartEl);
      cart.splice(index, 1);
      cartTotalQty = cartTotalQty - item.qty;
      circle.innerHTML = "";
      circle.textContent = cartTotalQty;
      if (cartTotalQty < 1) {
        circle.style.display = "none";
      } else {
        circle.style.display = "flex";
      }

      cartTotPrice = cartTotPrice - item.price;
      tot.textContent = "Tot. carrello: " + cartTotPrice + "€";

      if (cart.length < 1) {
        tendina.style.display = "none";
        tendinaButton.style.display = "none";
      } else if (cart.length >= 1) {
        tendina.style.display = "flex";
        tendinaButton.style.display = "inherit";
      }
    }
    cartTotPrice = cartTotPrice + parseInt(item.price);
    const cartEl = document.createElement("div");
    const cartProductImgContainer = document.createElement("div");
    const cartProductImg = document.createElement("img");
    const cartProductH5 = document.createElement("h5");
    const cartElQntCont = document.createElement("div");
    const qntUp = document.createElement("h6");
    const qntPop = document.createElement("h6");
    const cartElQnt = document.createElement("p");
    const cartElPrice = document.createElement("p");
    const cartDelete = document.createElement("div");
    cartEl.className = "cartProduct";
    cartDelete.className = "cartDelete";
    cartElQnt.className = "cartProductQuantity";
    cartElQnt.textContent = `X${item.qty}`;
    cartDelete.textContent = "X";
    cartProductImg.setAttribute("src", item.images);
    cartProductH5.textContent = item.title;
    cartElPrice.textContent = item.price + "€";
    cartElPrice.className = "cartPrice";
    cartProductImgContainer.className = "cartImgContainer";
    cartElQntCont.className = "qntContainer";
    qntUp.textContent = "+";
    qntUp.id = "qntUp";
    qntPop.textContent = "-";
    qntPop.id = "qntPop";
    cartProductImgContainer.appendChild(cartProductImg);
    cartElQntCont.append(qntUp, cartElQnt, qntPop);
    cartEl.append(
      cartProductImgContainer,
      cartProductH5,
      cartElPrice,
      cartElQntCont,
      cartDelete
    );
    tendina.append(cartEl, tot, tendinaButton);
    cartDelete.addEventListener("click", deleteCartProduct);
    qntUp.addEventListener("click", () => {
      cartTotPrice = cartTotPrice - parseInt(item.price);
      if (item.qty > 1) {
        item.price =
          parseInt(item.price) -
          (parseInt(item.price) * parseInt(item.qty - 1)) / parseInt(item.qty);
      }
      item.qty++;
      item.price = parseInt(item.price) * parseInt(item.qty);
      cartTotPrice = cartTotPrice + parseInt(item.price);
      tot.textContent = "Tot. carrello: " + cartTotPrice + "€";
      cartElQnt.textContent = `X${item.qty}`;
      cartTotalQty++;
      circle.innerHTML = "";
      circle.textContent = cartTotalQty;
    });
    qntPop.addEventListener("click", () => {
      cartTotPrice = cartTotPrice - parseInt(item.price);
      item.price =
        parseInt(item.price) - parseInt(item.price) / parseInt(item.qty);
      item.qty--;
      cartTotPrice = cartTotPrice + parseInt(item.price);
      tot.textContent = "Tot. carrello: " + cartTotPrice + "€";
      if (item.qty < 1) {
        deleteCartProduct();
      }
      cartElQnt.textContent = `X${item.qty}`;
      cartTotalQty--;
      circle.innerHTML = "";
      circle.textContent = cartTotalQty;
      if (cartTotalQty < 1) {
        circle.style.display = "none";
      } else {
        circle.style.display = "flex";
      }

      if (cart.length < 1) {
        tendina.style.display = "none";
        tendinaButton.style.display = "none";
      } else if (cart.length >= 1) {
        tendina.style.display = "flex";
        tendinaButton.style.display = "inherit";
      }
    });
  });
  tot.textContent = "";
  tot.textContent = "Tot. carrello: " + cartTotPrice + "€";
  cartTotalQty++;
  circle.innerHTML = "";
  circle.textContent = cartTotalQty;
  if (cartTotalQty < 1) {
    circle.style.display = "none";
  } else {
    circle.style.display = "flex";
  }

  if (cart.length < 1) {
    tendina.style.display = "none";
    tendinaButton.style.display = "none";
  } else if (cart.length >= 1) {
    tendina.style.display = "flex";
    tendinaButton.style.display = "inherit";
  }

  alert("Prodotto aggiunto correttamente al carrello");
};

const hamburgerBtn = document.querySelector(".hamburger");
const tendina = document.querySelector(".menuTendina");
const container = document.querySelector(".container");
const productsList = document.querySelector(".products");
const footer = document.querySelector("footer");
const tendinaButton = document.querySelector(".tendinaButton");
const tutteCategorie = document.querySelector("#tutteCategorie");
const tuttiPrezzi = document.querySelector("#tuttiPrezzi");
const loadercontainer = document.querySelector("#loading");
const listaCategorie = document.querySelector(".categorie");
const ulCategorie = document.createElement("ul");
const circle = document.querySelector(".circle");
const prezziFiltrati = document.querySelector(".prezzi");
const tot = document.querySelector("#tot");
listaCategorie.appendChild(ulCategorie);
let cart = [];
let categories = [
  {
    id: 1,
    name: "Clothes",
    image: "https://api.lorem.space/image/fashion?w=640&h=480&r=1849",
    creationAt: "2023-01-20T04:15:12.000Z",
    updatedAt: "2023-01-20T04:15:12.000Z",
  },
  {
    id: 2,
    name: "Electronics",
    image: "https://api.lorem.space/image/watch?w=640&h=480&r=9176",
    creationAt: "2023-01-20T04:15:12.000Z",
    updatedAt: "2023-01-20T04:15:12.000Z",
  },
  {
    id: 3,
    name: "Furniture",
    image: "https://api.lorem.space/image/furniture?w=640&h=480&r=203",
    creationAt: "2023-01-20T04:15:12.000Z",
    updatedAt: "2023-01-20T04:15:12.000Z",
  },
  {
    id: 4,
    name: "Shoes",
    image: "https://api.lorem.space/image/shoes?w=640&h=480&r=4061",
    creationAt: "2023-01-20T04:15:12.000Z",
    updatedAt: "2023-01-20T04:15:12.000Z",
  },
  {
    id: 5,
    name: "Others",
    image: "https://api.lorem.space/image?w=640&h=480&r=8733",
    creationAt: "2023-01-20T04:15:12.000Z",
    updatedAt: "2023-01-20T04:15:12.000Z",
  },
  {
    id: 6,
    name: "pippo",
    image: "https://picsum.photos/200/300",
    creationAt: "2023-01-20T08:34:56.000Z",
    updatedAt: "2023-01-20T08:34:56.000Z",
  },
];
let prezzi = [20, 50, 100, 500, 1000];
let cartTotalQty = 0;
let cartTotPrice = 0;
let loader = document.createElement("p");
loader.id = "loader";
loader.textContent = "In attesa di risposta dal server...";
loadercontainer.appendChild(loader);

if (cartTotalQty < 1) {
  circle.style.display = "none";
} else {
  circle.style.display = "flex";
}

if (cart.length < 1) {
  tendina.style.display = "none";
  tendinaButton.style.display = "none";
} else if (cart.length >= 1) {
  tendina.style.display = "flex";
  tendinaButton.style.display = "inherit";
}

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      cardCreator(el);
    });
    loadercontainer.removeChild(loader);
  })
  .catch((error) => {
    loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
    console.error("Purtroppo è stato riscontrato un errore: ", error);
    loader.style.color = "red";
  });

categories.forEach((cat) => {
  const listedCategory = document.createElement("li");
  const category = {
    id: cat.id,
    name: cat.name,
    image: cat.image,
    creationAt: cat.creationAt,
    updatedAt: cat.updatedAt,
  };
  listedCategory.textContent = category.name;
  ulCategorie.appendChild(listedCategory);
  listedCategory.addEventListener("click", () => {
    productsList.innerHTML = "";
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        loadercontainer.appendChild(loader);
        const filteredcategory = data.filter(
          (obj) => obj.category.id === category.id
        );
        filteredcategory.forEach((obj) => {
          cardCreator(obj);
        });
        loadercontainer.removeChild(loader);
      })
      .catch((error) => {
        loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
        console.error("Purtroppo è stato riscontrato un errore: ", error);
        loader.style.color = "red";
      });
  });
});

for (let i = 0; i < prezzi.length; i++) {
  creatoreFiltro(prezzi[i]);
}

hamburgerBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

tutteCategorie.addEventListener("click", () => {
  productsList.innerHTML = "";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((el) => {
        cardCreator(el);
      });
    })
    .catch((error) => {
      loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
      console.error("Purtroppo è stato riscontrato un errore: ", error);
      loader.style.color = "red";
    });
});

tuttiPrezzi.addEventListener("click", () => {
  productsList.innerHTML = "";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((el) => {
        cardCreator(el);
      });
    })
    .catch((error) => {
      loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
      console.error("Purtroppo è stato riscontrato un errore: ", error);
      loader.style.color = "red";
    });
});
