import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './payment.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateStep } from '../../../features/steps/stepsSlice';
import setDYContext from '../../../features/DY/dyContext';

export default function payment() {
    const orders = useSelector((state) => state.orders)
    console.log(orders)
    const [loader, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updateStep('payment'))
        setDYContext('OTHER', ['payment']);
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
            dispatch(updateStep('final'))
        }, 3000)
    });
    useEffect(() => {
        if (loader) {
            window.DY.API("event", {
                name: "Purchase",
                properties: {
                    dyType: "purchase-v1",
                    value: orders.totalSum,
                    currency: "USD",
                    cart: orders.items.map((item) => {
                        return {
                            productId: item.id,
                            quantity: item.quantity,
                            itemPrice: item.price
                        }
                    })
                }
            });
        }
    }, [loader])
    return (
        <Container>
            <Row className='payment-box justify-content-center align-items-center mt-5'>
                <Col sm={5}>
                    <Row>
                        <Col className='heading text-center payment'>
                            Payment processing
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-center mt-5'>
                            <svg id="successAnimation" className={` ${loader ? 'animated' : 'rotate'}`} xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                                <path id="successAnimationResult" fill="#D8D8D8" d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z" />
                                <circle id="successAnimationCircle" cx="35" cy="35" r="24" stroke="#979797" strokeWidth="2" strokeLinecap="round" fill="transparent" />
                                <polyline id="successAnimationCheck" stroke="#979797" strokeWidth="2" points="23 34 34 43 47 27" fill="transparent" />
                            </svg>
                        </Col>
                    </Row>
                    {loader ? (
                        <Row>
                            <Col className='text-center mt-5 fadeIn'>
                                Nothing has happened, It's just a study project.
                            </Col>
                        </Row>
                    ) : null}
                </Col>
            </Row>
        </Container>
    )
}
