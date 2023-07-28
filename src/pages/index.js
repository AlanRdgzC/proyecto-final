import React, { useEffect, useState } from "react";
//import axios from "axios";
import Juego from "../components/Juego";
import styles from "../styles/index.module.css";

export default function Home() {
  const [data, setData] = useState([]);

  // function getAllGames() {
  //   axios.get("http://localhost:5000").then((response) => {
  //     console.log(response);
  //     setData(response.data);
  //   });
  // }

  // useEffect(() => {
  //   getAllGames();
  // }, []);

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
            gametitle={info.gametitle}
            gamedescription={info.gamedescription}
            gamelaunch={info.gamelaunch}
            gamedeveloper={info.gamedeveloper}
            gamemode={info.gamemode}
            state={info.state}
          />
        );
      })}

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
    </div>
  );
}
