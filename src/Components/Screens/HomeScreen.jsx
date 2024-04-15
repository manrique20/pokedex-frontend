import axios from "axios";
import PokeCard from "../Atoms/PokeCard/PokeCard";
import "./HomeScreen.css";
import { useEffect, useState } from "react";
import CardInfo from "../Molecule/CardInfo";
import Header from "../Molecule/Header/Header";
import LoadingScreen from "../Atoms/LoadingScreen";

const HomeScreen = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [error, setError] = useState(null);
  const [detailed, setDetailed] = useState(null);
  const [reload, setReload] = useState(false);

  const [ventanaAbierta, setVentanaAbierta] = useState(false);

  const handleClick = (id) => {
    setVentanaAbierta(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        const details = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${id}/`
        );
        setDetailed(details.data);
        setPokemonSelected(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  };
  const handleClose = () => {
    setVentanaAbierta(false);
    setPokemonSelected(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/pokedex');
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      {!pokemonData ? (
        <LoadingScreen/>        
      ): (
    <div className="body-Home-Screen">
      <Header
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
        setReload={setReload}
        reload={reload}
        
        />
      <div className="all-container">
        <div className="pokedex-container">
          <div className="pokedex">
            {pokemonData.map((elemento) => (
              <PokeCard pokemon={elemento} openModal={handleClick} />
            ))}
          </div>
          {ventanaAbierta && pokemonSelected && (
            <div className="modal">
              <CardInfo
                close={handleClose}
                pokemon={pokemonSelected}
                details={detailed}
                />
            </div>
          )}
        </div>
      </div>
    </div>
      )}
          </div>
  );
};

export default HomeScreen;
