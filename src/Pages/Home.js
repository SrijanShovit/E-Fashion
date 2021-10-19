import React from "react";
import Header from "../Components/Navbar";
import ProductsScreen from "./ProductsScreen";

import { Container } from "react-bootstrap";

import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      
        <Container>
          <ProductsScreen />
        </Container>
      
      <Footer />
    </div>
  );
};

export default Home;
