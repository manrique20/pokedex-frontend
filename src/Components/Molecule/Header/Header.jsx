import "./Header.css";
import Search from "../../Atoms/SearcheMethods/Search";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({ pokemonData, setPokemonData, setReload, reload }) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header>
      <a href="/" title="Home" className="home-container">
        <img
          className="PokedexTitle"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon"
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
          {isLoggedIn ? (
            <><button className="MyTeam">
              <Link to="/myteam" className="MyTeam">
                My Team
              </Link>
            </button>
              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="sign-up">
                Sign up
              </Link>
              <Link to="/login" className="log-in">
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="pikachu-container">
        <img
          className="pikachu-corriendo"
          src="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"
          alt="Animal corriendo"
        />
      </div>
    </header>
  );
};

export default Header;
