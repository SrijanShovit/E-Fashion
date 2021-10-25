import React from 'react'
import Header  from '../Components/Navbar'
import Banner  from '../Components/Banner'
import Cards  from '../Components/FeatureCards'
import ProductsScreen from './ProductScreen'

import Footer from '../Components/Footer'
import { Container } from 'react-bootstrap'
const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Cards/>
            
            <ProductsScreen/>
            
            
            <Footer/>
        </div>
    )
}

export default Home;