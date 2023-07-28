import React from "react";
import styles from "../styles/jugando.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Juegopeque from "@/components/Juegopeque";

function jugando() {
  return (
    <div id={styles.Fondo}>
      <header id={styles.Titulo}>
        <h1>Jugando</h1>
      </header>

      <Juegopeque
        gametitle="Hollow Knight"
        color="success"
        image="Images/HK.jpg"
      />
    </div>
  );
}

export default jugando;
