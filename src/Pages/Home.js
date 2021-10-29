
import React from "react";

import Header  from '../Components/Navbar'
import Banner  from '../Components/Banner'
import Cards  from '../Components/FeatureCards'
import ProductsScreen from './ProductScreen'
import Tabs from '../Components/tabs';

import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Cards />
      <Container>
        <ProductsScreen />
      </Container>
      <Tabs />
      <Footer />

    </div>
  );
};

export default Home;
