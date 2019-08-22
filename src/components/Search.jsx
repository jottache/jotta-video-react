import React from 'react';
import '../assets/styles/Search.scss';

const Search = () => {
  return (
    <section className='search'>
      <h2 className='search__title'>¿que quieres ver hoy?</h2>
      <input className='search__input' type='text' placeholder='Buscar' />
    </section>
  );
};

export default Search;
