import React, { Component } from 'react';
import './App.css';
import PokemonContainer from './containers/PokemonContainer.js'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
        <PokemonContainer/>
      </div>
  )};

  
  
}

export default connect()(App);
