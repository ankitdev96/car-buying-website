import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Models from '../Models/Models';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Models></Models>
            <Products></Products>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;