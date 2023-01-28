import { GET } from "./api.js";
import { qS, qSA, cE, app, cardCreator } from "./utils.js";

const popular = qS(".popular");
const topRated = qS(".top");
const on_the_air = qS(".on_the_air");

Promise.all([
  GET("https://api.themoviedb.org/3/", "tv/", "popular", "<<APIKEY>>"),
  GET("https://api.themoviedb.org/3/", "tv/", "top_rated", "<<APIKEY>>"),
  GET("https://api.themoviedb.org/3/", "tv/", "on_the_air", "<<APIKEY>>"),
]).then((data) => {
  data[0].results.map((tv) => app(popular, cardCreator(tv)));
  data[1].results.map((tv) => app(topRated, cardCreator(tv)));
  data[2].results.map((tv) => app(on_the_air, cardCreator(tv)));
});
