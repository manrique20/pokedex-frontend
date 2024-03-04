import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Search.css";

const Search = ({ pokemonData, setPokemonData, setReload, reload }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const getPokemonByName = (searchTerm) => {
      return pokemonData.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    };
    if (keyword) {
      setPokemonData(getPokemonByName(keyword));
    } else {
      setReload(!reload);
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search"
        className="searchBox"
      >
      </Form.Control>
      <div className="buttonContainer">
        <Button type="submit" variant="outline-light" className="search-button">
          Search
        </Button>
      </div>
    </Form>
  );
};
export default Search;
