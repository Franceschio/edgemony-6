import "./index.css";

import TodoItem from "../TodoItem/TodoItem";

const TodosList = ({ setModalOpen, totalTodos, createNewTodo }) => {
  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="TodosList">
      {totalTodos.sort().map((todo) => (
        <TodoItem
          todoData={todo}
          createNewTodo={createNewTodo}
          totalTodos={totalTodos}
          key={todo.id}
        />
      ))}
      <div className="addNew">
        <span onClick={openModal}>+</span>
      </div>
    </div>
  );
};

export default TodosList;
