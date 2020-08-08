/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import React from 'react';
import meme from './meme_p.JPG';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                
                <p>
                    Welcome to Astrid's demo page. 
        </p>
                <img src={meme} className="App-meme" alt="a funny meme" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Click to get more info for React
        </a>
            </header>
        </div>
    );
}

export default App; 


