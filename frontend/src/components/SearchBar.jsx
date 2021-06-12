import React, { useState, useRef } from 'react';
// import LoadingSpinner from './LoadingSpinner';

function SearchBar() {
  const [requestData, setRequestData] = useState('first');
  const InputRef = useRef(null);

  function handleClick() {
    setRequestData('loading');
    fetch(`http://localhost:4000/pollution/${InputRef.current.value.replace(/\s/g, '')}`)
      .then((data) => data.json())
      .then((dataRequested) => {
        setRequestData(dataRequested);
      }).catch((err) => {
        console.log(err);
        setRequestData('Error');
      });
  }

  return (
    <>
      <div className="search-bar-container">

        <label htmlFor="search-bar">
          <input ref={InputRef} placeholder="Ingresa el nombre de tu ciudad..." type="text" aria-label="Ingresa el nombre de tu ciudad" id="search-bar" className="search-bar" />
        </label>
        <button onClick={handleClick} className="search-bar-button" type="button">Buscar</button>
      </div>

      {/* <LoadingSpinner /> */}

    </>
  );
}

export default SearchBar;
