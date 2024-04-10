import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './products.css'
import Product from '../product/Product';
import ProductsLoading from './ProductsLoading';
import { findError } from '../../features/error/errorSlice';
import setDYContext from '../../features/DY/dyContext';

export default function products() {
    const currentCategory = useSelector((state) => state.category.value)
    const [loading, setLoading] = useState(false)
    const [products, getProducts] = useState('')
    const api = useSelector((state) => state.api.url)
    const dispatch = useDispatch()
    useEffect(() => {
        if (currentCategory === 'about-us' || currentCategory === 'contact-us') {
            setDYContext('OTHER', [currentCategory]);
        } else {
            setDYContext('CATEGORY', [currentCategory]);
        }
        getAllProducts()
    }, [currentCategory])

    const getAllProducts = () => {
        setLoading(true)
        let request = ''
        if (currentCategory === 'all') request = `/products`
        else request = `/products/category/${currentCategory}`
        axios({
            method: 'GET',
            baseURL: `${api}`,
            url: request,
        })
            .then(({ data }) => {
                getProducts(data)
            })
            .catch(err => {
                console.dir(err)
                dispatch(findError(true))
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <Container className='products'>
            {
                loading ? (
                    <ProductsLoading />
                ) : (
                    <>
                        <Row className='heading-category'>
                            <Col>{currentCategory.toUpperCase()}</Col>
                        </Row>
                        <Row>
                            {
                                Object.values(products).map((product) => {
                                    return (
                                        <Product key={product.id} product={product} />
                                    )
                                })
                            }
                        </Row>
                    </>
                )
            }
        </Container>
    )
}
