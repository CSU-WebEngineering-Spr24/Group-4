import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import marvelLogo from '../images/MarvelLogo.png';
import { getComics } from '../services/marvelApi';

function Home() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const data = await getComics();
        setComics(data.data.results);
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };

    fetchComics();
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
              <p></p>
            </section>
          </div>
        </div>

        <div className="row mt-4">
          {comics.map((comic, index) => (
            <div key={comic.id} className="col-3">
              <div className="card">
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  className="card-img-top"
                  alt={comic.title}
                />
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