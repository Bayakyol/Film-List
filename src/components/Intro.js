import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Intro = () => {
  return (
    <div className='intro'>
        <Container className='text-white text-center d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
         <div className='title'>NOT FREE</div>
         <div className='title'>NO TICKETS</div>
         <div className='introButton mt-4 text-center'>
           <Button variant='dark'>Film List</Button>
         </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Intro
