import { CardGroup } from 'react-bootstrap'
import CardViagem from './card-viagem'

export default function Sugestoes() {
  return (
    <div className="container">
      <h3 className="text-center">Sugestões Para Você!</h3>
      <CardGroup>
        <CardViagem>
          <button>Comprar</button>
        </CardViagem>
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
        <CardViagem />
      </CardGroup>
    </div>
  )
}