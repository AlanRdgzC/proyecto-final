import React from "react";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Juegopeque(props) {
  return (
    <Card style={{ width: "12rem", textAlign: "center" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.gametitle}</Card.Title>
        <DropdownButton
          id="dropdown-basic-button "
          variant={props.color}
          title="Estado"
        >
          <Dropdown.Item href="/jugando">Jugando</Dropdown.Item>
          <Dropdown.Item href="/pendientes">Pendiente</Dropdown.Item>
          <Dropdown.Item href="/terminados">Terminado</Dropdown.Item>
          <Dropdown.Item href="/abandonados">Abandonado</Dropdown.Item>
        </DropdownButton>
      </Card.Body>
    </Card>
  );
}

export default Juegopeque;
