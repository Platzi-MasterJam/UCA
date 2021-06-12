import React, { useState } from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TableRow from '../components/TableRow';
import LoadingSpinner from '../components/LoadingSpinner';
import AirCard from '../components/AirCard';

function Home() {
  const [requestData, setRequestData] = useState('nothing');

  function handleCityRequest(InputRef) {
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
      <Header />
      <main className="main">
        <h1 className="main__title">Descubre la calidad de aire en tu ciudad</h1>

        <SearchBar handleClick={handleCityRequest} />

        {requestData === 'nothing' && <></>}
        {requestData === 'loading' && <><LoadingSpinner /></>}
        {typeof requestData !== 'string' && <><AirCard /></>}

        <TableRow backgroundColor="#ffffff" textColor="#000000" leftText="izquierda" centerText="centro" rigthText="Derecha" />

      </main>
    </>
  );
}

export default Home;
