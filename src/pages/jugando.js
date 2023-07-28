import React, { useEffect, useState } from "react";
import axios from "axios";
import Juego from "../components/Juego";
import styles from "../styles/index.module.css";


function jugando() {
  const [data, setData] = useState([]);
  const [characterToUpdate, setCharacterToUpdate] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  function getAllGames() {
    axios.get("http://localhost:5000/api/juegos/").then((response) => {
      params{
        state: jugando;
        alert(response);
        setData(response.data);
      }
    });
  }

  useEffect(() => {
    getAllGames();
  }, []);
  return (
    <div id={styles.Fondo}>
      <header id={styles.Titulo}>
        <h1>Jugando</h1>
      </header>

      {data.map((info) => {
          return (
            <div className={styles.Gdcard}>
              <Juego
                classname={styles.cards}
                image={info.image}
                gameTitle={info.gameTitle}
                gameDescription={info.gameDescription}
                gameLaunch={info.gameLaunch}
                gameDeveloper={info.gameDeveloper}
                gameMode={info.gameMode}
                state={info.state}
                id = {info._id}
              />
            </div>
          );
        })}
    </div>
  );
}

export default jugando;
