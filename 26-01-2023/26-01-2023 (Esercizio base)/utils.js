const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const app = (type, element) => type.appendChild(element);

export { cE, qS, app };
