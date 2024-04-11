import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import marvelLogo from '../images/MarvelLogo.png'

function Series (){
    return (
          <div className="Page4" style={{width: 1922, height: 1080, position: 'relative'}}>
          <div className="Rectangle1" style={{width: 1920, height: 1080, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)', border: '1px black solid'}} />
          <div className="Rectangle2" style={{width: 1920, height: 165, left: 2, top: 0, position: 'absolute', background: 'black'}} />
          <div className="Home" style={{left: 127, top: 80, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>
          <Link to="/" className="text-light text-decoration-none mx-3"> 
                Home
              </Link>
              </div>
          <div className="Rectangle3" style={{width: 313, height: 54, left: 1413, top: 67, position: 'absolute', background: 'white'}} />
          <div className="Search" style={{left: 1432, top: 80, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>Search</div>
          <div className="Comics" style={{left: 284, top: 82, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>
          <Link to="/comics" className="text-light text-decoration-none mx-3"> 
                Comics
              </Link>
              </div>
          <div className="Characters" style={{left: 464, top: 82, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>
          <Link to="/characters" className="text-light text-decoration-none mx-3"> 
                Characters
              </Link>
              </div>
          <div className="Rectangle5" style={{width: 132, height: 54, left: 1761, top: 65, position: 'absolute', background: '#D9D9D9'}} />
          <div className="Search" style={{left: 1793, top: 78, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Comic Sans MS', fontWeight: '400', wordWrap: 'break-word'}}>Search</div>
          <div className="Rectangle16" style={{width: 290, height: 361, left: 135, top: 615, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
          <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Comic Title</div>
        </div>
          <div className="Rectangle21" style={{width: 290, height: 361, left: 1524, top: 615, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
          <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Comic Title</div>
        </div>
          <div className="Rectangle19" style={{width: 290, height: 361, left: 1061, top: 615, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
          <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Comic Title</div>
        </div>
          <div className="Rectangle17" style={{width: 290, height: 361, left: 598, top: 615, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div className="Rectangle11" style={{width: 290, height: 361, background: '#B5B4B4', boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.50)'}} />
          <div className="ComicTitle" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Comic Neue', fontWeight: '400', wordWrap: 'break-word'}}>Comic Title</div>
        </div>
          <div className="ComicWillGoHere" style={{left: 193, top: 821, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*comic will go here</div>
          <div className="ComicWillGoHere" style={{left: 1545, top: 834, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*comic will go here</div>
          <div className="ComicWillGoHere" style={{left: 1115, top: 835, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*comic will go here</div>
          <div className="ComicWillGoHere" style={{left: 662, top: 828, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>*comic will go here</div>
          <img className="Download1" style={{width: 354, height: 142, left: 785, top: 11, position: 'absolute'}} alt="Marvel Logo" src={marvelLogo} />
          <div className="Line1" style={{width: 103, height: 0, left: 284, top: 127, position: 'absolute', border: '5px #E40101 solid'}}></div>
          <div className="Rectangle6" style={{width: 1654, height: 278, left: 127, top: 229, position: 'absolute', background: '#B4B4B4', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)'}} />
          <div className="SeriesTitle" style={{width: 927, height: 77, left: 490, top: 304, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 66, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Series Title</div>
      </div>
    );
}

export default Series;
