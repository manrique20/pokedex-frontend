import { useState } from "react";
import "./CardInfo.css";

const CardInfo = ({ pokemon, close, details }) => {
  const [showPopup, setShowPopup] = useState(true);
  const token = localStorage.getItem("token");
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="body">
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-container">
              <div className="CardContainer">
                <button id="reload">
                  <i className="fas fa-sync-alt"></i>
                </button>
                <div className="titulo">
                  {" "}
                  # {pokemon.id.toString().padStart(3, "0")} {pokemon.name}
                </div>
                <div className="quadro">
                  <img
                    id="imgpokemon"
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt="Imagem do Pokemon"
                  />
                </div>
                <span></span>
                <div className="descricao">
                  {details.flavor_text_entries[1].flavor_text}
                </div>
                <div>
                  <h2>Reproductor de Audio</h2>
                  <audio controls>
                    <source src={pokemon.cries.latest} type="audio/mpeg" />
                    Tu navegador no soporta el elemento de audio.
                  </audio>
                </div>
                <div className="marca"></div>
                <h3>
                  Type: {pokemon.types[0].type.name}{" "}
                  {pokemon.types.length > 1 &&
                    `/ ${pokemon.types[1].type.name}`}
                </h3>
                <button className="close-button" onClick={close}>
                  X
                </button>
                <div>
                  <button onClick={handleClick}>
                    {clicked ? (
                      <img
                        src="/ruta/a/imagen-clicked.png"
                        alt="Imagen Clicked"
                      />
                    ) : (
                      <img
                        src="/ruta/a/imagen-default.png"
                        alt="Imagen Default"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CardInfo;
