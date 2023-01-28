import { qS, qSA, cE, app, cardCreator } from "./utils.js";

const GET = async (baseURL, genre, resource, APIkey, query) => {
  const res = await fetch(
    baseURL + genre + resource + "?api_key=" + APIkey + "&query=" + query
  );
  const data = res.json();
  return data;
};

function searchShow() {
  searchs.innerHTML = "";
  GET(
    "https://api.themoviedb.org/3/",
    "search/",
    "tv",
    "<<APIKEY>>",
    search.value
  ).then((data) => {
    console.log(data);
    data.results.map((tv) => {
      app(searchs, cardCreator(tv));
    });
  });
}

const searchBtn = qS("#searchBtn");
const main = qS("main");
const search = qS("#search");
const searchs = qS(".searchs");

searchBtn.addEventListener("click", searchShow);
