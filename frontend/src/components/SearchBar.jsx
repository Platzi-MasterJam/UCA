/* eslint-disable react/prop-types */
import React, { useRef } from 'react';

function SearchBar({ handleClick }) {
  const InputRef = useRef(null);

  return (
    <>
      <div className="search-bar-container">

        <label htmlFor="search-bar">
          <input ref={InputRef} placeholder="Ingresa el nombre de tu ciudad..." type="text" aria-label="Ingresa el nombre de tu ciudad" id="search-bar" className="search-bar" />
        </label>
        <button onClick={() => handleClick(InputRef)} className="search-bar-button" type="button">Buscar</button>
      </div>
    </>
  );
}

export default SearchBar;
