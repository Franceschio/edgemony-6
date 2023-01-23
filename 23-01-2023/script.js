import { cE, qS, app } from "./utils.js";

//Esercizio base

// const main = cE("main");
// app(document.body, main);

// const createQuote = (obj) => {
//   const quoteEl = cE("div");
//   const phraseCont = cE("div");
//   const phraseEl = cE("p");
//   const authorCont = cE("div");
//   const authorEl = cE("h3");

//   quoteEl.id = "quote";
//   phraseCont.id = "phrase";
//   authorCont.id = "author";

//   phraseEl.textContent = obj.quote;
//   authorEl.textContent = `~${obj.author}`;

//   phraseCont.appendChild(phraseEl);
//   authorCont.appendChild(authorEl);
//   quoteEl.append(phraseCont, authorCont);
//   return quoteEl;
// };

// const GET = async (baseURL, endpoint) => {
//   const res = await fetch(baseURL + endpoint);
//   const data = res.json();
//   return data;
// };

// GET("https://dummyjson.com/", "quotes").then((data) => {
//   main.append(createQuote(data.quotes[1]));
//   console.log(data);
// });

//Esercizio avanzato

const main = cE("main");
app(document.body, main);

let i = 1;

const createQuote = (obj) => {
  const quoteEl = cE("div");
  const phraseCont = cE("div");
  const phraseEl = cE("p");
  const authorCont = cE("div");
  const authorEl = cE("h3");
  const changePhrase = cE("button");

  quoteEl.id = "quote";
  phraseCont.id = "phrase";
  authorCont.id = "author";
  changePhrase.id = "changePhrase";

  phraseEl.textContent = obj.quote;
  authorEl.textContent = `~${obj.author}`;
  changePhrase.textContent = "Cambia frase";

  changePhrase.addEventListener("click", () => {
    i = Math.floor(Math.random(1) * 30);
    GET("https://dummyjson.com/", "quotes").then((data) => {
      main.innerHTML = "";
      main.append(createQuote(data.quotes[i]));
      console.log(data);
    });
  });

  phraseCont.appendChild(phraseEl);
  authorCont.appendChild(authorEl);
  quoteEl.append(phraseCont, authorCont);
  app(main, changePhrase);
  return quoteEl;
};

const GET = async (baseURL, endpoint) => {
  const res = await fetch(baseURL + endpoint);
  const data = res.json();
  return data;
};

GET("https://dummyjson.com/", "quotes").then((data) => {
  main.append(createQuote(data.quotes[i]));
  console.log(data);
});
