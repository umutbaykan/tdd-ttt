import "./InputContainer.css";
import { useState } from "react";

import Form from "../form/From";
import InputButton from "../inputButton/InputButton";

const InputContainer = () => {
  const [noteText, setNoteText] = useState("");

  return (
    <div className="container form">
      <Form setNoteText={setNoteText} />
      <InputButton noteText={noteText} />
    </div>
  );
};

export default InputContainer;
