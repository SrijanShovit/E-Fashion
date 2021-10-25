


import Banner from '../Components/Banner'


import Navbar from '../Components/Navbar'

import { Row, Col, Button } from 'react-bootstrap';
import products from '../products';
import Product from '../Components/Product';
import Footer from "../Components/Footer";

const Fwearcoll = () => {
 
    return (
        <>
            <Navbar />

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

            <Banner />

            <div className='container align-items-lg-center'>

                <h3>Handicraft</h3>
                <Row className='center'>
                    {products.map(product => (
                        <Col sm={12} md={6} lg={4} xl={2}>
                            <Product product={product} />
                        </Col>

                    ))}
                </Row>
                <Button varient="secoundary" className="view">View All</Button>
            </div>

            <h3>Trending Wear</h3>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Button varient="secoundary" className="view">View All</Button>

            <h3>Local</h3>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Button varient="secoundary" className="view">View All</Button>

                    <Footer/>

        </>
    )
}

export default Fwearcoll
