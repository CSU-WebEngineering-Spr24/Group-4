import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import marvelLogo from '../images/MarvelLogo.png'

function Home() {
  return (
    <div className="home-container">
      <header className="bg-dark text-light py-3">
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
        <div className="box">
          <div className="rectangle">
            <section className="character-of-the-day">
              <h2>Character of the Day</h2>
              <p>*4 random comics for the "character of the day" will show on homepage</p>
            </section>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <div className="card">
              <img src="#" className="card-img-top" alt="Comic Cover" />
              <div className="card-body">
                <h5 className="card-title">Comic Title</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="#" className="card-img-top" alt="Comic Cover" />
              <div className="card-body">
                <h5 className="card-title">Comic Title</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="#" className="card-img-top" alt="Comic Cover" />
              <div className="card-body">
                <h5 className="card-title">Comic Title</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="#" className="card-img-top" alt="Comic Cover" />
              <div className="card-body">
                <h5 className="card-title">Comic Title</h5>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;