import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import marvelLogo from '../images/MarvelLogo.png';
import { getComics, getRandomCharacter } from '../services/marvelApi';

function Home() {
  const [comics, setComics] = useState([]);
  const [characterOfTheDay, setCharacterOfTheDay] = useState(null);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const data = await getComics();
        setComics(data.data.results);
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };

    const fetchCharacterOfTheDay = async () => {
      try {
        const data = await getRandomCharacter();
        setCharacterOfTheDay(data.data.results[0]);
      } catch (error) {
        console.error('Error fetching character of the day:', error);
      }
    };

    fetchComics();
    fetchCharacterOfTheDay();
  }, []);
  

  return (
    <div className="home-container">
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
              <img className="download" alt="Marvel Logo" src={marvelLogo} />
            </div>
          
          <div className="d-flex">
            <input type="text" id="search" className="form-control" placeholder="Search" />
            <button className="btn btn-light">Search</button>
          </div>
        </nav>
      </header>
      <main className="container my-5">
        <div className="box1">
          <div className="rectangle1">
            <section className="character-of-the-day">
              <h2>Character of the Day</h2>
              {characterOfTheDay ? (
                <div>
                  <h3>{characterOfTheDay.name}</h3>
                  {characterOfTheDay.thumbnail && characterOfTheDay.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' && (
                  <img
                    src={`${characterOfTheDay.thumbnail.path}.${characterOfTheDay.thumbnail.extension}`}
                    alt={characterOfTheDay.name}
                  />
                  )}
                  <p>{characterOfTheDay.description}</p>
                </div>
              ) : (
                <p>Loading character of the day...</p>
              )}
            </section>
          </div>
        </div>

        <div className="row mt-4">
          {comics.map((comic, index) => (
            <div key={comic.id} className="col-3">
              <div className="card">
              {comic.thumbnail && comic.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ? (
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  className="card-img-top"
                  alt={comic.title}
                />
              ) : (
                <div className="card-img-top placeholder-image">No Image Available</div>
              )}
                <div className="card-body">
                  <h5 className="card-title">{comic.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;