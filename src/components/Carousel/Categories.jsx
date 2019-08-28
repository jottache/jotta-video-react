import React from 'react';
import '../../assets/styles/Categories.scss';

const Categories = ({ children, title }) => {
  return (
    <>
      <h2 className='carousel-title'>{title}</h2>
      {children}
    </>
  );
};
export default Categories;

