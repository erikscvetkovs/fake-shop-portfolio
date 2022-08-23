import React, { useState, useRef, useEffect } from 'react'
import './cart.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch } from 'react-redux'
import { changeCartState } from '../../features/cart/cartSlicer'

export default function Cart() {
    const [fadeOut, changeFadestatuss] = useState(true)
    const orders = useSelector((state) => state.orders)
    const cartState = useSelector((state) => state.cart.isOpen)
    const dispatch = useDispatch();
    const cartBox = useRef(null);
    outsideCartBox(cartBox);

    function outsideCartBox(ref){
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    fadeOutCart()
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    function fadeOutCart(){
        changeFadestatuss(false)
        setTimeout(() => {
            dispatch(changeCartState(false))
        }, "300")
    }


    return (
        <div className={`${fadeOut ? 'fadeIn' : 'fadeOut'} cart-overlay`}>
            <div className='cart-box'>
                <Col sm={5} className='cart-menu' ref={cartBox}>
                    <div className='cart-close-button' onClick={() => {fadeOutCart()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                    </div>
                    <Row>
                        <Col className='cart-heading'>
                            My bag, <span className='cart-heading-count'>{orders.items.length} items</span>
                        </Col>
                    </Row>
                    <div className='orders-box'>
                        {orders.items.map((order) => {
                            return (
                                <Row className='order-row'>
                                    <Col className='cart-order-image' sm={4}>
                                        <div className='order-image' style={{ backgroundImage: `url("${order.image}")` }}></div>
                                    </Col>
                                    <Col className='order-info'>
                                        <Row>
                                            <Col className='cart-order-name'>{order.title}</Col>
                                        </Row>
                                        <Row>
                                            <Col className='cart-order-price'>{order.price} $</Col>
                                        </Row>
                                        <Row>
                                            <Col className='cart-order-quantity'>Quantity: 1</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            )
                        })}
                    </div>
                    <Row className='cart-buttons'>
                        <Col>
                            <div className='btn-cart btn-view-bag'>
                                View bag
                            </div>
                        </Col>
                        <Col>
                            <div className='btn-cart btn-checkout'>
                                Checkout
                            </div>
                        </Col>
                    </Row>
                </Col>
            </div>
        </div>
    )
}
