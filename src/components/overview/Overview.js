import React from 'react'
import { useParams } from 'react-router-dom';
import ProgressBar from './progress-bar/ProgressBar';
import CartOverview from './cart-overview/CartOverview';
import Checkout from './checkout/Checkout';

export default function overview() {
    const currentStep = useParams()
    return (
        <>
            <ProgressBar step={currentStep.step}/>
            {
                {
                    'bag-overview': <CartOverview/>,
                    'checkout': <Checkout/>
                }[currentStep.step]
            }
        </>
    )
}
