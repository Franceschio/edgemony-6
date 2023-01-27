const GET = async (baseURL, genre, resource, APIkey) => {
  const res = await fetch(baseURL + genre + resource + "?api_key=" + APIkey);
  const data = res.json();
  return data;
};

export { GET };
