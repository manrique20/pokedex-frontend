import React, { useEffect, useState } from 'react';
import Header from '../Molecule/Header/Header';
import axios from 'axios';
import CardInfo from '../Molecule/CardInfo';
import PokeCard from '../Atoms/PokeCard/PokeCard';
import "./MyTeam.css";

const MyTeam = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [ventanaAbierta, setVentanaAbierta] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [detailed, setDetailed] = useState(null);
  const [pokemonSelected, setPokemonSelected] = useState(null);

  const handleClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setVentanaAbierta(true);
    
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`
        );
        const details = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`
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
    setSelectedPokemon(null);
    setVentanaAbierta(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:3001/trainer/${userId}`);
        setUserData(response.data);
      } catch (error) {
        setError(error);
      }
    };
  
    fetchUserData();
  }, []);

  if (!userData) return <span>Loading...</span>;

  return (
    <div className="body-My-Team">
      <Header/>
      <div className="all-container">
        <div className="pokedex-container">
          <div className="pokedex">
            {userData.pokemonDetailsApi.map((elemento) => (
              <PokeCard key={elemento.id} pokemon={elemento} openModal={()=>handleClick(elemento)} />
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
  );
};

export default MyTeam;
