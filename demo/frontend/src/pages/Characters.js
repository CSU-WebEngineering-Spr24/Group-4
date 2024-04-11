import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import marvelLogo from '../images/MarvelLogo.png'

function Characters (){
    return (
        <div className="Page2" style={{width: 1920, height: 1080, position: 'relative'}}>
            <div className="Rectangle1" style={{width: 1920, height: 1080, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="Rectangle2" style={{width: 1920, height: 165, left: 0, top: 0, position: 'absolute', background: 'black'}} />
            <div className="Home" style={{left: 150, top: 80, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>
            <Link to="/" className="text-light text-decoration-none mx-3"> 
                Home
              </Link>
              </div>
            <div className="Rectangle3" style={{width: 313, height: 54, left: 1411, top: 67, position: 'absolute', background: 'white'}} />
            <div className="Search" style={{left: 1430, top: 80, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>Search</div>
            
            <div className="Comics" style={{left: 250, top: 82, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>
            <Link to="/comics" className="text-light text-decoration-none mx-3"> 
                Comics
              </Link>
              </div>
            <div className="Characters" style={{left: 450, top: 82, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>
            <Link to="/characters" className="text-light text-decoration-none mx-3"> 
                Characters
              </Link>
              </div>
            <div className="Series" style={{left: 350, top: 82, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>
            <Link to="/series" className="text-light text-decoration-none mx-3"> 
                Series
              </Link>
              </div>
            <img className="Download1" style={{width: 354, height: 142, left: 783, top: 11, position: 'absolute'}} alt="Marvel Logo" src={marvelLogo} />
            <div className="Rectangle5" style={{width: 132, height: 54, left: 1759, top: 65, position: 'absolute', background: '#D9D9D9'}} />
            <div className="Search" style={{left: 1791, top: 78, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>Search</div>
            <div className="Rectangle15" style={{width: 290, height: 361, left: 137, top: 666, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Name of Character</div>
        </div>
            <div className="Rectangle21" style={{width: 290, height: 361, left: 1489, top: 235, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Name of Character</div>
        </div>
            <div className="Rectangle19" style={{width: 290, height: 361, left: 1059, top: 235, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Name of Character</div>
        </div>
            <div className="Rectangle11" style={{width: 290, height: 361, left: 605, top: 235, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Name of Character</div>
        </div>
            <div className="Rectangle16" style={{width: 290, height: 361, left: 137, top: 235, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Name of Character</div>
        </div>
            <div className="Rectangle20" style={{width: 290, height: 361, left: 1489, top: 666, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Name of Character</div>
        </div>
            <div className="Rectangle18" style={{width: 290, height: 361, left: 1059, top: 666, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Name of Character</div>
        </div>
            <div className="Rectangle17" style={{width: 290, height: 361, left: 605, top: 666, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
            <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Name of Character</div>
        </div>
            <div className="CharactersWillGoHere" style={{left: 170, top: 796, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*characters will go here</div>
            <div className="CharactersWillGoHere" style={{left: 1540, top: 403, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*characters will go here</div>
            <div className="CharactersWillGoHere" style={{left: 1091, top: 403, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*characters will go here</div>
            <div className="CharactersWillGoHere" style={{left: 643, top: 408, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*characters will go here</div>
            <div className="CharactersWillGoHere" style={{left: 167, top: 403, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*characters will go here</div>
            <div className="CharactersWillGoHere" style={{left: 1527, top: 808, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*characters will go here</div>
            <div className="CharactersWillGoHere" style={{left: 1091, top: 810, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*characters will go here</div>
            <div className="CharactersWillGoHere" style={{left: 643, top: 803, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*characters will go here</div>
            <div className="Line1" style={{width: 175, height: 0, left: 462, top: 127, position: 'absolute', border: '5px #E40101 solid'}}></div>
        </div>
    );
}

export default Characters;