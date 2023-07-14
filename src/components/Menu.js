import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/juego.jpg";

function Menu() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/juegos">Juegos</Nav.Link>
            <NavDropdown title="Mi lista" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pendientes">Pendientes</NavDropdown.Item>
              <NavDropdown.Item href="/jugando">Jugando</NavDropdown.Item>
              <NavDropdown.Item href="/terminados">Terminados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/abandonados">
                Abandonados
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
