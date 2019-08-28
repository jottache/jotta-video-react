import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Carousel/Categories';
import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/Carousel/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  console.log(initialState);
  return (
    <>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='no se que'>
        <Carousel>
          {
            initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Footer />
    </>
  );
};

export default App;

