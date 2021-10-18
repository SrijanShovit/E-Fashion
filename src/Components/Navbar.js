import React from "react";
import {  NavLink } from "react-router-dom";
import {Container,Navbar,Nav} from "react-bootstrap";
import logo from "../images/logo.jfif";


const Header = () => {
 
 
  return (
    <>
        <Navbar  bg="dark" variant="dark" expand="lg"   >
        <Container>
            <Navbar.Brand>
               <NavLink to="#"><img className="logo" src={logo} alt="logo"/></NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="navstyle" to="/"><div className="iconDiv"></div>Home</NavLink>
                    <NavLink className="navstyle"  to="#"><div className="iconDiv"></div>City Fashion Store</NavLink >
                    <NavLink className="navstyle" to="#"><div className="iconDiv"></div>City Beauty Store</NavLink>
                    <NavLink className="navstyle" to="#"><div className="iconDiv"></div>Signature Handicraft</NavLink>
                    <NavLink className="navstyle" to="#"><div className="iconDiv"></div>Fashion Wear</NavLink>
                </Nav>
                <Nav>
                    <NavLink className="navstyle" to="#">Login</NavLink>
                    <NavLink className="navstyle" to="#">
                        Sign-up
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
            
        </Container>
  </Navbar>

   </>
  );
};


export default Header;
