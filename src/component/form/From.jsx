import "./Form.css";
import propTypes from "prop-types";

const Form = ({ setNoteText }) => {
  return (
    <input
      type="text"
      placeholder="type in your note here"
      data-cy="input-form"
      onChange={(e) => setNoteText(e.target.value)}
    ></input>
  );
};

Form.propTypes = { setNoteText: propTypes.func };

export default Form;
