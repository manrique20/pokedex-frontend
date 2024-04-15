import { useState } from "react";
import "./CardInfo.css";
import closeImage from "../../img/closeImage.png";
import openImage from "../../img/openImage.png";
import { toast } from "react-toastify";
import axios from "axios";

const CardInfo = ({ pokemon, close, details }) => {
  const [showPopup, setShowPopup] = useState(true);
  const userId = localStorage.getItem("userId");
  const [clicked, setClicked] = useState(false);

  const handleClick = async (userId, pokemonId) => {
    setClicked(!clicked);
    try {
      const response = await axios.post("http://localhost:3001/lists", {
        trainer_id: parseInt(userId),
        pokemonId
      });
      toast.success("Id list created successfully");
      console.log(response.data); // Puedes acceder a los datos de respuesta si los necesitas
    } catch (err) {
      toast.error(err?.response?.data?.message || "ID list creation error");
    }
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
                  <button
                    className="pokeball-click"
                    onClick={() => handleClick(userId, pokemon.id)}
                  >
                    {clicked ? (
                      <img
                        className="clicked"
                        src={closeImage}
                        alt="Imagen Clicked"
                      />
                    ) : (
                      <img
                        className="default"
                        src={openImage}
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
