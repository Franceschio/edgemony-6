import { post, delet, put } from "./funzioni.js";

const Form = document.querySelector("#Form");
const FormM = document.querySelector("#FormM");
const formdue = document.querySelector("#formDue");
const formTre = document.querySelector("#formTre");
const formTreC = document.querySelector("#formTreC");
const mainEl = document.querySelector("main");

Form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newProd = {
    title: event.target[0].value,
    price: event.target[1].value,
    description: event.target[4].value,
    categoryId: event.target[2].value,
    images: [event.target[3].value],
  };
  post(newProd, "products");
});

FormM.addEventListener("submit", (event) => {
  event.preventDefault();
  const newProd = {
    id: event.target[0].value,
    title: event.target[1].value,
    price: event.target[2].value,
    description: event.target[5].value,
    categoryId: event.target[3].value,
    images: [event.target[4].value],
  };
  put(newProd.id);
});

formdue.addEventListener("submit", (event) => {
  const newCategory = {
    name: event.target[0].value,
    image: event.target[1].value,
  };
  event.preventDefault();
  post(newCategory, "categories");
});

formTre.addEventListener("submit", (event) => {
  event.preventDefault();
  delet(event.target[0].value, "products");
});

formTreC.addEventListener("submit", (event) => {
  event.preventDefault();
  delet(event.target[0].value, "categories");
});
