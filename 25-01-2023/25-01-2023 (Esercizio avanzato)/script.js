import { cE, qS } from "./utilities.js";
import myJson from "./mock.json" assert { type: "json" };

//Esercizio avanzato (percentuale delle todos completate e non completate)

const reminder = cE("p");
const main = qS("main");
const completed = qS(".completed");
const uncompleted = qS(".uncompleted");
const compCheck = qS("#comPercentage");
const uncompCheck = qS("#unPercentage");
let comp = 0;
let compMedia = 0;
let compPercentage = 0;
let uncomMedia = 0;
let uncomPercentage = 0;
let uncomp = 0;

myJson.todos.map((todo) => {
  if (todo.completed === true) {
    comp++;
    compMedia = (comp * 30) / 100;
    completed.style.height = `${compMedia * 50}px`;
    compPercentage = (comp * 300) / 100;
    compCheck.textContent = `${compPercentage}%`;
  }
  if (todo.completed === false) {
    uncomp++;
    uncomMedia = (uncomp * 30) / 100;
    uncompleted.style.height = `${uncomMedia * 50}px`;
    uncomPercentage = (uncomp * 300) / 100;
    uncompCheck.textContent = `${uncomPercentage}%`;
  }
});

if (compPercentage > uncomPercentage) {
  reminder.textContent = "You're going well! Keep this flow.";
  reminder.style.color = "#00d900";
  main.appendChild(reminder);
} else if (compPercentage < uncomPercentage) {
  reminder.textContent = "You must improve! don't give up!";
  reminder.style.color = "red";
  main.appendChild(reminder);
} else if (compPercentage === uncomPercentage) {
  reminder.textContent = "Well, not bad. But you can do more.";
  reminder.style.color = "yellow";
  main.appendChild(reminder);
}
