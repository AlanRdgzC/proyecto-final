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
                  <Card.Title>{props.gametitle}</Card.Title>
                  <Card.Text>{props.gamedescription}</Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item variant="dark">
                    FECHA DE LANZAMIENTO:<br></br> {props.gamelaunch}
                  </ListGroup.Item>

                  <ListGroup.Item variant="dark">
                    DESARROLLADOR:<br></br> {props.gamedeveloper}
                  </ListGroup.Item>

                  <ListGroup.Item variant="dark">
                    {props.gamemode}
                  </ListGroup.Item>
                </ListGroup>

                <DropdownButton
                  id="boton-principal"
                  title="Enviar a"
                  variant="success"
                >
                  <Dropdown.Item href="#/action-1">Pendientes</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Jugando</Dropdown.Item>
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
