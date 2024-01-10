import React, { useState } from "react";
import Navbar from "./Navbar";
import MenuCategory from "./MenuCategory";
import MenuItems from "./MenuItems";
import Menu from "./Menu";
import "../StyleSheets/MenuItems.css";

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category)), "all"];

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValues);

  const filterItem = (categItem) => {

    if(categItem === "all"){
      setItems(Menu);
      return ;
    }

    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
    <Navbar />
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />
      <MenuCategory filterItem={filterItem} catItems={catItems} />
      <MenuItems items ={items} />
    </>
  );
};

export default GalleryReact;
