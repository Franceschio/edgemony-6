//esercizio base; ricreare la funzione calculator ma con le arrow functions

const calculatorSomma = (num1, num2) => num1 + num2;
const calculatorSottrazione = (num1, num2) => num1 - num2;
const calculatorMoltiplicazione = (num1, num2) => num1 * num2;
const calculatorDivisione = (num1, num2) => num1 / num2;

// console.log(calculatorSomma(3, 6));
// console.log(calculatorSottrazione(3, 6));
// console.log(calculatorMoltiplicazione(5, 5));
// console.log(calculatorDivisione(10, 2));

//esercizio base in unica arrow function
const calculatorTwo = (
  num1 = 4,
  num2 = 2,
  op = prompt("inserisci l'operazione che preferisci")
) => {
  if (op === "+") {
    return num1 + num2;
  } else if (op === "-") {
    return num1 - num2;
  } else if (op === "*") {
    return num1 * num2;
  } else if (op === "/") {
    return num1 / num2;
  } else {
    console.log("non so aiutarti");
  }
};

// console.log(calculatorTwo());

//esercizio avanzato; creare lo stesso esercizio ma con callback

const calculatorThree = (
  newNum1,
  newNum2,
  op = prompt("inserisci l'operazione che preferisci")
) => {
  if (op === "+") {
    return calculatorSomma(newNum1, newNum2);
  } else if (op === "-") {
    return calculatorSottrazione(newNum1, newNum2);
  } else if (op === "*") {
    return calculatorMoltiplicazione(newNum1, newNum2);
  } else if (op === "/") {
    return calculatorDivisione(newNum1, newNum2);
  } else {
    console.log("non so aiutarti");
  }
};

console.log(calculatorThree(3, 3));
