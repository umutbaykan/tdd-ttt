import "./TodoContainer.css";
import propTypes from "prop-types";
import Todo from "../todo/Todo";

const TodoContainer = ({ todos }) => {
  return (
    <div className="container todo">
      {todos.map((entry, index) => (
        <Todo key={index} text={entry.todo} index={index} isDone={false} />
      ))}
    </div>
  );
};

TodoContainer.propTypes = { todos: propTypes.array };

export default TodoContainer;
