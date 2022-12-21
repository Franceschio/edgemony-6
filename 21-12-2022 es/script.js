// esercizio 1

function bootcamp(frase = "Francesco frequenta il ") {
  console.log(frase + "bootcamp");
}

bootcamp();

// esercizio 2

let Francesco = {
  nome: "Francesco",
  cognome: " Coppola",
  anni: 20,
  patente: true,
  coloriPreferiti: ["verde", "nero", "viola"],
  mangiare: function () {
    console.log(this.nome + this.cognome + " sta mangiando");
  },
  dormire: function () {
    console.log(this.nome + this.cognome + " sta dormendo");
  },
  dataDiNascita: function (annoCorrente) {
    annoCorrente = parseInt(prompt("inserire l'anno corrente"));
    console.log(this.nome + " è nato nel " + (annoCorrente - this.anni));
  },
  puoGuidare: function () {
    if (this.anni >= 18 && this.patente === true) {
      console.log("Si, " + this.nome + " può guidare");
    } else {
      console.log("No, " + this.nome + " non può guidare");
    }
  },
  elencoColori: function () {
    console.log(
      "I colori preferiti di " +
        this.nome +
        " sono: " +
        this.coloriPreferiti[0] +
        ", " +
        this.coloriPreferiti[1] +
        " e " +
        this.coloriPreferiti[2]
    );
  },
};

Francesco.mangiare();
Francesco.dormire();
Francesco.dataDiNascita();
Francesco.puoGuidare();
Francesco.elencoColori();

// esercizio avanzato 1 e avanzato 2

let calculator = function (result) {
  let opMatematica = prompt("inserisci l'operazione matematica che preferisci");
  let num1 = +prompt("inserisci un numero");
  let num2 = +prompt("inserisci un altro numero");
  if (opMatematica === "+" || opMatematica === "addizione") {
    result = num1 + num2;
  } else if (opMatematica === "-" || opMatematica === "sottrazione") {
    result = num1 - num2;
  } else if (opMatematica === "*" || opMatematica === "moltiplicazione") {
    result = num1 * num2;
  } else if (opMatematica === "/" || opMatematica === "divisione") {
    result = num1 / num2;
  } else {
    result = "indeterminabile, inserisci dei campi validi";
  }
  //   sinsolarmente
  //   arr.push(num1);
  //   arr.push(num2);

  // in coppia
  arr.push(num1, num2);

  return result;
};

let arr = [];

console.log("Il risulato del calcolo è " + calculator());

console.log(arr);
