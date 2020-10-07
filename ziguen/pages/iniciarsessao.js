import Navbar from '../components/navbar-login'
import Footer from '../components/footer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

export default function Iniciarsessao() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="justify-content-md-center">
          <h3 className="text-center login-titulo">Login</h3>
        </Row>

        <Row>
          <Col sm={3}></Col>
          <Col sm={4}>
              <Form className="login-form">
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="secondary" size="lg">Entrar</Button>
              </Form>
          </Col>
          <Col sm={5}></Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}