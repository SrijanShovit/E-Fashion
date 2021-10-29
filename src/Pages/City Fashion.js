import React from 'react';
import FashionStoreCard from '../Components/FashionStoreCard';
import Footer from '../Components/Footer';
import { NavbarFashionStore } from '../Components/NavbarFashionStore';
import { NavbarLocation } from '../Components/NavbarLocation';


export const City_Fashion = () => {
    return (
        <>
            <NavbarFashionStore/>
            <NavbarLocation/>
            <FashionStoreCard/>
            <Footer/>
        </>
    )
}

