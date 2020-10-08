import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default function CardViagem() {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Img variant="top" src="/img/barco-ilustracao.jpg" />
        <Card.Body>
          <Card.Title>Barco X</Card.Title>
          <Card.Text>
            Origem, Destino, Data, Horário, Preço.
          </Card.Text>
          <Button variant="warning">Comprar</Button>{' '}
        </Card.Body>
      </Card>
    </div>
  )
}