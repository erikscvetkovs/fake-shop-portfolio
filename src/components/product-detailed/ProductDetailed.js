import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './product-detailed.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { addOrder } from '../../features/order/orderSlice'
import ProductDetailedLoading from './ProductDetailedLoading';
import { motion } from 'framer-motion/dist/framer-motion'


export default function ProductDetailed() {

  const [loading, setLoading] = useState(false)
  const [product, getProduct] = useState('')
  const api = useSelector((state) => state.api.url)
  const id = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    getSingleProduct()
  }, [])

  const getSingleProduct = () => {
    setLoading(true)
    let request = `/products/${id.id}`
    axios({
      method: 'GET',
      baseURL: `${api}`,
      url: request,
    })
      .then(({ data }) => {
        getProduct(data)
      })
      .catch(err => console.dir(err))
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <Container className='product-detailed'>
      {loading ? (
        <ProductDetailedLoading />
      ) : (
        <Row>
          <Col className='product-detailed-image' sm={12} md={4}>
            <div style={{ backgroundImage: `url("${product.image}")` }}></div>
          </Col>
          <Col>
            <Row>
              <Col className='product-detailed-heading'>{product.title}</Col>
            </Row>
            <Row>
              <Col className='product-detailed-description space-top-30'>{product.description}</Col>
            </Row>
            <Row>
              <Col className='product-name-heading space-top-30'>Price:</Col>
            </Row>
            <Row>
              <Col className='product-name-heading-big space-top-15'>{product.price} $</Col>
            </Row>
            <Row>
              <Col className='product-name-heading space-top-30'>Category:</Col>
            </Row>
            <Row>
              <Col className='product-name-heading-big space-top-15'>{product.category}</Col>
            </Row>
            {product.rating !== undefined ? (
              <>
                <Row>
                  <Col className='product-name-heading space-top-30'>Rating ({product.rating.rate}):</Col>
                </Row>
                <Row>
                  <Col className='product-name-heading-big space-top-15'>
                    <div className="Stars" style={{ "--rating": `${product.rating.rate}` }} aria-label="Rating of this product is 2.3 out of 5."></div>
                  </Col>
                </Row>
                <Row>
                  <Col>{product.rating.count} votes</Col>
                </Row>
              </>
            ) : null}
            <Row>
              <Col sm={8} md={5} className='space-top-30'>
                <motion.button whileTap={{ scale: 0.9 }} className='product-detailed-add-to-cart' onClick={() => { dispatch(addOrder(product)) }}>ADD TO CART</motion.button>
              </Col>
            </Row>
          </Col>
        </Row>
      )}

    </Container>
  )
}
