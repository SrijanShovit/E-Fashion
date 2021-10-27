import React from 'react';
import {  NavLink } from "react-router-dom";
import {Container,Navbar,Nav} from "react-bootstrap";
import logo from "../images/logo.jfif";
import Popup1 from "./popuplogin"
import Popup from "./popup"

export const NavbarFashionStore = () =>
{
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
                            <NavLink className="navstyle"  to="/fashion"><div className="iconDiv"></div>Men Wear Store</NavLink >
                            <NavLink className="navstyle" to="#"><div className="iconDiv"></div>Women Wear Store</NavLink>
                            <NavLink className="navstyle" to="#"><div className="iconDiv"></div>Kids Wear</NavLink>
                            <NavLink className="navstyle" to="#"><div className="iconDiv"></div>Party wear Store</NavLink>
                        </Nav>
                        <Nav>
                            <Popup1 />
                            <Popup />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}