// ComA.jsx
// // React axios API
// // npm install axios

import React, { useEffect, useState } from "react";
// import axios
import axios from "axios";
import Navbar from "./Navbar";

const Pokemon = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    // alert("Hiiii")
    // Here we are using asynchronous javascript
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    //   console.log(res.data.num);
      setName(res.data.name);
    //   Here moves is an array so we need length to calculate its length
      setMoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <>
    <Navbar />
      <h1 className="text-center">You Choose {num} value</h1>
      <h1 className="text-center">My Name {name} </h1>
      <h1 className="text-center">I have {moves} moves</h1>
      <center><select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select></center>
    </>
  );
};
export default Pokemon;
