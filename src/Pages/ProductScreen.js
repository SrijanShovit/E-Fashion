import React from 'react';
import { Row , Col,Button} from 'react-bootstrap';
import products from '../products';
import Product from '../Components/Product';
import '../Components/css/style.css'


const ProductsScreen = () => {
    return(
        <>
            <h3>Handicraft</h3>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Button varient="secoundary" className="view">View All</Button>
            
            <h3>Trending Wear</h3>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Button varient="secoundary" className="view">View All</Button>
            
            <h3>Local Store</h3>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Button varient="secoundary" className="view">View All</Button>
            
        
        </>
    )
}

export default ProductsScreen;