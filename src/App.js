import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventLog from "./components/eventLog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
        rel="stylesheet"
        href="https://unpkg.com/papercss@1.8.0/dist/paper.min.css"
        />
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
      <EventLog />
    </div>
  );
}

export default App;
