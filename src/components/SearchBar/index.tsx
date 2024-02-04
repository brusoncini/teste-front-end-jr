import React from "react";
import magnifyingGlass from "./img/MagnifyingGlass.svg";
import './style.scss';

function SearchBar() {
  return (
    <form className="search-bar" action="/search" method="GET">
      <input type="text" id="search" placeholder="O que você está buscando?" />
      <button type="submit">
        <img src={magnifyingGlass} alt="Ícone de busca" />
      </button>
    </form>
  );
}

export default SearchBar;