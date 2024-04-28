import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import marvelLogo from '../images/MarvelLogo.png';
import './Home.css';

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchTerm = searchParams.get('q');

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [comics, setComics] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetchComicData(searchTerm)
        .then((comicData) => setComics(comicData.data.results))
        .catch((error) => console.error('Error fetching comic search results:', error));

      fetchCharacterData(searchTerm)
        .then((characterData) => setCharacters(characterData.data.results))
        .catch((error) => console.error('Error fetching character search results:', error));
    }
  }, [searchTerm]);

  const fetchComicData = async (searchTerm) => {
    try {
      const publicKey = '839629b03c13f1a742b3b6b3784a7ddb';
      const timestamp = Date.now().toString();
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&titleStartsWith=${encodeURIComponent(searchTerm)}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch comic data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching comic data:', error);
      throw error;
    }
  };

  const fetchCharacterData = async (searchTerm) => {
    try {
      const publicKey = '839629b03c13f1a742b3b6b3784a7ddb';
      const timestamp = Date.now().toString();
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&nameStartsWith=${encodeURIComponent(searchTerm)}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch character data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching character data:', error);
      throw error;
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      // Update the URL to include the new search term
      const searchUrl = `/search?q=${encodeURIComponent(searchTerm)}`;
      window.location.href = searchUrl;
    }
  };

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
        {/* Render search results for comics */}
        <div className="comics-results">
          <h2>Comics</h2>
          {comics.length > 0 ? (
            <div className="comic-list">
              {comics.map((comic) => (
                <div key={comic.id} className="comic">
                  <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                  <div className="comic-title">{comic.title}</div>
                </div>
              ))}
            </div>
          ) : (
            <p>No comics found.</p>
          )}
        </div>
        {/* Render search results for characters */}
        <div className="characters-results">
          <h2>Characters</h2>
          {characters.length > 0 ? (
            <div className="character-list">
              {characters.map((character) => (
                <div key={character.id} className="character">
                  <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                  <div className="character-name">{character.name}</div>
                </div>
              ))}
            </div>
          ) : (
            <p>No characters found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default SearchResults;

