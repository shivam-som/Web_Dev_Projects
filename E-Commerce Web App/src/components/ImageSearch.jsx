import React, { useState } from 'react';
import ImageSearchResult from './ImageSearchResult';
import Navbar from './Navbar';

const Search = () => {

    const [img, setImage] = useState("");

    const InputEvent = (event) =>{
        const data = event.target.value;
        setImage(data);
    }

    return (
        <>
        <Navbar />
            <div className="searchbar">
                <input onChange={InputEvent} value={img} type="text" placeholder="Search Anything" />
            </div>
            { img==="" ? null : <ImageSearchResult imgName={img} /> } 
        </>
    );
}
export default Search;