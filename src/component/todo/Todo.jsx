import "./Todo.css";
import propTypes from "prop-types";

const Todo = ({ text, index, isDone }) => {
  const todoStatus = isDone ? "done" : "undone";

  return (
    <p data-cy={`todo-${index}`} className={`todo ${todoStatus}`}>
      {text}
    </p>
  );
};

Todo.propTypes = {
  text: propTypes.string,
  index: propTypes.number,
  isDone: propTypes.bool,
};

export default Todo;
