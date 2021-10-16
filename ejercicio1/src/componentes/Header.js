import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header =()=>{
    return(
        <Row>
            <Col className="col py5 text-center border">
                <span>Store </span>
                <span>About </span>
                <span>Cart</span>
            </Col>
        </Row>
    );
}

export default Header