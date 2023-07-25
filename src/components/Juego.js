import React from "react";
import Card from "react-bootstrap/Card";
import NavDropdown from "react-bootstrap/NavDropdown";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Juego(props) {
  return (
    <>
      <Row xs={1} md={4} className="gx-3 gy-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col key={idx}>
            {["Dark"].map((variant) => (
              <Card
                style={{ width: "18rem", textAlign: "center" }}
                bg={variant.toLowerCase()} //"dark"
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                border="success"
              >
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                  <Card.Title>Hollow Knight</Card.Title>
                  <Card.Text>
                    ¡Forja tu propio camino en Hollow Knight! Una aventura épica
                    a través de un vasto reino de insectos y héroes que se
                    encuentra en ruinas.
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

                <DropdownButton
                  id="boton-principal"
                  title="Enviar a"
                  variant="success"
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Pendientes</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Terminados</Dropdown.Item>
                </DropdownButton>
              </Card>
            ))}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Juego;
