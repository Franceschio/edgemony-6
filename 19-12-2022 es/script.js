let userPromptuno = prompt("inserire un numero: ");
let userPromptdue = prompt("inserisci un altro numero: ");

let userIntuno = parseInt(userPromptuno);
let userIntdue = parseInt(userPromptdue);

userIntuno === 0
  ? alert("il tuo primo numero è 0!")
  : alert("il tuo primo numero è maggiore di zero");

userIntdue === 0
  ? alert("il tuo secondo numero è 0!")
  : alert("il tuo secondo numero è maggiore di zero");

let richiesta = prompt("inserire preferenza");

if (richiesta == "addizione") {
  let somma = userIntuno + userIntdue;
  alert(" la somma dei tuoi numeri è " + somma);
  console.log("Risultato: " + somma);
} else if (richiesta == "sottrazione") {
  let sottrazione = userIntuno - userIntdue;
  alert("la sottrazione dei tuoi numeri è " + sottrazione);
  console.log("Risultato: " + sottrazione);
} else if (richiesta !== "addizione" || richiesta !== "sottrazione") {
  switch (richiesta) {
    case "moltiplicazione":
      console.log("non so risponderti!");
      alert("non so fare le moltiplicazioni!");
      break;
    case "divisione":
      console.log("non so risponderti!");
      alert("non so fare le divisioni!");
      break;
    default:
      console.log("non so risponderti!");
      alert("non è una preferenza valida!");
  }
}
