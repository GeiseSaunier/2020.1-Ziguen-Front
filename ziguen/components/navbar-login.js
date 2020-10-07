import { Navbar, Nav, Row } from 'react-bootstrap'

export default function navbar() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <img
          className="logo"
          src="/img/logo.png"
          alt="Logo"
        />
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" id = "botao-nav">Página Inicial</Nav.Link>
            <Nav.Link href="/sobre" id = "botao-nav">Sobre</Nav.Link>
            <Nav.Link href="/ajuda" id = "botao-nav">Ajuda</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}