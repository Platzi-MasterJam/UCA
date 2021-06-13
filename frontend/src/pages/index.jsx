import React, { useState } from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TableRow from '../components/TableRow';
import LoadingSpinner from '../components/LoadingSpinner';
import AirCard from '../components/AirCard';

function Home() {
  const [requestData, setRequestData] = useState('nothing');
  const [cityName, setCityName] = useState('');

  function handleCityRequest(InputRef) {
    setRequestData('loading');
    fetch(`http://localhost:4000/pollution/${InputRef.current.value.replace(/\s/g, '').toLowerCase()}`)
      .then((data) => data.json())
      .then((dataRequested) => {
        setRequestData(dataRequested);
        setCityName(InputRef.current.value);
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
        {typeof requestData !== 'string' && <><AirCard cityName={cityName} data={requestData} /></>}
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <TableRow />

        </div>

      </main>
    </>
  );
}

export default Home;
