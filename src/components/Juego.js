import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavDropdown from "react-bootstrap/NavDropdown";
import ListGroup from "react-bootstrap/ListGroup";

function Juego() {
  return (
    <>
      {["Dark"].map((variant) => (
        <Card
          style={{ width: "18rem", textAlign: "center" }}
          bg="dark" //{variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          border="success"
        >
          <Card.Img variant="top" src="Images/HK.jpg" />
          <Card.Body>
            <Card.Title>Hollow Knight</Card.Title>
            <Card.Text>
              ¡Forja tu propio camino en Hollow Knight! Una aventura épica a
              través de un vasto reino de insectos y héroes que se encuentra en
              ruinas.
            </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
              FECHA DE LANZAMIENTO:<br></br> 24 FEB 2017
            </ListGroup.Item>

            <ListGroup.Item variant="dark">
              DESARROLLADOR:<br></br> Team Cherry
            </ListGroup.Item>

            <ListGroup.Item variant="dark">Un jugador</ListGroup.Item>
          </ListGroup>

          <Button variant="primary">
            <NavDropdown title="Añadir a" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pendientes">Pendientes</NavDropdown.Item>
              <NavDropdown.Item href="/jugando">Jugando</NavDropdown.Item>
              <NavDropdown.Item href="/terminados">Terminados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/abandonados">
                Abandonados
              </NavDropdown.Item>
            </NavDropdown>
          </Button>
        </Card>
      ))}
    </>
  );
}

export default Juego;
