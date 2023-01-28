const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);
const app = (type, element) => type.append(element);

const cardCreator = (section) => {
  const cardEl = cE("div");
  const showImgEl = cE("img");

  cardEl.setAttribute("id", section.id);
  cardEl.className = "tvshow";

  if (section.poster_path) {
    showImgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${section.poster_path}`
    );
  }
  showImgEl.setAttribute("alt", section.name);
  app(cardEl, showImgEl);

  return cardEl;
};

export { qS, qSA, cE, app, cardCreator };
