import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux'
import './progress-bar.css'
import { motion } from 'framer-motion/dist/framer-motion'

export default function ProgressBar(props) {
  const steps = useSelector((state) => state.steps.steps)
  const currentStep = props.step
  const currentStepIndex = steps.findIndex((step) => step.name=== currentStep)
  return (
    <Container className='progress-bar-box'>
      <Row>
        {steps.map((step, index) => {
          if (index === steps.length - 1) return (
            <Col key={step.name} className={`step ${currentStepIndex >= index ? ('active') : null}`}>
              <Col className={`progress-line-box`}>
                <div className='progress-line'></div>
              </Col>
            </Col>
          )
          return (
            <div key={step.name} className={`step ${currentStepIndex >= index? ('active') : null}`}>
              <Col className={`progress-line-box`}>
                <motion.div initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1 }} className='progress-line'>
                </motion.div>
              </Col>
              <div className='step-name'>
                <div className='step-index'>{index+1}</div>
                <div className='step-title'>
                  {step.title.toUpperCase()}
                </div>
              </div>
            </div>
          )
        })}
      </Row>
    </Container >
  )
}
