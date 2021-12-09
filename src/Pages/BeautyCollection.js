import React from 'react';
import { Row , Col,Container} from 'react-bootstrap';
import '../Components/css/style.css';
import products from '../products';
import Product from '../Components/Product';
import Header from '../Components/Navbar';
import Footer from '../Components/Footer';

const headingStyle = {
    marginTop:'1em',
    textAlign: 'center',
}

export const MenBeauty = () => {

    return(
        <>
            <Header/>
            <Container>
            <h3 style={headingStyle}>Men Beauty Collection</h3>
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

export const WomenBeauty = () => {

    return(
        <>
            <Header/>
            <Container>
            <h3 style={headingStyle}>Women Beauty Collection</h3>
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

export const IndianBeauty = () => {

    return(
        <>
            <Header/>
            <Container>
            <h3 style={headingStyle}>Indian Beauty Collection</h3>
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

export const MordernBeauty = () => {

    return(
        <>
            <Header/>
            <Container>
            <h3 style={headingStyle}>Mordern Beauty Collection</h3>
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