import React, { useState } from "react";
import Menu from './Menu';
import "../StyleSheets/Todo.css";
import Navbar from './Navbar';

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("Plzz fill data ");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  // delete the items
  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return elem.id != index;
    });
    setItems(updateditems);
  };

  //   Edit the item
  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };

  //   remove all
  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
    <Navbar />
      <div>
        <div className="main-div">
          <div className="child-div">
            <figure>
              <img src={Menu[9].image} alt="todo logo" />
              <figcaption>Add Your List Here 🤞</figcaption>
            </figure>
            <div className="addItems">
              <input type="text" placeholder="✍️ Add Items..." value={inputData} onChange={(e) => setInputData(e.target.value)} />
              {toggleSubmit ? (
                <i className="fa fa-plus add-btn" title="Add Items" onClick={addItem}></i>
                ) : (
                <i className="fa fa-edit add-btn" title="Update Item" onClick={addItem}></i>
              )}
            </div>
            <div className="showItems">
              {items.map((elem) => {
                return (
                  <div className="eachItem" key={elem.id}>
                    <h3>{elem.name}</h3>
                    <div className="todo-btn">
                      <i className="fa fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)} ></i>
                      <i className="fa fa-trash add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)} ></i>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Clear All button */}
            <div className="showItems">
              <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll} >
                <span> CHECK LIST </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
