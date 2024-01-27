import React, { useEffect, useState } from "react";
import "./artist.css";
import PropTypes from 'prop-types';  // Importe PropTypes

const Artist = ({ searchInput }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3030/artists?name_like=${searchInput}`;

    fetch(url)
      .then((response) => response.json())
      .then((res) => setArtists(res));
  }, [searchInput]);

  console.log(artists);

  return (
    <div id="result-artist">
      <div className="grid-container">
        {artists.map((artist) => (
          <div key={artist.name} className="artist-card">
            <div className="card-img">
              <img id="artist-img" className="artist-img" src={artist.urlImg} />
              <div className="play">
                <span className="fa fa-solid fa-play"></span>
              </div>
            </div>
            <div className="card-text">
              <a title={artist.name} className="artist-link" href="">
                <span className="artist-name" id="artist-name">
                  {artist.name}
                </span>
                <span className="artist-categorie">Artista</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Artist.propTypes = {
  searchInput: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // Adicione outras propriedades do artista conforme necessário
    })
  ).isRequired,
};

export default Artist;
