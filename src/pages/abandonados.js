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
      <Container>
        <Row>
          <Col>
            <Juegopeque
              gametitle="Hollow Knight"
              color="danger"
              image="Images/HK.jpg"
            />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Juegopeque gametitle="eje" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Juegopeque gametitle="eje" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
          <Col>
            <Juegopeque gametitle="ej" color="danger" image="Images/HK.jpg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default abandonados;
