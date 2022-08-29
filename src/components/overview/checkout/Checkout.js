import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './checkout.css'

export default function Checkout() {
    const initialValues = { name: '', surname: '', email: '', phoneNumber: '', city: '', zipCode: '', street: '' }
    const [inputs, setInputs] = useState(initialValues);
    const [validated, setValidated] = useState(false);

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            // event.stopPropagation();
        }
        setValidated(true);
    };

    const fillWithRandomData = () => {
        setInputs({name: 'John', surname: 'Doe', email: 'john@doe.com', phoneNumber: '88889999', city: 'London', zipCode: '2022', street: 'London street 123'})
    }


    return (
        <Container className='checkout'>
            <Row>
                <Col className='checkout-heading'>Checkout</Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col className='form' sm={6}>
                            <Form className='shipping-form mb-3' noValidate validated={validated} onSubmit={handleSubmit}>
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
                                        <Button variant="light" className='me-3' onClick={fillWithRandomData}>
                                            Fill with random data
                                        </Button>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
