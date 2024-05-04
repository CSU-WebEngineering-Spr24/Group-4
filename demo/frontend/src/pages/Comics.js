import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import marvelLogo from '../images/MarvelLogo.png';
import { getComics } from '../services/marvelApi';


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Comics() {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const fetchComics = async () => {
        try {
            const data = await getComics();
            if (data && data.data && data.data.results) {
                const shuffledComics = shuffleArray(data.data.results);
                setComics(shuffledComics);
            } else {
                console.error('Invalid data received');
            }
        } catch (error) {
            console.error('Error fetching comics:', error);
        } finally {
            setLoading(false); // Update loading state regardless of success or error
        }
        };

    useEffect(() => {
        fetchComics();
    }, []);

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            // Construct the URL for the search results page with the search query as a URL parameter
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            // Redirect the user to the search results page
        }
    };

    const handleRefresh = () => {
        setLoading(true); // Set loading to true to trigger refresh
        fetchComics(); // Call fetchCharacters again to refresh data
    };

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
                    <div>
                        <form className="d-flex" onSubmit={handleSearch}>

                            <input
                                type="text"
                                id="search"
                                className="form-control"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-light" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        <main className="container my-5" style={{position: "absolute", top: 125}}>
            {(!loading && comics.length === 0) && (
                <button onClick={handleRefresh}>Refresh</button>
            )}
            <div className="card flex-md-row mb-4 box-shadow h-md-250"
                     style={{position: "relative", left: 5, right: 5}}>
                    {loading ? (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : comics.length > 0 ? (
                        comics.map(comic => (
                            <div key={comic.id} className="col-3">
                                <div className="card-box">
                                    {comic.thumbnail && comic.thumbnail.path !== comic.thumbnail.extension ? (
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
                                    <p className="card-text">{comic.description}</p>
                                    <p className="card-text">Issue Number: {comic.issueNumber}</p>
                                    <a href={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                       className="btn btn-primary">See Image</a>
                                </div>
                            </div>
                            </div>
                        ))
                    ) : (
                        <div>No comics available</div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Comics;