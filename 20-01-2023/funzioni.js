//Comunicare col back-end

function post(prod, genre) {
  fetch(`https://api.escuelajs.co/api/v1/${genre}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(prod),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Risposta al POST ", data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(
          "qualcosa è andato storto, controlla che i dati inseriti siano corretti e ritenta."
        );
      } else {
        alert("Inserimento riuscito con successo!");
      }
    })
    .catch((error) => {
      alert("Ci dispiace, è stato riscontrato un problema");
      console.warn(error);
    });
}

function delet(id, genre) {
  fetch(`https://api.escuelajs.co/api/v1/${genre}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Risposta al DELETE ", data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert("qualcosa è andato storto, controlla l'id inserito e ritenta.");
      } else {
        alert("Cancellazione riuscita con successo!");
      }
    })
    .catch((error) => {
      alert("Ci dispiace, è stato riscontrato un problema");
      console.warn(error);
    });
}

function put(id) {
  fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Risposta al Put ", data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert("qualcosa è andato storto, controlla i dati inseriti e ritenta.");
      } else {
        alert("Modifica riuscita con successo!");
      }
    })
    .catch((error) => {
      alert("Ci dispiace, è stato riscontrato un problema");
      console.warn(error);
    });
}

export { post, delet, put };
