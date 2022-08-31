import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ProgressBar from './progress-bar/ProgressBar';
import CartOverview from './cart-overview/CartOverview';
import Checkout from './checkout/Checkout';
import Payment from './payment/payment';
import { useSelector } from 'react-redux'

export default function overview() {
    const currentStep = useSelector((state) => state.steps.currentStep)
    const cart = useSelector((state) => state.orders.items)
    const url = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if (cart.length === 0) navigate('/')
    },[])
    return (
        <>
            <ProgressBar step={currentStep}/>
            {
                {
                    'bag-overview': <CartOverview/>,
                    'checkout': <Checkout/>,
                    'payment': <Payment/>
                }[url.step]
            }
        </>
    )
}
