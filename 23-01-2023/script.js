import { cE, qS, app } from "./utils.js";

//Non riesco a capire perché, ma non mi compare nulla nostante il proccesso per appendere la quote sembrerebbe corretto...

const main = cE("main");
app(document.body, main);

const createQuote = (obj) => {
  const quoteEl = cE("div");
  const phraseCont = cE("div");
  const phraseEl = cE("p");
  const authorCont = cE("div");
  const authorEl = cE("h3");

  quoteEl.classname = "quote";
  phraseCont.classname = "phrase";
  authorCont.classname = "author";

  phraseEl.textcontent = obj.quote;
  authorEl.textcontent = obj.author;

  phraseCont.appendChild(phraseEl);
  authorCont.appendChild(authorEl);
  quoteEl.append(phraseCont, authorCont);
  app(document.body, quoteEl);
  return quoteEl;
};

const GET = async (baseURL, endpoint) => {
  const res = await fetch(baseURL + endpoint);
  const data = res.json();
  return data;
};

GET("https://dummyjson.com/", "quotes").then((data) => {
  main.append(createQuote(data.quotes[1]));
  console.log(data);
});
