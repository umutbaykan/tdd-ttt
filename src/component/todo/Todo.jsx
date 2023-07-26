import "./Todo.css";
import propTypes from "prop-types";

const Todo = ({ text, index }) => {
  return (
    <p className="todo undone" data-cy={`todo-${index}`}>
      {text}
    </p>
  );
};
Todo.propTypes = { text: propTypes.string, index: propTypes.number };

export default Todo;
