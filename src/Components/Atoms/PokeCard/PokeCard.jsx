import "./PokeCard.css";

const PokeCard = ({ pokemon, openModal }) => {
  return (
    <>
      <div
        onClick={() => openModal(pokemon.id)}
        className={`card ${pokemon.type} ${pokemon.secondType}`}
      >
        <span className="Number"># {pokemon.id.toString().padStart(3, '0')}</span>
        <img
          className="image"
          width={135}
          alt="bulbasaur"
          src={pokemon.imagen}
        />
        <h2 className="pokemonName">{pokemon.name}</h2>
        <div className="pokemonType">
          <div className="pokemonTypeText">
            <h3>{pokemon.type} </h3>
            <h3>{pokemon.secondType ? pokemon.secondType : " "}</h3>
            <div className="circulo"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeCard;
