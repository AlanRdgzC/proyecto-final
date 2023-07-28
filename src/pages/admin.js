import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/admin.module.css";
import axios from "axios";

function admin() {
  const [gameTitle, setGametitle] = useState("");
  const [gameDescription, setGamedescription] = useState("");
  const [gameLaunch, setGamelaunch] = useState("");
  const [gameDeveloper, setGamedeveloper] = useState("");
  const [gameMode, setGamemode] = useState("");
  const [image, setImage] = useState("");
  const [state, setState] = useState("Any");

  function nameChange(e) {
    setGametitle(e.target.value);
  }

  function descriptionChange(e) {
    setGamedescription(e.target.value);
  }

  function launchChange(e) {
    setGamelaunch(e.target.value);
  }

  function devChange(e) {
    setGamedeveloper(e.target.value);
  }
  function modeChange(e) {
    setGamemode(e.target.value);
  }
  function imageChange(e) {
    setImage(e.target.value);
  }

  function addGame() {
    let newGame = {
      routeName: gameTitle.split(" ").join("").toLowerCase(),
      gameTitle: gameTitle,
      gameDescription: gameDescription,
      gameLaunch: gameLaunch,
      gameDeveloper: gameDeveloper,
      gameMode: gameMode,
      image: image,
      state: state,
    };

    axios
      .post("http://localhost:5000/api/juegos", newGame)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div id={styles.Fondo}>
      <header id={styles.Titulo}>
        <h1>Games Administration</h1>
      </header>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Game Name</Form.Label>
                <Form.Control
                  placeholder="Nombre del juego"
                  value={gameTitle}
                  onChange={nameChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Descripcion del juego"
                  value={gameDescription}
                  onChange={descriptionChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  placeholder="Fecha de lanzamiento"
                  value={gameLaunch}
                  onChange={launchChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>GameDev</Form.Label>
                <Form.Control
                  placeholder="Desarrolladora del juego"
                  value={gameDeveloper}
                  onChange={devChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Players</Form.Label>
                <Form.Control
                  placeholder="Cantidad de jugadores"
                  value={gameMode}
                  onChange={modeChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>ImageURL</Form.Label>
                <Form.Control
                  placeholder="Link de la imagen del juego"
                  value={image}
                  onChange={imageChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={addGame}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default admin;
