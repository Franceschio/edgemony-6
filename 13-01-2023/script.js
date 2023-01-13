//esercizio base

const images = [
  "https://picsum.photos/id/243/800/800",
  "https://picsum.photos/id/376/800/800",
  "https://picsum.photos/id/456/800/800",
];

const imageMainEl = document.querySelector(".mainImage");
const circle1El = document.querySelector("#circle1");
const circle2El = document.querySelector("#circle2");
const circle3El = document.querySelector("#circle3");

imageMainEl.setAttribute("src", images[0]);

circle1El.className = "checked";
circle2El.className = "unchecked";
circle3El.className = "unchecked";

circle1El.addEventListener("click", () => {
  imageMainEl.setAttribute("src", images[0]);
  circle1El.className = "checked";
  circle2El.className = "unchecked";
  circle3El.className = "unchecked";
});

circle2El.addEventListener("click", () => {
  imageMainEl.setAttribute("src", images[1]);
  circle2El.className = "checked";
  circle1El.className = "unchecked";
  circle3El.className = "unchecked";
});

circle3El.addEventListener("click", () => {
  imageMainEl.setAttribute("src", images[2]);
  circle3El.className = "checked";
  circle2El.className = "unchecked";
  circle1El.className = "unchecked";
});

// circle1El.addEventListener("click", () => {
//   imageMainEl.setAttribute("src", images[0]);
//   circle1El.style.backgroundColor = "blueviolet";
//   circle2El.style.backgroundColor = "white";
//   circle3El.style.backgroundColor = "white";
// });
// circle2El.addEventListener("click", () => {
//   imageMainEl.setAttribute("src", images[1]);
//   circle2El.style.backgroundColor = "blueviolet";
//   circle1El.style.backgroundColor = "white";
//   circle3El.style.backgroundColor = "white";
// });
// circle3El.addEventListener("click", () => {
//   imageMainEl.setAttribute("src", images[2]);
//   circle3El.style.backgroundColor = "blueviolet";
//   circle2El.style.backgroundColor = "white";
//   circle1El.style.backgroundColor = "white";
// });
