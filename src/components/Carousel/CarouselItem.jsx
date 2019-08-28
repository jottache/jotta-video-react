import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/CarouselItem.scss';
import playIcon from '../../assets/icons/play-icon.png';
import addIcon from '../../assets/icons/add-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__icon' src={playIcon} alt='Play' />
          <img className='carousel-item__icon' src={addIcon} alt='Plus' />
        </div>
        <p className='carousel-item__details--title descripcion'>Título descriptivo</p>
        <p className='carousel-item__details--subtitle descripcion'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
