/* eslint-disable react/prop-types */
import React from 'react';

function filterData(info) {
  let adjetive = '';
  let color = '';
  const { aqi } = info.data;

  switch (true) {
    case aqi >= 0 && aqi <= 50:
      adjetive = 'Buena';
      color = 'rgb(1, 198, 245)';
      break;
    case aqi >= 51 && aqi <= 100:
      adjetive = 'Moderada';
      color = 'rgb(12, 245, 40)';
      break;
    case aqi >= 101 && aqi <= 150:
      adjetive = 'Dañina para grupos sensibles';
      color = 'rgb(245, 243, 0)';
      break;
    case aqi >= 151 && aqi <= 200:
      adjetive = 'Dañina para la salúd';
      color = 'rgb(245, 165, 0)';
      break;
    case aqi >= 201 && aqi <= 250:
      adjetive = 'Muy dañina para la salúd';
      color = 'rgb(245, 98, 0)';
      break;
    default:
      adjetive = 'Arriesgado';
      color = 'rgb(245, 12, 45)';
  }

  return { data: aqi, adjetive, color };
}

function Card({ data, cityName }) {
  console.log(data.color);
  return (
    <>
      <section style={{ backgroundColor: data.color }} className="air-card">
        <p>{cityName}</p>
        <h2>{data.adjetive}</h2>
        <h4>{data.data}</h4>
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
