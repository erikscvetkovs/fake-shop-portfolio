import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ProductsLoading() {
    return (
        <>
            <Row className='heading-category'>
                <Col>LOADING</Col>
            </Row>
            <Row className="justify-content-center">
                {
                    [...Array(3)].map((element, index) => {
                        return (
                            <Col lg={4} sm={6} key={`loading-${index}`}>
                                <div className="p-0 product-cart-loading">
                                    <Row>
                                        <Col>
                                            <div className='loading-image'></div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Row className='product-name'>
                                                <Col>
                                                    <div className='loading-name'></div>
                                                </Col>
                                            </Row>
                                            <Row className='product-price'>
                                                <Col>
                                                    <div className='loading-price'></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}
