import "./index.css";

const TodoItem = ({ todoData, createNewTodo, totalTodos }) => {
  const deleteTodo = () => {
    createNewTodo([
      ...totalTodos.filter((item) => item.todo !== todoData.todo),
    ]);
  };

  return (
    <div className="TodoItem">
      <div className="deleteTodo" onClick={deleteTodo}>
        X
      </div>
      <div className="todoText">
        <p>{todoData.todo}</p>
      </div>
    </div>
  );
};

export default TodoItem;
