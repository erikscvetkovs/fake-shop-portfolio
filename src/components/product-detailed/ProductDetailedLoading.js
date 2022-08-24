import React from 'react'
import './product-detailed.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ProductDetailed() {

    return (
        <Container className='product-detailed'>

            <Row>
                <Col className='product-detailed-image loading'>
                </Col>
                <Col>
                    <Row>
                        <Col className='loading header'></Col>
                    </Row>
                    <Row>
                        <Col className='space-top-30 loading description'></Col>
                    </Row>
                    <Row>
                        <div className='space-top-30 loading section'></div>
                    </Row>
                    <Row>
                        <div className='space-top-30 loading section'></div>
                    </Row>
                    <Row>
                        <div className='space-top-30 loading section'></div>
                    </Row>
                    <Row>
                        <Col sm={5} className='space-top-30 loading button'>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}
