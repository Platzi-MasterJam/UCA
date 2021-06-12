import React from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TableRow from '../components/TableRow';

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <h1 className="main__title">Descubre la calidad de aire en tu ciudad</h1>

        <SearchBar />

        <TableRow backgroundColor="#ffffff" textColor="#000000" leftText="izquierda" centerText="centro" rigthText="Derecha" />

      </main>
    </>
  );
}

export default Home;
