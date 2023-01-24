const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const app = (type, element) => type.appendChild(element);

const GET = async (baseURL, endpoint) => {
  const res = await fetch(baseURL + endpoint);
  const data = res.json();
  return data;
};

export { GET, cE, qS, app };
