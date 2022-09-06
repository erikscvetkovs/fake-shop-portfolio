import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './checkout.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateForm } from '../../../features/checkout-form/checkoutFormSlicer.js'
import { useNavigate } from 'react-router-dom';
import { updateStep } from '../../../features/steps/stepsSlice';

export default function Checkout() {
    const initialValues = { name: '', surname: '', email: '', phoneNumber: '', city: '', zipCode: '', street: '' }
    const [inputs, setInputs] = useState(initialValues)
    const [validated, setValidated] = useState(false)
    const [isOpen, openOrdersBox] = useState(false)
    const [activeForm, useActiveForm] = useState(false)
    const orders = useSelector((state) => state.orders)
    const dispatch = useDispatch()
    const form = useSelector((state) => state.checkoutForm.form)
    const navigate = useNavigate();

    useEffect(() => {
        if (form !== null) useActiveForm(true)
        dispatch(updateStep('checkout'))
    }, [])

    const useCustomForm = (value) => {
        useActiveForm(value);
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const navigateTofinall = () => {
        navigate('/overview/payment')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            dispatch(updateForm(inputs))
            navigateTofinall()
        }
        setValidated(true);
    };

    const fillWithRandomData = () => {
        setInputs({ name: 'John', surname: 'Doe', email: 'john@doe.com', phoneNumber: '88889999', city: 'London', zipCode: '2022', street: 'London street 123' })
    }

    const showAllOrders = () => {
        openOrdersBox(!isOpen)
    }

    return (
        <Container className='checkout'>
            <Row>
                <Col className='checkout-heading'>Checkout</Col>
            </Row>
            <Row>
                <Col className='form px-3 order-2 order-md-1' md={6}>
                    <Row className='heading mb-4'>
                        <Col>Use this shipping address</Col>
                    </Row>
                    {activeForm ? (
                        <div className='mb-3'>
                            <Row className='mb-3'>
                                <Col sm={8} md={8} lg={6}>
                                    <button className='custom-form-btn' onClick={() => useCustomForm(false)}>Use custom form</button>
                                </Col>
                            </Row>
                            <Row className='px-2'>
                                <Col className='form-filled form-filled-select mx-1'>
                                    <Row className='bg-grey px-1'>
                                        <Col className='address-heading'>
                                            Address info ( {form.email} / {form.phoneNumber})
                                        </Col>
                                    </Row>
                                    <Row className='address-row px-1'>
                                        <Col>
                                            <Row>
                                                <Col>Name:</Col>
                                                <Col>{form.name}</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='address-row bg-grey px-1'>
                                        <Col>
                                            <Row>
                                                <Col>Surname:</Col>
                                                <Col>{form.surname}</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='address-row px-1'>
                                        <Col>
                                            <Row>
                                                <Col>City:</Col>
                                                <Col>{form.city} / {form.zipCode}</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className='address-row bg-grey px-1'>
                                        <Col>
                                            <Row>
                                                <Col>Street:</Col>
                                                <Col>{form.street}</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col>
                                    <button onClick={navigateTofinall} className='btn-submit' type="submit">
                                        Submit
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    ) : (
                        <>
                            {form !== null ? (
                                <Row className='mb-3'>
                                    <Col sm={4}>
                                        <button className='custom-form-btn' onClick={() => useCustomForm(true)}>Previous form</button>
                                    </Col>
                                </Row>
                            ) : null}
                            <Form className='shipping-form mb-3 p-3' noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required type="text" name="name" placeholder="Enter name" value={inputs.name} onChange={handleFormChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="surname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control required type="text" name="surname" placeholder="Enter surname" value={inputs.surname} onChange={handleFormChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid surname.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control required type="email" name="email" placeholder="Enter email" value={inputs.email} onChange={handleFormChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="phone-number">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control required type="tel" name="phoneNumber" placeholder="Enter phone number" value={inputs.phoneNumber} onChange={handleFormChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid phone number.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control required type="text" name="city" placeholder="Enter city" value={inputs.city} onChange={handleFormChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="zipCode">
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control required type="text" name="zipCode" placeholder="Enter zip code" value={inputs.zipCode} onChange={handleFormChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid zip code.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="street">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control required type="text" name="street" placeholder="Enter street" value={inputs.street} onChange={handleFormChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid street.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <button className='me-3 btn-random-data' onClick={fillWithRandomData} type="button">
                                            Fill with random data
                                        </button>
                                        <button className='btn-submit' type="submit">
                                            Submit
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        </>
                    )}
                </Col>
                <Col className='ps-3 ps-md-4 order-1 order-md-2 order-box'>
                    <Row>
                        <Col className='heading'>Order Summary</Col>
                        <Col className='d-flex justify-content-end secondary'>
                            <div className='d-flex align-items-center me-3'>{orders.quantity} item(s) in cart </div>
                            <button onClick={showAllOrders} className='angle-down-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                    <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                                </svg>
                            </button>
                        </Col>
                    </Row>
                    <div className='order-summary' style={{ display: isOpen ? 'block' : 'none' }}>
                        {orders.items.map((order) => {
                            return (
                                <Row className='order' key={order.id}>
                                    <Col xs={5} lg={2}>
                                        <div className='order-image' style={{ backgroundImage: `url("${order.image}")` }}></div>
                                    </Col>
                                    <Col xs={5} lg={8}>{order.title}</Col>
                                    <Col xs={2} className='price'>{order.price * order.quantity} $</Col>
                                </Row>
                            )
                        })}
                    </div>
                    <Row className='order-summary-bottom-bar'>
                        <Col>
                            <Row>
                                <Col>
                                    <div className='border-line my-4'></div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col className='position-title'>Cart Subtotal</Col>
                                <Col className='position-price'>{parseFloat(orders.totalSum - orders.totalSum * 0.2).toFixed(2)}$</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col className='position-title'>Tax (20%)</Col>
                                <Col className='position-price'>{parseFloat(orders.totalSum * 0.2).toFixed(2)}$</Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col className='position-title'>Order Total</Col>
                                <Col className='position-price'>{orders.totalSum} $</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
