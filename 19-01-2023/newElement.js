const Form = document.querySelector("#Form");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");
const mainEl = document.querySelector("main");

const formdue = document.querySelector("#formDue");
const inputCategoryDue = document.querySelector("#categoryDue");
const inputImageDue = document.querySelector("#imageDue");

function post(prod, genre) {
  fetch(`https://api.escuelajs.co/api/v1/${genre}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(prod),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Risposta al POST ", data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(
          "qualcosa è andato storto, controlla che i dati inseriti siano corretti e ritenta."
        );
      } else {
        alert("Inserimento riuscito con successo!");
      }
    })
    .catch((error) => {
      alert("Ci dispiace, è stato riscontrato un problema");
      console.warn(error);
    });
}

Form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newProd = {
    title: inputTitle.value,
    price: inputPrice.value,
    description: inputDescription.value,
    categoryId: inputCategory.value,
    images: [inputImage.value],
  };
  post(newProd, "products");
});

formdue.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCategory = {
    name: inputCategoryDue.value,
    image: inputImageDue.value,
  };
  post(newCategory, "categories");
});
