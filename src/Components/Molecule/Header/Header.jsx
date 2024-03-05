import "./Header.css";
import Search from "../../Atoms/SearcheMethods/Search";

const Header = ({ pokemonData, setPokemonData, setReload, reload }) => {
  return (
    <header>
      <div className="headerContainer">
        <a href="/" title="Home">
          <img
            className="PokedexTitle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokedex"
          />
        </a>
        <div className="palabras-container">
          <div className="palabra"></div>
          <Search
            pokemonData={pokemonData}
            setPokemonData={setPokemonData}
            setReload={setReload}
            reload={reload}
          />
          <div className="sign-login">
            <a href="/signup" className="sign-up">
              Sign up
            </a>
            <a href="/login" className="log-in">
              Log in
            </a>
          </div>
        </div>
      </div>
      <div className="pikachu-container">
      <img className="pikachu-corriendo"
        src="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"
        alt="Animal corriendo"
      />
    </div>
    </header>
  );
};

export default Header;
