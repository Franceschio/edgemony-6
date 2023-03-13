import "./index.css";

const TodoItem = ({ todoData }) => {
  return (
    <div className="TodoItem">
      <div className="todoText">
        <p>{todoData.todo}</p>
      </div>
    </div>
  );
};

export default TodoItem;
