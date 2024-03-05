import axios from "axios";
import PokeCard from "../Atoms/PokeCard/PokeCard";
import "./HomeScreen.css";
import { useEffect, useState } from "react";
import CardInfo from "../Molecule/CardInfo";
import Header from "../Molecule/Header/Header";

const HomeScreen = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [error, setError] = useState(null);
  const [detailed, setDetailed] = useState(null);
  const [reload, setReload] = useState(false);

  const [completedPokemonData, setCompletePokemonData] = useState(null);

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
    setPokemonData(null);
    setPokemonSelected(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?limit=151"
        );
        setPokemonData(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    // Cleanup function if necessary
    // return () => {
    //   cleanup logic here...
    // };
  }, [setReload, reload]);

  useEffect(() => {
    const fetchDataInformation = async () => {
      try {
        if (pokemonData) {
          const promises = pokemonData.map(async (element) => {
            const response = await axios.get(element.url);
            const imagen = response.data.sprites.front_default;
            const type = response.data.types[0].type.name;
            const secondType = response.data.types[1]?.type.name;
            const name = element.name;
            const id = response.data.id;
            return { imagen, type, name, id, secondType };
          });
          const newPokemonData = await Promise.all(promises);
          setCompletePokemonData(newPokemonData);
        }
      } catch (error) {
        throw error;
      }
    };

    fetchDataInformation();
  }, [pokemonData]);

  if (!completedPokemonData) return <span>Loading...</span>;
  return (
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
            {completedPokemonData.map((elemento) => (
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
  );
};

export default HomeScreen;
