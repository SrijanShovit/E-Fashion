import React from 'react';
import { Row , Col,Container} from 'react-bootstrap';
import '../Components/css/style.css';
import products from '../products';
import Product from '../Components/Product';

export const MenBeauty = () => {
    const headingStyle = {
        
        textAlign: 'center',
    }
    return(
        <>
            
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
            

        </>
    )
}

export const WomenBeauty = () => {
    const headingStyle = {
        
        textAlign: 'center',
    }
    return(
        <>
            
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
            

        </>
    )
}

export const IndianBeauty = () => {
    const headingStyle = {
        
        textAlign: 'center',
    }
    return(
        <>
            
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
            

        </>
    )
}

export const MordernBeauty = () => {
    const headingStyle = {
        
        textAlign: 'center',
    }
    return(
        <>
            
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
            

        </>
    )
}