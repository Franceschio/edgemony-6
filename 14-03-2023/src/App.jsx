import "./App.css";

import TodosList from "./components/TodosList/TodosList";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import todos from "./components/Mock/todos";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [totalTodos, createNewTodo] = useState([...todos]);

  return (
    <div className="App">
      <h1>Todos</h1>

      {totalTodos.length === 0 ? (
        <h4>Sembrerebbe che tu non abbia todos da svolgere!</h4>
      ) : null}
      <TodosList
        setModalOpen={setModalOpen}
        totalTodos={totalTodos}
        createNewTodo={createNewTodo}
      />
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        createNewTodo={createNewTodo}
        newTodo={totalTodos}
      />
    </div>
  );
}

export default App;
