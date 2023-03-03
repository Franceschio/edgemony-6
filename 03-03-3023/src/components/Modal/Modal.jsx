import "./index.css";

// import { useEffect, useState } from "react";

const Modal = ({ dataPost, modalOpen }) => {
  const closeModal = () => {
    modalOpen(null);
  };

  return (
    <div className="Modal">
      <div className="quitModal" onClick={closeModal}></div>
      <div className="modalPost">
        <div className="quitModalBtn" onClick={closeModal}>
          X
        </div>
        <h1>{dataPost.title}</h1>
        <p>{dataPost.body}</p>
        <div className="tags">
          {dataPost.tags.map((tag) => (
            <span key={tag}> {tag} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

//Altro metodo

// const Modal = ({ dataPost, modalOpen }) => {
//   const closeModal = () => {
//     modalOpen = false;
//     setModalOpen(modalOpen);
//   };

//   const [isModalOpen, setModalOpen] = useState(modalOpen);

//   useEffect(() => {
//     setModalOpen(modalOpen);
//   }, [dataPost]);

//   return isModalOpen === true ? (
//     <div className="Modal">
//       <div className="quitModal" onClick={closeModal}></div>
//       <div className="modalPost">
//         <div className="quitModalBtn" onClick={closeModal}>
//           X
//         </div>
//         <h1>{dataPost.title}</h1>
//         <p>{dataPost.body}</p>
//         <div className="tags">
//           {dataPost.tags.map((tag) => (
//             <span key={tag}> {tag} </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   ) : null;
// };

// Questo metodo funzionava quasi del tutto, purtroppo, per via di un piccolo bug,
// la modale non si riattivava se si cliccava sullo stesso post dopo averla chiusa,
// bisognava cliccare un post diverso ogni volta che la si chiudeva.
// Di conseguenzacnon ho potuto implementarlo.
// (se si prova ad utilizzarlo non funzionerà,
// almeno che non si cambia il valore di modal open in app.jsx da "modalOpen={setSinglePost}" a "modalOpen={true}")

export default Modal;
