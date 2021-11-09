import React from 'react';
import BeautyStoreCard from '../Components/BeautyStoreCard';
import Footer from '../Components/Footer';
import Header from '../Components/Navbar';
import { NavbarLocation } from '../Components/NavbarLocation';


export const City_Beauty = () => {
    return (
        <>
            <Header/>
            <NavbarLocation/>
            <BeautyStoreCard/>
            <Footer/>
        </>
    )
}

