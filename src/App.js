import React from 'react';
import './App.css';
import CSVReader1 from './CSVReader1';

function App() {
  return (
    <div className="App">
        <CSVReader1/>
      <input type="file" id="file-input-id"></input>
      <div>TABLE</div>
    </div>
  );
}

export default App;
