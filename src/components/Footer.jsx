import "bootstrap/dist/css/bootstrap.min.css"
import "./Footer.css"
import Button from 'react-bootstrap/Button'

const Footer = ()=>{
    return(
        <div className="footer">
            <p>Para conocer más de estos asombrosos animales puedes visitarnos</p>
            <Button className="boton" variant="success"><a href="https://www.instagram.com">Instagram</a></Button>{' '}
        </div>
    )
}

export default Footer