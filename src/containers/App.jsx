import React, { Component } from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Carousel/Categories';
import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/Carousel/CarouselItem';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <Categories>
          <Carousel>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </Carousel>
        </Categories>
      </>
    );
  }
}

export default App;

