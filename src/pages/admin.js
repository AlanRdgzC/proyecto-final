import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function admin() {
  const [gametitle, setGametitle] = useState("");
  const [gamedescription, setGamedescription] = useState("");
  const [gamelaunch, setGamelaunch] = useState("");
  const [gamedeveloper, setGamedeveloper] = useState("");
  const [gamemode, setGamemode] = useState("");
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
      gametitle: gametitle,
      gamedescription: gamedescription,
      gamelaunch: gamelaunch,
      gamedeveloper: gamedeveloper,
      gamemode: gamemode,
      image: image,
      state: state,
    };

    axios
      .post("http://localhost:5000", newGame)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Game Name</Form.Label>
        <Form.Control
          placeholder="Nombre del juego"
          value={gametitle}
          onChange={nameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Descripcion del juego"
          value={gamedescription}
          onChange={descriptionChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Release Date</Form.Label>
        <Form.Control
          placeholder="Fecha de lanzamiento"
          value={gamelaunch}
          onChange={launchChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>GameDev</Form.Label>
        <Form.Control
          placeholder="Desarrolladora del juego"
          value={gamedeveloper}
          onChange={devChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Players</Form.Label>
        <Form.Control
          placeholder="Cantidad de jugadores"
          value={gamemode}
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
  );
}

export default admin;
