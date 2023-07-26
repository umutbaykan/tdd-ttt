import "./InputButton.css";
import propTypes from "prop-types";

const InputButton = ({ noteText }) => {
  const handleClick = () => {
    fetch("/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ note: noteText }),
    });
    // Reset the state of form back to ""
  };

  return (
    <button onClick={handleClick} data-cy="input-button">
      Add Note!
    </button>
  );
};

InputButton.propTypes = { noteText: propTypes.string };

export default InputButton;
