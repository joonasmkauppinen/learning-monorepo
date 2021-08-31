import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  HeadingBlock,
  sampleStuffWeb,
} from '@learning-monorepo/sample-stuff-web';

function App() {
  console.log(sampleStuffWeb());

  return (
    <div className="App">
      <HeadingBlock text="This is a HeadingBlock from package '@learning-monorepo/sample-stuff-web'" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

export default App;
