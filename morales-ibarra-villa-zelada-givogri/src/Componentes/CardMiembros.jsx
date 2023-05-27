import { Button, Card, Container } from "react-bootstrap";


export default function CardMiembros() {
    return (
        <>
            <Container fluid className="m-3">
            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src="https://st2.depositphotos.com/3662505/6878/i/450/depositphotos_68789187-stock-photo-students.jpg" />
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
