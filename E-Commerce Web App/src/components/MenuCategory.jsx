import React from "react";

function MenuCategory({filterItem, catItems}) {
  return (
    <>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">

          {
            catItems.map((curElem, index)=>{
              return <button style={{fontSize: "1.2rem"}} className="btn btn-warning" key={index} onClick={() => filterItem(curElem)} >{curElem}</button>
            })
          }
        </div>
      </div>
    </>
  );
}

export default MenuCategory;
