import "./TodoContainer.css";
import propTypes from "prop-types";
import Todo from "../todo/Todo";

const TodoContainer = ({ todos }) => {
  return (
    <div className="container todo">
      <h3 data-cy="todo-header">TODO LIST</h3>
      {todos.length === 0 ? (
        <p data-cy="todo-error">You dont have anything you need to do</p>
      ) : (
        todos.map((entry, index) => (
          <Todo key={index} text={entry.todo} index={index} isDone={false} />
        ))
      )}
    </div>
  );
};

TodoContainer.propTypes = { todos: propTypes.array };

export default TodoContainer;
