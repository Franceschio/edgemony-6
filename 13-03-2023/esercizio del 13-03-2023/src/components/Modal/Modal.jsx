import { useRef, useState } from "react";
import "./index.css";

const Modal = ({ modalOpen, setModalOpen, newTodo, createNewTodo }) => {
  const newTodoInput = useRef(null);
  const [newTodoIndex, setNewTodoIndex] = useState(31);

  const closeModal = () => {
    setModalOpen(false);
  };

  const createNew = (e) => {
    e.preventDefault();
    createNewTodo([
      ...newTodo,
      {
        id: newTodoIndex,
        todo: newTodoInput.current.value,
      },
    ]);
    closeModal();
    newTodoInput.current.value = "";
    setNewTodoIndex(newTodoIndex + 1);
  };

  return (
    <div className={`Modal ${modalOpen === true && "active"}`}>
      <div className="modalOverflow" onClick={closeModal}></div>
      <div className="modalInputs">
        <h1>Add a new todo</h1>
        <form action="newTodo" onSubmit={createNew}>
          <input
            ref={newTodoInput}
            type="text"
            className="newTodo"
            placeholder="New todo"
          />
          <input type="submit" value="Add" className="addNewValue" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
