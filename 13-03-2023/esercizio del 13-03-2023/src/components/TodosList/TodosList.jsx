import "./index.css";

import TodoItem from "../TodoItem/TodoItem";
import todos from "../Mock/todos";
import { useState } from "react";

const TodosList = ({ setModalOpen, newTodo }) => {
  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="TodosList">
      {todos.map((todo) => (
        <TodoItem todoData={todo} key={todo.id} />
      ))}
      {newTodo.map((todo) => (
        <TodoItem todoData={todo} key={todo.id} />
      ))}
      <div className="addNew">
        <span onClick={openModal}>+</span>
      </div>
    </div>
  );
};

export default TodosList;
