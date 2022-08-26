import React from 'react'
import { useParams } from 'react-router-dom';
import ProgressBar from './progress-bar/ProgressBar';
import CartOverview from './cart-overview/CartOverview';

export default function overview() {
    const currentStep = useParams()
    return (
        <>
            <ProgressBar step={currentStep.step}/>
            {
                {
                    'cart-overview': <CartOverview/>
                }[currentStep.step]
            }
        </>
    )
}
