import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

export default function teste() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="#home">Mais Vendidas</Link>
            <Link href="#link">Iniciar Sessão</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/ajuda">Ajuda</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}