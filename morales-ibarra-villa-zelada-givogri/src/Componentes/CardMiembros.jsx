import { Button, Card, Container } from "react-bootstrap";
import grupo from '../Img/grupo.jpeg' 

export default function CardMiembros() {
    return (
        <>
            <Container fluid className="m-3">
            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src={grupo} />
                <Card.Body>
                    <Card.Title>Development Team</Card.Title>
                    <Card.Text>
                        Somos un equipo de jovenes huerfanos, esquizos maniaticos, estudiantes de Programacion que lo perdimos todo, pero seguimos vivos.
                    </Card.Text>
                    <Button variant="outline-dark" size="lg">Contactar</Button>
                </Card.Body>
            </Card>
            </Container>
        </>
    )
}
