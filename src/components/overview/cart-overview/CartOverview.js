import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cart-overview.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateItem } from '../../../features/order/orderSlice'
import { Link } from 'react-router-dom'
import { updateStep } from '../../../features/steps/stepsSlice';
import setDYContext from '../../../features/DY/dyContext';


export default function CartOverview() {
    const orders = useSelector((state) => state.orders)
    const dispatch = useDispatch();
    console.log('cart')
    useEffect(()=>{
        dispatch(updateStep('bag-overview'))
        setDYContext('CART', orders.items.map(order => order.id.toString()));
    },[])
    return (
        <Container>
            <Row>
                <Col className='cart-overview-heading'>Cart</Col>
            </Row>
            {orders.items.map((order, index) => {
                return (
                    <Row key={index} className='order-review-product'>
                        <Col md={6} lg={8}>
                            <Row>
                                <Col className='heading'>
                                    {order.title}
                                </Col>
                            </Row>
                            <Row>
                                <Col className='price margin-top-20'>
                                    {order.price} $
                                </Col>
                            </Row>
                            <Row>
                                <Col className='description margin-top-20'>
                                    {order.description} 
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='mt-24'>
                            <Row className='order-quantity-and-image'>
                                <div className='order-quantity'>
                                    <button className='add' onClick={()=>{dispatch(updateItem([order,'add']))}}>+</button>
                                    <span className='quantity'>{order.quantity}</span>
                                    <button className='remove' onClick={()=>{dispatch(updateItem([order,'remove']))}}>-</button>
                                </div>
                                <div className='image' style={{ backgroundImage: `url("${order.image}")` }}></div>
                            </Row>
                        </Col>
                    </Row>
                )
            })}
            <Row className='order-btn'>
                <Col sm={12} md={6} lg={3} as={Link} to='/overview/checkout' onClick={()=>dispatch(updateStep('checkout'))}>
                    <button>Checkout</button>
                </Col>
            </Row>
        </Container>
    )
}
