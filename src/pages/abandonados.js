import React from "react";
import styles from "../styles/abandonados.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Juegopeque from "@/components/Juegopeque";

function abandonados() {
  return (
    <div id={styles.Cementerio}>
      <header id={styles.Titulo}>
        <h1>abandonados</h1>
      </header>

      <Juegopeque
        gametitle="Hollow Knight"
        color="danger"
        image="Images/HK.jpg"
      />
    </div>
  );
}

export default abandonados;
