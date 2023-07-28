import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

// Función para verificar si una URL es un enlace de imagen válido
function isImageUrl(url) {
  // Expresión regular para verificar si la URL termina con una extensión de archivo de imagen común
  const imageExtensions = /\.(png|jpe?g|gif|bmp|svg)$/i;
  return imageExtensions.test(url);
}

function Juego(props) {
  const imageUrl = props.image;
  const showImage = isImageUrl(imageUrl);
  const [gameTitle, setGametitle] = useState("");
  const [gameDescription, setGamedescription] = useState("");
  const [gameLaunch, setGamelaunch] = useState("");
  const [gameDeveloper, setGamedeveloper] = useState("");
  const [gameMode, setGamemode] = useState("");
  const [image, setImage] = useState("");
  const [state, setState] = useState("Any");

  function UpdateGame(id,newState){
 /*   props.state;
    let newGame = {
      routeName: gameTitle.split(" ").join("").toLowerCase(),
      gameTitle: gameTitle,
      gameDescription: gameDescription,
      gameLaunch: gameLaunch,
      gameDeveloper: gameDeveloper,
      gameMode: gameMode,
      image: image,
      state: state,
    };*/

    let cambios = {
      id : id,
      state: newState
    }

    //alert(cambios.id)
    axios
      .put("http://localhost:5000/api/actualizarEstado", cambios)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="Gcard">
      {/* Contenedor para los componentes */}
      <Card
        bg="dark"
        text={"dark" === "light" ? "dark" : "white"}
        border="success"
        key="dark"
        style={{ width: "18rem", textAlign: "center" }}
      >
        {showImage && <Card.Img variant="top" src={imageUrl} />}
        <Card.Body>
          <Card.Title>{props.gameTitle}</Card.Title>
          <Card.Text>{props.gameDescription}</Card.Text>
        </Card.Body>
        <ListGroup>
          <ListGroup.Item variant="dark">
            FECHA DE LANZAMIENTO:<br></br> {props.gameLaunch}
          </ListGroup.Item>

          <ListGroup.Item variant="dark">
            DESARROLLADOR:<br></br> {props.gameDeveloper}
          </ListGroup.Item>

          <ListGroup.Item variant="dark">{props.gameMode}</ListGroup.Item>
        </ListGroup>

        <DropdownButton id="boton-principal" title="Enviar a" variant="success">
          <Dropdown.Item href="/jugando" onClick={() => UpdateGame(props.id,"jugando")}>
            Jugando
          </Dropdown.Item>
          <Dropdown.Item href="/pendientes" onClick={() => UpdateGame(props.id,"pendientes")}>
            Pendiente
          </Dropdown.Item>
          <Dropdown.Item href="/terminados" onClick={() => UpdateGame(props.id,"terminados")}>
            Terminado
          </Dropdown.Item>
          <Dropdown.Item href="/abandonados" onClick={() => UpdateGame(props.id,"abandonados")}>
            Abandonado
          </Dropdown.Item>
        </DropdownButton>
      </Card>
    </div>
  );
}

export default Juego;
