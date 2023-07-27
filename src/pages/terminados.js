import React from "react";
import styles from "../styles/terminados.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Juegopeque from "@/components/Juegopeque";

function terminados() {
  return (
    <div id={styles.Fondo}>
      <header id={styles.Titulo}>
        <h1>Terminados</h1>
      </header>
      <Container>
        <Row>
          <Col>
            <Juegopeque
              gametitle="Hollow Knight"
              color="info"
              image="Images/HK.jpg"
            />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Juegopeque gametitle="eje" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Juegopeque gametitle="eje" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="info" image="Images/HK.jpg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default terminados;
