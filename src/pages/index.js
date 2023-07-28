import React, { useEffect, useState } from "react";
import axios from "axios";
import Juego from "../components/Juego";
import styles from "../styles/index.module.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [characterToUpdate, setCharacterToUpdate] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  function getAllGames() {
    axios.get("http://localhost:5000/api/juegos/").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    //<div style={{ backgroundColor: "lightslategray" }}>
    <div className={styles.body}>
      <header id={styles.Titulo}>
        <h1>Gaming Database</h1>
      </header>
      {data.map((info) => {
        return (
          <Juego
            image={info.image}
            gameTitle={info.gameTitle}
            gameDescription={info.gameDescription}
            gameLaunch={info.gameLaunch}
            gameDeveloper={info.gameDeveloper}
            gameMode={info.gameMode}
            state={info.state}
          />
        );
      })}

      <Juego
        image="Images/HK.jpg"
        gameTitle="Hollow Knight"
        gameDescription="¡Forja tu propio camino en Hollow Knight! Una aventura épica
      a través de un vasto reino de insectos y héroes que se
      encuentra en ruinas."
        gameLaunch="24 FEB 2017"
        gameDeveloper="Team Cherry"
        gameMode="Un jugador"
      />
    </div>
  );
}
