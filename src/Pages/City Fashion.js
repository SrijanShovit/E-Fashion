import React from 'react';
import FashionStoreCard from '../Components/FashionStoreCard';
import Footer from '../Components/Footer';
import Header from '../Components/Navbar';
import { NavbarLocation } from '../Components/NavbarLocation';


export const City_Fashion = () => {
    return (
        <>
            <Header/>
            <NavbarLocation/>
            <FashionStoreCard/>
            <Footer/>
        </>
    )
}

