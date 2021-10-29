import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import freeship from '../Assets/freeship.jpeg';
import fastdel from '../Assets/fastdel.jpeg';
import bigsave from '../Assets/bigsave.jpeg'
const Tabs = () => {
return (
    <Container>
       <hr className="bg-success hr-height" />
       <h6 className="text-uppercase font-weight-bold text-center">Our Services</h6>
       <Row xs={2} md={3}className="text-center pt-2 pb-5">
          <Col>
            <div>
              <img src={freeship} className="featureImage"/>
            </div>
            <div>Free Shipping</div>
          </Col>
          <Col>
            <div>
              <img src={fastdel} className="featureImage"/>
            </div>
            <div>Superfast Delivery </div>
          </Col>
          <Col>
            <div>
              <img src={bigsave} className="featureImage"/>
            </div>
            <div>Big saving on Big range of products </div>
          </Col>
      </Row>
    </Container>

  );
};

export default Tabs;
