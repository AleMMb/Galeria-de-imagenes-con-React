import "bootstrap/dist/css/bootstrap.min.css"
import "./Card.css"
import Card from 'react-bootstrap/Card'

const Carta = (props) => {
    return (
        <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body className="cuerpo_carta">
        <Card.Title className="titulo_carta">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
    )
}

export default Carta