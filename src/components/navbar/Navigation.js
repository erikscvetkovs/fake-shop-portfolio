import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentCategory } from '../../features/category/categorySlice'
import { changeCartState } from '../../features/cart/cartSlicer'
import { Link } from 'react-router-dom'
import './navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {

    const [categories, getCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const api = useSelector((state) => state.api.url)
    const currentCategory = useSelector((state) => state.category.value)
    const orders = useSelector((state) => state.orders)
    const dispatch = useDispatch();

    useEffect(() => {
        getAllCategories()
    }, [])

    const getAllCategories = () => {
        setLoading(true)
        axios({
            method: 'GET',
            baseURL: `${api}`,
            url: 'products/categories',
        })
            .then(({ data }) => {
                getCategory(data)
            })
            .catch(err => console.dir(err))
            .finally(() => {
                setLoading(false)
            })
    }

    const changeCategory = (category) => {
        dispatch(getCurrentCategory(category))
    }

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className='image-logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z" />
                    </svg>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        {
                            loading ? (
                                <Nav.Link className='active'>Loading</Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as={Link} className={currentCategory === 'all' ? 'active' : ''} to="/" onClick={() => changeCategory('all')}>All</Nav.Link>
                                    {
                                        Object.values(categories).map(category => {
                                            return (
                                                <Nav.Link as={Link} className={currentCategory === category ? 'active' : ''} key={category} to={`category/${category}`} onClick={() => changeCategory(category)}>
                                                    {category.toUpperCase()}
                                                </Nav.Link>
                                            )
                                        })
                                    }
                                </>
                            )
                        }
                    </Nav>
                    <Nav className='cart'>
                        <div className='cart-nav-button' onClick={()=>{
                            dispatch(changeCartState(true))
                        }}>
                            {orders.items.length > 0 ? (
                                <div className='cart-counter'>{orders.items.length}</div>
                            ) : null }
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                            </svg>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
