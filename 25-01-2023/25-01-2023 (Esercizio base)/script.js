import { cE, qS, app } from "./utils.js";
import myJson from "./mock.json" assert { type: "json" };

//Esercizio base (Ho ricreato l'esercizio delle quote ma utilizzando il file Json)

function deleteQuote() {
  const quote = document.querySelector("#quote");
  quote.remove();
}

const createQuote = (obj) => {
  const quoteEl = cE("div");
  const phraseCont = cE("div");
  const phraseEl = cE("p");
  const authorCont = cE("div");
  const authorEl = cE("h3");

  quoteEl.id = "quote";
  phraseCont.id = "phrase";
  authorCont.id = "author";
  changePhrase.id = "changePhrase";

  phraseEl.textContent = obj.quote;
  authorEl.textContent = `~${obj.author}`;

  phraseCont.appendChild(phraseEl);
  authorCont.appendChild(authorEl);
  quoteEl.append(phraseCont, authorCont);
  return quoteEl;
};

const main = cE("main");
const changePhrase = cE("button");
changePhrase.textContent = "Change phrase";
app(document.body, main);
app(main, changePhrase);

let i = Math.floor(Math.random() * 30);

main.append(createQuote(myJson.quotes[i]));

changePhrase.addEventListener("click", () => {
  deleteQuote();
  i = Math.floor(Math.random() * 30);
  main.append(createQuote(myJson.quotes[i]));
});
