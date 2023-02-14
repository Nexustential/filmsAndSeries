import './App.css';
import React, { useState } from 'react';
import ThisExample from './ThisExample';
import ToggleExample from './ToggleExample';
import Counter from './Counter';

function App() {
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");
  const [actor, setActor] = useState("");
  const [actor2, setActor2] = useState("");

  return (
    <div className="App">
      <h1 className='header1'>Favorite Films, Shows And Actors</h1>
      <div className='container'>
        <div className='row' id='wholethang'>
          <div className='col' id='col1'>
            <div className='colSplit'>
              <h1>My favorite film is: {title}</h1>
              <button
                id="btn"
                type="button"
                onClick={() => setTitle("2001: A Space Odyssey")}
                >
                Click Me
              </button>
            </div>
            <h2> Starring: {actor} </h2>
              <button
                id="btn"
                type="button"
                onClick={() => setActor("Keir Dullea")}
                >
                Click Me
              </button>
          </div>
          <div className='col' id='col2'>
            <div className='colSplit'>
              <h1>My second favorite film is: {title2} </h1>
              <button
                id="btn"
                type="button"
                onClick={() => setTitle2("North By Northwest")}
                >
                Click Me
              </button>
            </div>
            <h2> Starring: {actor2} </h2>
              <button
                id="btn"
                type="button"
                onClick={() => setActor2("Cary Grant")}
                >
                Click Me
              </button>
          </div>
        </div>
      </div>
      <div id='thisExample'>
        <ThisExample />
        <ToggleExample />
        <Counter />
      </div>    
    </div>
  );
}

export default App;
