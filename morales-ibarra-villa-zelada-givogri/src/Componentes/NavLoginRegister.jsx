import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function NavLoginRegister(props) {

    let linkText = '';
    let linkPath = '';

    if (props.type === 'login') {
        linkText = 'Log In';
        linkPath = '/login';
    } else if (props.type === 'register') {
        linkText = 'Register';
        linkPath = '/register';
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to={linkPath}>{linkText}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavLoginRegister