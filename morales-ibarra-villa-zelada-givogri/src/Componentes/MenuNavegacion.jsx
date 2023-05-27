import { Container, Navbar, Nav } from 'react-bootstrap'

function MenuNavegacion() {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Administracion</Nav.Link>
                        <Nav.Link href="#pricing">Carreras</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Mi Perfil : <a href="#login">Loguearse</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MenuNavegacion