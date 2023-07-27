import React from "react";
import styles from "../styles/pendientes.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Juegopeque from "@/components/Juegopeque";

function pendientes() {
  return (
    <div id={styles.Fondo}>
      <header id={styles.Titulo}>
        <h1>Pendientes</h1>
      </header>
      <Container>
        <Row>
          <Col>
            <Juegopeque
              gametitle="Hollow Knight"
              color="warning"
              image="Images/HK.jpg"
            />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Juegopeque gametitle="eje" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Juegopeque gametitle="eje" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="warning" image="Images/HK.jpg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default pendientes;
