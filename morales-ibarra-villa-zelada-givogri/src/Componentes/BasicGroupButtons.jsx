import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

function BasicGroupButtons() {
    return (
        
        <Container fluid>
            <ButtonGroup aria-label="Basic example" className='my-2'>
                <Button variant="outline-dark" size="lg"><i class="uil uil-facebook-f"></i></Button>
                <Button variant="outline-dark" size="lg"><i class="uil uil-instagram"></i></Button>
                <Button variant="outline-dark" size="lg"><i class="uil uil-youtube"></i></Button>
            </ButtonGroup>
        </Container>
    )
}

export default BasicGroupButtons