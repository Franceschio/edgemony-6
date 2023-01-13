//esercizio avanzato

const sliderEl = document.createElement("section");
const illustratorEl = document.createElement("div");
const imageContainerEl = document.createElement("div");
const imageEl = document.createElement("img");
const circlesEl = document.createElement("div");
const circle1El = document.createElement("div");
const circle2El = document.createElement("div");
const circle3El = document.createElement("div");
const images = [
  "https://picsum.photos/id/243/800/800",
  "https://picsum.photos/id/376/800/800",
  "https://picsum.photos/id/456/800/800",
];

sliderEl.append(illustratorEl, circlesEl);
document.body.appendChild(sliderEl);
circlesEl.append(circle1El, circle2El, circle3El);
illustratorEl.appendChild(imageContainerEl);
imageContainerEl.appendChild(imageEl);

sliderEl.className = "slider";
illustratorEl.className = "illustration";
imageContainerEl.className = "sliderImage";
imageEl.className = "mainImage";
circlesEl.className = "circlesContainer";
circle1El.id = "circle1";
circle2El.id = "circle2";
circle3El.id = "circle3";

imageEl.setAttribute("src", images[0]);

circle1El.className = "checked";
circle2El.className = "unchecked";
circle3El.className = "unchecked";

circle1El.addEventListener("click", () => {
  imageEl.setAttribute("src", images[0]);
  circle1El.className = "checked";
  circle2El.className = "unchecked";
  circle3El.className = "unchecked";
});

circle2El.addEventListener("click", () => {
  imageEl.setAttribute("src", images[1]);
  circle2El.className = "checked";
  circle1El.className = "unchecked";
  circle3El.className = "unchecked";
});

circle3El.addEventListener("click", () => {
  imageEl.setAttribute("src", images[2]);
  circle3El.className = "checked";
  circle2El.className = "unchecked";
  circle1El.className = "unchecked";
});
