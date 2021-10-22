import React from "react";

import ProductsScreen from "./ProductsScreen";

import Header  from '../Components/Navbar'
import Banner  from '../Components/Banner'
import Cards  from '../Components/FeatureCards'

import { Container } from "react-bootstrap";

import Footer from "../Components/Footer";
const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Cards/>
            <Container>
              <ProductsScreen />
            </Container>

             <Footer/>
        </div>
    )
}

export default Home;
