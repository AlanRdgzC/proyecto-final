import React from "react";
import Juego from "../components/Juego";
import ListGroup from "react-bootstrap/ListGroup";
//import "./src/styles/index.module.css";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    //<div style={{ backgroundColor: "lightslategray" }}>
    <div className={styles.body}>
      <h1>home</h1>

      <Juego
        image="Images/HK.jpg"
        gametitle="Hollow Knight"
        gamedescription="¡Forja tu propio camino en Hollow Knight! Una aventura épica
      a través de un vasto reino de insectos y héroes que se
      encuentra en ruinas."
        gamelaunch="24 FEB 2017"
        gamedeveloper="Team Cherry"
        gamemode="Un jugador"
      />

      <ListGroup>
        <ListGroup.Item>No style</ListGroup.Item>
        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
        <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
        <ListGroup.Item variant="success">Success</ListGroup.Item>
        <ListGroup.Item variant="danger">Danger</ListGroup.Item>
        <ListGroup.Item variant="warning">Warning</ListGroup.Item>
        <ListGroup.Item variant="info">Info</ListGroup.Item>
        <ListGroup.Item variant="light">Light</ListGroup.Item>
        <ListGroup.Item variant="dark">Dark</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
