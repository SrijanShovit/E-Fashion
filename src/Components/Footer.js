import React from 'react'
import {Container,Row,Col} from "react-bootstrap";
import { FaFacebook,FaLinkedin,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
    <>
      <div className="p-4 w3-animate-zoom bg-dark text-light footer mt-5"  fluid="lg" >
        <Row>
          <Col sm>
              <h6 className="text-uppercase font-weight-bold text-center" style={{color: 'white'}}>About</h6>
              <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto"  />
              <p className="mt-2">AAKANKSHA is an MSME consumer service E-commerce company started with the intention of making
                people's life more comfortable. We provide a door-to-door delivery service facility .We provide a wide range
                of services and products.</p>
               
          </Col>
          <Col sm>
              <h6 className="text-uppercase font-weight-bold text-center" style={{color: 'white'}}>Features</h6>
              <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto" />
              <ul >
                <li className="my-2"><a href="/">Fashion Product</a></li>
                <li className="my-2"><a href="/">Beauty Product</a></li>
                <li className="my-2"> <a href="/">Handicraft Product</a></li>
                <li className="my-2"> <a href="/">Fashion Wear</a></li>
              </ul>
          </Col>
          <Col sm>
              <h6 className="text-uppercase font-weight-bold text-center" style={{color: 'white'}}>Useful links</h6>
              <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto"  />
              <ul>
                <li className="my-2"><a href="/">City Fashion Store</a></li>
                <li className="my-2"><a href="/">City Beauty Store</a></li>
                <li className="my-2"><a href="/">Signature Handicraft</a></li>
                
              </ul>
          </Col>
          <Col sm>
          <h6 className="text-uppercase font-weight-bold text-center" style={{color: 'white'}}>Contact</h6>
                <hr className="bg-success mb-1 mt-0 d-inline-block mx-auto"  />
                <ul>
                <li className="my-2"> <i className="fa fa-home  mr-3" aria-hidden="true" /> Delhi,India</li>
                <li className="my-2"><i className="fa fa-envelope" aria-hidden="true" /> helthcare@gmail.com</li>
                <li className="my-2"><i className="fa fa-phone" aria-hidden="true" /> + 01 234 567 88</li>
              </ul>
          </Col>
    
        </Row>
        <Row>
        <Container><hr className="bg-success" /></Container>
          <Col  sm >
            <p>Terms and conditions</p>
          </Col> 
          <Col sm>
            <p>©2021 Aakanksha.
            <a href="/">All Rights Reserved.</a>
            </p>
          </Col>
          <Col sm>
            <Row className="social-media">
              <Col>
                <FaFacebook color="#3b5998"/>
              </Col>
              <Col>
                 <FaLinkedin color="#0e76a8"/>
              </Col>
              <Col>
                 <FaInstagramSquare color="#fb3958"/>
              </Col>
              <Col>
                <FaTwitterSquare color="#00acee"/>
              </Col>
            </Row>
          </Col>
        </Row>
     </div>
     
    </>
    )
}

export default Footer