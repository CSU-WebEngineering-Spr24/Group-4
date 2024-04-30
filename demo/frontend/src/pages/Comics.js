import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import marvelLogo from '../images/MarvelLogo.png';
import noImage from '../images/standard_incredible.jpg';
import { getComics } from '../services/marvelApi';

function Comics() {
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
                        <a href="/"><img className="download" alt="Marvel Logo" src={marvelLogo}/></a>
                    </div>

                    <div className="d-flex">
                        <input type="text" id="search" className="form-control" placeholder="Search" />
                        <button className="btn btn-light">Search</button>
                    </div>
                </nav>
            </header>
            <main className="container my-5" style={{position: "absolute", top: 125}}>
                <div className="card flex-md-row mb-4 box-shadow h-md-250" style={{position: "relative", left: 5, right: 5}}>
                    {comics && comics.map((comic, index) => (
                        <div key={comic.id} className="col-3">
                            <div className="spinner">
                                {comic.thumbnail && comic.thumbnail.path !== comic.thumbnail.extension ? (
                                    <img
                                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                        className="card-img-top"
                                        alt={noImage}
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

export default Comics;