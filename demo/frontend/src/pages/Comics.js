import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import marvelLogo from '../images/MarvelLogo.png';
import { getComics } from '../services/marvelApi';

function Comics() {
    const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const data = await getComics();
        setComics(data.results);
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
            <a href="/"><img src={marvelLogo} alt="Marvel Logo" /></a>
            </div>
          
          <div className="d-flex">
            <input type="text" id="search" className="form-control" placeholder="Search" />
            <button className="btn btn-light">Search</button>
          </div>
        </nav>
      </header>


      <main className="container my-10">
      <div className="box1">
            <div className="Rectangle21" style={{width: 290, height: 361, left: 125, top: 175, position: 'absolute'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, left: 0, top: 0, position: 'absolute', background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{left: 50, top: 371, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>
              Comic Title
              <h1>{comics.title}</h1>
              </div>
              </div>
            <div className="Rectangle21" style={{width: 290, height: 361, left: 450, top: 175, position: 'absolute'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, left: 0, top: 0, position: 'absolute', background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{left: 50, top: 371, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>
              Comic Title
              <h1>{comics.title}</h1>
              </div>
              </div>
            <div className="Rectangle21" style={{width: 290, height: 361, left: 775, top: 175, position: 'absolute'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, left: 0, top: 0, position: 'absolute', background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{left: 50, top: 371, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>
            Comic Title
            <h1>{comics.title}</h1>
              </div>
              </div>
            <div className="Rectangle21" style={{width: 290, height: 361, left: 1100, top: 175, position: 'absolute'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, left: 0, top: 0, position: 'absolute', background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{left: 50, top: 371, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>
              Comic Title
              <h1>{comics.title}</h1>
              </div>
              </div>
              <div className="Rectangle21" style={{width: 290, height: 361, left: 125, top: 650, position: 'absolute'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, left: 0, top: 0, position: 'absolute', background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{left: 50, top: 371, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>
              Comic Title
              <h1>{comics.title}</h1>
              </div>
              </div>
            <div className="Rectangle21" style={{width: 290, height: 361, left: 450, top: 650, position: 'absolute'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, left: 0, top: 0, position: 'absolute', background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{left: 50, top: 371, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>
              Comic Title
              <h1>{comics.title}</h1>
              </div>
              </div>
            <div className="Rectangle21" style={{width: 290, height: 361, left: 775, top: 650, position: 'absolute'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, left: 0, top: 0, position: 'absolute', background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{left: 50, top: 371, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>
              Comic Title
              <h1>{comics.title}</h1>
              </div>
              </div>
            <div className="Rectangle21" style={{width: 290, height: 361, left: 1100, top: 650, position: 'absolute'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, left: 0, top: 0, position: 'absolute', background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{left: 50, top: 371, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>
              Comic Title
              <h1>{comics.title}</h1>
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
        </div>
      </main>
    </div>
  );
}

export default Comics