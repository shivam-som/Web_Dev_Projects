import React from "react";

function ImageSearchResult(props) {
  const img = `https://source.unsplash.com/700x400/?${props.imgName}`;
  return (
    <div>
      <center>
        <img src={img} alt="Image Result" />
      </center>
    </div>
  );
}

export default ImageSearchResult;
