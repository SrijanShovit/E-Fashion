import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import Banner from '../Components/Banner'
import Slider2 from '../Assets/slider2.jpg'
import Slider1 from '../Assets/slider1.png'

import Navbar from '../Components/Navbar'

import {Nav} from "react-bootstrap";

const Fwearcoll = () => {
    const [show,setShow] = useState(false)
    return (
        <>
         <Navbar/>
        
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          Choose your company
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-content-between">
              <li className="nav-item" >
                <a className="nav-link active" aria-current="page" href="#">Allen Solly</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link active" aria-current="page" href="#">Khaadi Wear</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Calvin Klein</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Myntra</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Indie Wear</a>
              </li>
              </ul>
             
          </div>
        </div>
      </nav>

      <Banner/>

      <div className="container my-5">
             <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slider1} className="d-block w-50" alt="yo" />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={Slider2} className="d-block w-50" alt="yes" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Slider2} className="d-block w-50" alt="no" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
   
        </>
    )
}

export default Fwearcoll
