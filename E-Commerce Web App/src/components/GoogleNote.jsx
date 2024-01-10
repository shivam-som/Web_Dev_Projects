import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Navbar from "./Navbar";

const GoogleNote = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevDataNew) => {
      return [...prevDataNew, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currentData, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <center>
          <CreateNote passNote={addNote} />
        </center>
      </div>

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
    </>
  );
};
export default GoogleNote;
