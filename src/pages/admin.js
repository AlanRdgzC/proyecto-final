import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function admin() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Game Name</Form.Label>
        <Form.Control placeholder="Nombre del juego" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Descripcion del juego"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Release Date</Form.Label>
        <Form.Control placeholder="Fecha de lanzamiento" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>GameDev</Form.Label>
        <Form.Control placeholder="Desarrolladora del juego" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Players</Form.Label>
        <Form.Control placeholder="Cantidad de jugadores" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>ImageURL</Form.Label>
        <Form.Control placeholder="Link de la imagen del juego" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default admin;
