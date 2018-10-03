import React, { Component } from 'react';
import GameBoard from './Game/GameBoard/GameBoard.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <GameBoard/>
        </div>
    );
  }
}

export default App;
