import { cE, qS, app } from "./utils.js";

//Esercizio base
const interval = setInterval(() => {
  countdwon--;
  if (countdwon === 0) {
    timerEl.remove();
    stopBtnEl.remove();
    document.body.style.backgroundColor = "red";
  }

  timerEl.textContent = `${countdwon}s`;
}, 1000);

const timerEl = qS("#timer");
const stopBtnEl = qS("#stopBtn");
let countdwon = 60;

timerEl.textContent = "1m";

stopBtnEl.addEventListener("click", () => clearInterval(interval));
