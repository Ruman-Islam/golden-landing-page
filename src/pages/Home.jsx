import React from 'react';
// import About from '../components/About';
import Header from '../components/Header';
import Navbar from '../layouts/Navbar';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Header />
            {/* <About /> */}
        </div>
    );
};

export default Home;