import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import marvelLogo from '../images/MarvelLogo.png';
import { getCharacters } from '../services/marvelApi';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Characters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const fetchCharacters = async () => {
        try {
            const data = await getCharacters();
            if (data && data.data && data.data.results) {
                const shuffledCharacters = shuffleArray(data.data.results);
                setCharacters(shuffledCharacters);
            } else {
                console.error('Invalid data received');
            }
        } catch (error) {
            console.error('Error fetching random character:', error);
        } finally {
            setLoading(false); // Update loading state regardless of success or error
        }
    };
    useEffect(() => {
        fetchCharacters();
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
        fetchCharacters(); // Call fetchCharacters again to refresh data
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
                        <a href="/"><img className='download' src={marvelLogo} alt="Marvel Logo" /></a>
                    </div>

                    <div>
                        <form className="d-flex" onClick={handleSearch}>
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
            <main className="container my-5" style={{ position: "absolute", top: 125 }}>
                {(!loading && characters.length === 0) && (
                    <button onClick={handleRefresh}>Refresh</button>
                )}
                <div className="card flex-md-row mb-4 box-shadow h-md-250"
                     style={{ position: "relative", left: 5, right: 5 }}>
                    {loading ? (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : characters.length > 0 ? (
                        characters.map(character => (
                            <div key={character.id} className="col-3">
                                <div className="card-box">
                                {character.thumbnail && character.thumbnail.path !== "path/to/empty/image" ? (
                                    <img
                                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                        className="card-img-top"
                                        alt={character.name}
                                    />
                                ) : (
                                    <div className="card-img-top placeholder-image">No Image Available</div>
                                )}
                                    <div className="card-body">
                                        <h5 className="card-title">{character.name}</h5>
                                        <p className="card-text">{character.description}</p>
                                        <p className="card-text">{character.comics.available} comics available</p>
                                        <a href={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                           className="btn btn-primary">See Image</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No characters available</div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Characters;

