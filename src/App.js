import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TitlebarGridList from "./test";

const data = [
    {
        name: 'a',
        happiness: 2
    },
    {
        name: 'b',
        happiness: 5
    },
    {
        name: 'c',
        happiness: 2
    },
    {
        name: 'd',
        happiness: 3
    },
];

function App() {
  return (
    <div className="App">
      <TitlebarGridList/>
    </div> 

  );
}

export default App;