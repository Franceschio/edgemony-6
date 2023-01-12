//esercizio base
import { todos, myTodos } from "./mock.js";

//1. metodo forEach per l'ID di ogni singolo elemento
let idPrint = (todoIdPrint) => console.log(todoIdPrint);

console.log("Esercizio base 1:");

todos.forEach((todo) => idPrint(todo.id));

//2. metodo map per inserire in una variabile gli userId, con console.log a parte

const userIdPrint = todos.map((todo) => todo.userId);

console.log("Esercizio base 2:");

console.log(userIdPrint);

//3. metodo filter che stampa in console.log solo gli ID maggiori di 4

console.log("Esercizio base 3:");

const filteredId = todos.filter((todo) => todo.id >= 4);
filteredId.forEach((todo) => idPrint(todo.id));

//esercizio avanzato (creare una todo list personale)

//(Ho modificato il todoGenerator in modo che la classe
//dell'isCompleted venga decisa tramite if anziché tramite toggle nell'addEventListener).

const qS = (element) => document.querySelector(element);
const cE = (type) => document.createElement(type);
const todoGenerator = (todoId, todoText, isCompleted, parent) => {
  const todoEl = cE("div");
  const isCompletedEl = cE("div");
  const textEl = cE("p");

  todoEl.setAttribute("id", todoId);
  todoEl.className = "todo";
  isCompletedEl.className = isCompleted ? "completed" : "uncompleted";
  textEl.textContent = todoText;
  todoEl.append(isCompletedEl, textEl);

  isCompletedEl.addEventListener("click", () => {
    if (isCompleted === true) {
      isCompletedEl.className = "uncompleted";
      isCompleted = false;
    } else if (isCompleted === false) {
      isCompletedEl.className = "completed";
      isCompleted = true;
    }
  });

  parent.appendChild(todoEl);
};

//Creazione della todoList personale e dei singoli todo

const bodyEl = qS("body");
const todoListEl = cE("div");
const todoListTitleEl = cE("h1");

todoListEl.className = "todo-list";
todoListTitleEl.className = "title";
todoListTitleEl.textContent = "Cose da fare";

bodyEl.append(todoListTitleEl, todoListEl);

myTodos.map((todo) =>
  todoGenerator(todo.id, todo.todo, todo.completed, todoListEl)
);
