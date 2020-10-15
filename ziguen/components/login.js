import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import axios from 'axios'

export default function Login(){
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token)
      router.push('/admin')
  }, [])
  const handleLogin = async () => {
    const formData = { email, password };
    
    try {
      const {data} = await axios.post('http://localhost:3333/sessions', formData)
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user))
      router.push('/admin')
      return
    } catch (err) {
      setError(err.error)
    }
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
                    <Form.Control type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" name= "password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                  </Form.Group>
                  <Button variant="secondary" onClick = {handleLogin} size="lg">Entrar</Button>
                </Form>
            </Col>
            <Col sm={5}></Col>
          </Row>
        </Container>
      )
}