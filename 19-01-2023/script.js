const cardCreator = (item) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.images);
  imgEl.setAttribute("alt", "card img");
  imgEl.className = "cardImg";

  const h1El = document.createElement("h2");
  h1El.className = "title";
  h1El.textContent = `${item.title.slice(0, 11)}...`;

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = `${item.price}$`;

  const descEl = document.createElement("p");
  descEl.className = "description";
  descEl.textContent = `${item.description.slice(0, 31)}...`;

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add to cart";

  addBtn.addEventListener("click", () => {
    cart.push(item);
    cartCreator();
  });

  cardEl.append(imgEl, h1El, priceEl, descEl, addBtn);
  productsList.appendChild(cardEl);
};

const cartCreator = () => {
  tendina.innerHTML = "";
  cart.forEach((item, index) => {
    function deleteCartProduct() {
      tendina.removeChild(cartEl);
      cart.splice(index, 1);
      cartTotalQty--;
      circle.innerHTML = "";
      circle.textContent = cartTotalQty;
      if (cartTotalQty < 1) {
        circle.style.display = "none";
      } else {
        circle.style.display = "flex";
      }
    }
    const cartEl = document.createElement("div");
    const cartProductImgContainer = document.createElement("div");
    const cartProductImg = document.createElement("img");
    const cartProductH5 = document.createElement("h5");
    const cartElQnt = document.createElement("p");
    const cartDelete = document.createElement("div");
    cartEl.className = "cartProduct";
    cartDelete.className = "cartDelete";
    cartElQnt.className = "cartProductQuantity";
    cartDelete.textContent = "X";
    cartProductImg.setAttribute("src", item.images);
    cartProductH5.textContent = item.title;
    cartProductImgContainer.className = "cartImgContainer";
    cartProductImgContainer.appendChild(cartProductImg);
    cartEl.append(cartProductImgContainer, cartProductH5, cartDelete);
    tendina.append(cartEl, tendinaButton);
    cartDelete.addEventListener("click", deleteCartProduct);
  });
  cartTotalQty++;
  circle.innerHTML = "";
  circle.textContent = cartTotalQty;
  if (cartTotalQty < 1) {
    circle.style.display = "none";
  } else {
    circle.style.display = "flex";
  }
  alert("Prodotto aggiunto correttamente al carrello");
};

const hamburgerBtn = document.querySelector(".hamburger");
const tendina = document.querySelector(".menuTendina");
const productsList = document.querySelector(".products");
const footer = document.querySelector("footer");
const tendinaButton = document.querySelector(".tendinaButton");
const tutteLeCategorie = document.querySelector("#tutte");
const categoriaPrima = document.querySelector("#cateogoriaUno");
const categoriaSeconda = document.querySelector("#cateogoriaDue");
const categoriaTerza = document.querySelector("#cateogoriaTre");
const circle = document.querySelector(".circle");
let cart = [];
let cartTotalQty = 0;
let loader = document.createElement("p");
loader.textContent = "In attesa di risposta dal server...";

if (cartTotalQty < 1) {
  circle.style.display = "none";
} else {
  circle.style.display = "flex";
}

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    productsList.appendChild(loader);
    data.forEach((el) => {
      cardCreator(el);
    });
    productsList.removeChild(loader);
  })
  .catch((error) => {
    loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
    console.error("Purtroppo è stato riscontrato un errore: ", error);
    loader.style.color = "red";
  });

hamburgerBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

tutteLeCategorie.addEventListener("click", () => {
  productsList.innerHTML = "";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      productsList.appendChild(loader);
      data.forEach((el) => {
        cardCreator(el);
      });
      productsList.removeChild(loader);
    })
    .catch((error) => {
      loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
      console.error("Purtroppo è stato riscontrato un errore: ", error);
      loader.style.color = "red";
    });
});

categoriaPrima.addEventListener("click", () => {
  productsList.innerHTML = "";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      productsList.appendChild(loader);
      const categoriaUno = data.filter((obj) => obj.category.id === 1);
      categoriaUno.forEach((obj) => {
        cardCreator(obj);
      });
      productsList.removeChild(loader);
    })
    .catch((error) => {
      loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
      console.error("Purtroppo è stato riscontrato un errore: ", error);
      loader.style.color = "red";
    });
});

categoriaSeconda.addEventListener("click", () => {
  productsList.innerHTML = "";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      productsList.appendChild(loader);
      const categoriaDue = data.filter((obj) => obj.category.id === 2);
      categoriaDue.forEach((obj) => {
        cardCreator(obj);
      });
      productsList.removeChild(loader);
    })
    .catch((error) => {
      loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
      console.error("Purtroppo è stato riscontrato un errore: ", error);
      loader.style.color = "red";
    });
});

categoriaTerza.addEventListener("click", () => {
  productsList.innerHTML = "";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      productsList.appendChild(loader);
      const categoriaTre = data.filter((obj) => obj.category.id === 3);
      categoriaTre.forEach((obj) => {
        cardCreator(obj);
      });
      productsList.removeChild(loader);
    })
    .catch((error) => {
      loader.textContent = `Ops, qualcosa è andato storto: ${error}`;
      console.error("Purtroppo è stato riscontrato un errore: ", error);
      loader.style.color = "red";
    });
});
