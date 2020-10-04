import { Card } from 'react-bootstrap'

export default function CardViagem() {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Img variant="top" src="/img/barco-ilustracao.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
      </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}