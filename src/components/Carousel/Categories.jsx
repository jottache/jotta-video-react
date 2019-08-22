import React from 'react';
import '../../assets/styles/Categories.scss';

const Categories = ({ children }) => {
  return (
    <>
      <h2 className='carousel-title'>mi lista</h2>
      {children}
    </>
  );
};
export default Categories;

