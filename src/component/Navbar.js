import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap"

const NavbarHead = () => {
    return(
        <Navbar bg="light" expand="false">
            <Container>
                <Navbar.Brand>Home</Navbar.Brand>
                <Navbar.Toggle arial-controls="offcanvasNavbar" />
                <Navbar.Offcanvas id="offcanvasNavbar" arial-labelledby="offcanvasNavbar" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Welcome to My Website</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-frow-1 pe-3">
                            <Nav.Link className="text-dark">Home</Nav.Link>
                            <Nav.Link className="text-danger">Logout</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarHead;