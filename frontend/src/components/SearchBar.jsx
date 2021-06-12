import React from 'react';

function SearchBar() {
  return (
    <>
      <div className="search-bar-container">

        <label htmlFor="search-bar">
          <input placeholder="Ingresa el nombre de tu ciudad..." type="text" aria-label="Ingresa el nombre de tu ciudad" id="search-bar" className="search-bar" />
        </label>
        <button className="search-bar-button" type="button">Buscar</button>
      </div>

    </>
  );
}

export default SearchBar;
