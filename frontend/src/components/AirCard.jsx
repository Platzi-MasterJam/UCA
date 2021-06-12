/* eslint-disable react/prop-types */
import React from 'react';

function filterData(info) {
  let adjetive = '';
  const { aqi } = info.data;

  switch (true) {
    case aqi >= 0 && aqi <= 50:
      adjetive = 'Buena';
      break;
    case aqi >= 51 && aqi <= 100:
      adjetive = 'Moderada';
      break;
    case aqi >= 101 && aqi <= 150:
      adjetive = 'Dañina para grupos sensibles';
      break;
    case aqi >= 151 && aqi <= 200:
      adjetive = 'Dañina para la salúd';
      break;
    case aqi >= 201 && aqi <= 250:
      adjetive = 'Muy dañina para la salúd';
      break;
    default:
      adjetive = 'Arriesgado';
  }

  return { data: aqi, adjetive };
}

function Card({ data, cityName }) {
  return (
    <>
      <section>
        <p>{cityName}</p>
        <h2>{data.data}</h2>
        <h4>{data.adjetive}</h4>
      </section>
    </>
  );
}

function AirCard({ data, cityName }) {
  return (
    <>
      {data.status === 'error' && (
      <>
        <h2 style={{ color: 'red', textAlign: 'center' }}>Error: Aún no tenemos tu ciudad o quizá está mal escrita</h2>
      </>
      )}

      {data.status === 'ok' && (
      <>
        <Card data={filterData(data)} cityName={cityName} />
      </>
      )}
    </>
  );
}

export default AirCard;
