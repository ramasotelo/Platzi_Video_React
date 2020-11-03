import React, { useState, useEffect} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API_URL ='http://localhost:3000/initialState';


const Home = ()=> {
    const initialState = useInitialState(API_URL);
    return(
        <>
            <Search />
            {initialState.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {initialState.mylist.map(item =>
                            <CarouselItem key={item.id} {...item}/>
                        )}
                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencia">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>
        </>
    )
};

export default Home;