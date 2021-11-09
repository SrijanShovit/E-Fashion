import React from 'react';
import { Row , Col,Container} from 'react-bootstrap';
import '../Components/css/style.css';
import products from '../products';
import Product from '../Components/Product';



const HandiCraft = () => {
    const headingStyle = {
        
        textAlign: 'center'
    }
    return(
        <>
            
            <Container>
            <h3 style={headingStyle}>Handicraft</h3>
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

export default HandiCraft;
