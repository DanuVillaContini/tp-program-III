import { Container, Row} from "react-bootstrap"
import BasicGroupButtons from "./BasicGroupButtons"


function Footer() {
    return (
        <>
        <footer className="mt-2 p-2">
            <Container className="text-center">
                <Row className="my-2">
                    <h2>UTN - FRT</h2>
                    <span>Todos los derechos Reservados &copy;</span>
                </Row>
                <Row className="my-2">
                    <BasicGroupButtons/>
                </Row>
            </Container>
        </footer>
        </>
    )
}

export default Footer