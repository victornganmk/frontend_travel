import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar_Top = () => {
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">TRAVEL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto testing w-100">
                        <Nav.Link href="#">Home</Nav.Link>
                        <NavDropdown title="Wellington" id="basic-nav-dropdown_1">
                            <NavDropdown.Item href="#">Introduction</NavDropdown.Item>
                            <NavDropdown.Item href="#">Attractions</NavDropdown.Item>
                            <NavDropdown.Item href="#">Food & Accommodation</NavDropdown.Item>
                            <NavDropdown.Item href="#">Transpportaton</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Prague" id="basic-nav-dropdown_2">
                            <NavDropdown.Item href="#">Introduction</NavDropdown.Item>
                            <NavDropdown.Item href="#">Attractions</NavDropdown.Item>
                            <NavDropdown.Item href="#">Food & Accommodation</NavDropdown.Item>
                            <NavDropdown.Item href="#">Transpportaton</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Arusha" id="basic-nav-dropdown_3">
                            <NavDropdown.Item href="#">Introduction</NavDropdown.Item>
                            <NavDropdown.Item href="#">Attractions</NavDropdown.Item>
                            <NavDropdown.Item href="#">Food & Accommodation</NavDropdown.Item>
                            <NavDropdown.Item href="#">Transpportaton</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Cusco" id="basic-nav-dropdown_4">
                            <NavDropdown.Item href="#">Introduction</NavDropdown.Item>
                            <NavDropdown.Item href="#">Attractions</NavDropdown.Item>
                            <NavDropdown.Item href="#">Food & Accommodation</NavDropdown.Item>
                            <NavDropdown.Item href="#">Transpportaton</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Useful info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar_Top