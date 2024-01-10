import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const backToNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="card" style={{ width: "25%" }}>
        <div className="card-body">
          {expand ? (
            <input
              className="card-title"
              name="title"
              type="text"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
              onDoubleClick={backToNormal}
            />
          ) : null}
          <textarea
            className="card-text"
            name="content"
            rows=""
            value={note.content}
            onChange={InputEvent}
            column=""
            placeholder="Write a note..."
            onClick={expandIt}
          />
          {expand ? (
            <button onClick={addEvent} className="btn btn-warning">
              <AddIcon className="plus_sign" />
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default CreateNote;
