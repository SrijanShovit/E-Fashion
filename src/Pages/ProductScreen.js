import React from 'react';
import { Row , Col,Button} from 'react-bootstrap';
import products from '../products';
import Product from '../Components/Product';


const ProductsScreen = () => {
    return(
        <>
            <h1>Handicraft</h1>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            
            <h1>Trending Wear</h1>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            
            <h1>Local Store</h1>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            
        
        </>
    )
}

export default ProductsScreen;