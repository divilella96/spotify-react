import React from "react";
import PropTypes from 'prop-types';
import './Header.css';
import smallRight from "../../assets/icons/small-right.png";
import smallLeft from "../../assets/icons/small-left.png";
import search from "../../assets/icons/search.png";

const Header = ({ searchInput, setSearchInput }) => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Seta direita" />
        </button>
      </div>
      <div className="header__search">
        <img src={search} alt="Buscar" />
        <input
          id="search-input"
          className="search__input"
          type="text"
          maxLength="800"
          placeholder="O que você quer ouvir?"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

Header.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
};

export default Header;
