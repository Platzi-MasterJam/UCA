import React from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <h1 className="main__title">Descubre la calidad de aire en tu ciudad</h1>

        <SearchBar />
      </main>
    </>
  );
}

export default Home;
