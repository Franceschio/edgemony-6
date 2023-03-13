import "./App.css";

import TodosList from "./components/TodosList/TodosList";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [newTodo, createNewTodo] = useState([]);

  return (
    <div className="App">
      <h1>Todos</h1>
      <TodosList setModalOpen={setModalOpen} newTodo={newTodo} />
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        createNewTodo={createNewTodo}
        newTodo={newTodo}
      />
    </div>
  );
}

export default App;
