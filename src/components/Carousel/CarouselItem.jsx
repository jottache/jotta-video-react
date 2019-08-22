import React from 'react';
import '../../assets/styles/CarouselItem.scss';

export default function CarouselItem() {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src='https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='People' />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__icon' src='./icons/play-icon.png' alt='Play' />
          <img className='carousel-item__icon' src='./icons/add-icon.png' alt='Plus' />
        </div>
        <p className='carousel-item__details--title descripcion'>Título descriptivo</p>
        <p className='carousel-item__details--subtitle descripcion'>2019 16+ 114 minutos</p>
      </div>
    </div>
  );
}
