import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import Teste from '../pages/api/Test'
import { useState } from 'react'

export default function Login() {

    const email = "ad1mi1@gmsail"
    const password = "2321s23"

    async  function submitForm(){
        const res = await fetch('Teste', {
            method: 'POST',
            body: JSON.stringify({ email, password})
        })
    }


    return (
        <Container>
        <Row className="justify-content-md-center">
          <h3 className="text-center login-titulo">Login</h3>
        </Row>

        <Row>
          <Col sm={3}></Col>
          <Col sm={4}>
              <Form className="login-form">
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" name= "password" placeholder="Senha" />
                </Form.Group>
                <Button variant="secondary" Onclick = {submitForm} size="lg">Entrar</Button>
              </Form>
          </Col>
          <Col sm={5}></Col>
        </Row>
      </Container>
      
    )
}