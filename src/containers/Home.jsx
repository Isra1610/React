//components
import React, {useState, useEffect} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//hooks
import useInitialState from '../hooks/useInitialState';
//styles
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <>
            <Search />
                {initialState.mylist.length > 0 &&
                    <Categories title="Mi lista">
                        <Carousel>
                        {initialState.mylist.map(item => 
                            <CarouselItem key={item.id} {...item}/>
                        )}
                        </Carousel>
                    </Categories>
                }
                {initialState.trends.length > 0 &&
                    <Categories title="Tendencias">
                        <Carousel>
                            {initialState.trends.map(item => 
                                <CarouselItem key={item.id} {...item}/>
                            )}
                        </Carousel>
                    </Categories>
                }
                {initialState.originals.length > 0 &&
                    <Categories title="Originales de Platzi video">
                        <Carousel>
                        {initialState.originals.map(item => 
                            <CarouselItem key={item.id} {...item}/>
                        )}
                        </Carousel>
                    </Categories>
                }
        </>
    );
}
export default Home;