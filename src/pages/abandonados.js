import React from "react";
import styles from "../styles/abandonados.module.css";
import Form from "react-bootstrap/Form";

function abandonados() {
  return (
    <div id={styles.Cementerio}>
      <header id={styles.Titulo}>
        <h1>abandonados</h1>
      </header>

      <div class="card" style={{ width: "18rem" }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Minecraft</h5>
          <p class="card-text">
            Minecraft es un juego de mundo abierto, y no tiene un fin claramente definido. Esto permite una gran libertad en cuanto a la elección de su forma de jugar. A pesar de ello, el juego posee un sistema que otorga logros por completar ciertas acciones.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">FECHA DE LANZAMIENTO: <br /> 17 de mayo del 2009</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
    </div>
  );
}

export default abandonados;

