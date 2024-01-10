import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="card" style={{ width: "25%", float: "left" }}>
        <div className="card-body">
          <h1 className="card-title">{props.title}</h1>
          <p className="card-text">{props.content}</p>
          <button className="btn btn-success">
            <DeleteForeverIcon onClick={deleteNote} className="deleteIcon" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Note;