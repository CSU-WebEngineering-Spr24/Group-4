import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import marvelLogo from '../images/MarvelLogo.png';
import { searchCharacters, searchComics } from '../services/marvelApi';
import './Home.css';

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  const [comics, setComics] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const encodedSearchTerm = encodeURIComponent(searchTerm.trim());
      const searchURL = `/search?q=${encodedSearchTerm}`;

      navigate(searchURL);

      window.history.pushState(null, '', searchURL);

      const fetchSearchResults = async () => {
        try {
          const charactersData = await searchCharacters(searchTerm);
          const comicsData = await searchComics(searchTerm);
          setCharacters(charactersData.data.results);
          setComics(comicsData.data.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
      fetchSearchResults();
    }

  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const charactersData = await searchCharacters(query);
        const comicsData = await searchComics(query);
        setCharacters(charactersData.data.results);
        setComics(comicsData.data.results);
      } catch (error) {
        console.error('Error fetching character search results:', error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);




  return (
    <div className="search-results-container">
    <header className="header">
      <nav className="container d-flex justify-content-between align-items-center">
        <div className="label">
          <div className="text-wrapper">
            <Link to="/" className="text-light text-decoration-none mx-3">
              Home
            </Link>
            <Link to="/comics" className="text-light text-decoration-none mx-3">
              Comics
            </Link>
            <Link to="/characters" className="text-light text-decoration-none mx-3">
              Characters
            </Link>
          </div>
        </div>
        <div className="image">
          <a href="/">
            <img src={marvelLogo} alt="Marvel Logo" />
          </a>
        </div>
        <div className="d-flex">
          <input
            type="text"
            id="search"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
          />
          <button className="btn btn-light" onClick={handleSearch}>
            Search
          </button>
        </div>
      </nav>
    </header>

    <main className="container my-5">
  <h2>Search Results for "{searchTerm}"</h2>

  {characters.length > 0 && (
    <div className="characters-results">
      <h3>Characters</h3>
      <div className="row">
        {characters.map((character) => (
          <div key={character.id} className="col-3">
            <div className="card">
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <a href={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                   className="btn btn-primary">See Image</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}

      {comics.length > 0 && (
          <div className="comics-results">
      <h3>Comics</h3>
      <div className="row">
        {comics.map((comic) => (
          <div key={comic.id} className="col-3">
            <div className="card">
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{comic.title}</h5>
                <a href={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                   className="btn btn-primary">See Image</a>
              </div>
            </div>
          </div>
        ))}
      </div>
          </div>
      )}

      {characters.length === 0 && comics.length === 0 && (
    <p>No results found.</p>
  )}
</main>
  </div>
  );
}

export default SearchResults;

