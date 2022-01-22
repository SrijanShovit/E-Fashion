import React from 'react';
import { Row , Col,Container} from 'react-bootstrap';
import '../Components/css/style.css';
import products from '../products';
import Product from '../Components/Product';
import Header from '../Components/Navbar';
import Footer from '../Components/Footer';

const headingStyle = {
        
    textAlign: 'center',
    marginTop:'1em',
}

export const MenWear = () => {

    return(
        <>
            <Header/>
            <Container>
            <h3 style={headingStyle}>Men Wear Collection</h3>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>

            </Container>
            <Footer/>

        </>
    )
}

export const WomenWear = () => {

    return(
        <>
            <Header/>
            <Container>
            <h3 style={headingStyle}>Women Wear Collection</h3>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>

            </Container>
            <Footer/>

        </>
    )
}

export const KidsWear = () => {

    return(
        <>
            <Header/>
            <Container>
            <h3 style={headingStyle}>Kids Wear Collection</h3>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>

            </Container>
            <Footer/>

        </>
    )
}

export const PartyWear = () => {

    return(
        <>
            <Header/>
            <Container>
            <h3 style={headingStyle}>Party Wear Collection</h3>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>

            </Container>
            <Footer/>

        </>
    )
}