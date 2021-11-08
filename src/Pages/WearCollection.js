import React from 'react';
import { Row , Col,Container} from 'react-bootstrap';
import '../Components/css/style.css';
import products from '../products';
import Product from '../Components/Product';

export const MenWear = () => {
    const headingStyle = {
        
        textAlign: 'center',
    }
    return(
        <>
            
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
            

        </>
    )
}

export const WomenWear = () => {
    const headingStyle = {
        
        textAlign: 'center',
    }
    return(
        <>
            
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
            

        </>
    )
}

export const KidsWear = () => {
    const headingStyle = {
        
        textAlign: 'center',
    }
    return(
        <>
            
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
            

        </>
    )
}

export const PartyWear = () => {
    const headingStyle = {
        
        textAlign: 'center',
    }
    return(
        <>
            
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
            

        </>
    )
}