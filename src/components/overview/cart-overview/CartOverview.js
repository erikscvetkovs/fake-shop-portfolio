import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cart-overview.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateItem } from '../../../features/order/orderSlice'
import { Link } from 'react-router-dom'
import { updateStep } from '../../../features/steps/stepsSlice';


export default function CartOverview() {
    const orders = useSelector((state) => state.orders)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(updateStep('bag-overview'))
    },[])
    return (
        <Container>
            <Row>
                <Col className='cart-overview-heading'>Cart</Col>
            </Row>
            {orders.items.map((order) => {
                return (
                    <Row key={order.id} className='order-review-product'>
                        <Col lg={8}>
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
                        <Col lg={4}>
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
                <Col sm={3} as={Link} to='/overview/checkout' onClick={()=>dispatch(updateStep('checkout'))}>
                    <button>Checkout</button>
                </Col>
            </Row>
        </Container>
    )
}
