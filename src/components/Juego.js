import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Juego(props) {
  return (
    <Card
      bg="dark"
      text={"dark" === "light" ? "dark" : "white"}
      border="success"
      key="dark"
      style={{ width: "18rem", textAlign: "center" }}
    >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.gametitle}</Card.Title>
        <Card.Text>{props.gamedescription}</Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item variant="dark">
          FECHA DE LANZAMIENTO:<br></br> {props.gamelaunch}
        </ListGroup.Item>

        <ListGroup.Item variant="dark">
          DESARROLLADOR:<br></br> {props.gamedeveloper}
        </ListGroup.Item>

        <ListGroup.Item variant="dark">{props.gamemode}</ListGroup.Item>
      </ListGroup>

      <DropdownButton id="boton-principal" title="Enviar a" variant="success">
        <Dropdown.Item href="#/action-1">Pendientes</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Jugando</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Terminados</Dropdown.Item>
      </DropdownButton>
    </Card>
  );
}

export default Juego;
