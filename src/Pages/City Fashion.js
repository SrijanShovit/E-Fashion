import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Navbar';
import { NavbarLocation } from '../Components/NavbarLocation';
import ProductsScreen from './ProductScreen';


export const City_Fashion = () => {
    return (
        <>
        <Header/>
        <NavbarLocation/>
        <ProductsScreen/> For demo use only
        <Footer/>
        </>
    )
}

