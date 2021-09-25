import React, { Component } from 'react';
import './App.css';
import PokemonContainer from './containers/PokemonContainer.js'
import { connect } from 'react-redux'
import NavBar from './components/NavBar.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import SearchBar from './components/SearchBar.js';
import fetchSprites from './actions/fetchSprites';
// import Background from './components/Background';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Background /> */}
        <Header />
        <NavBar />
        <SearchBar />
        <fetchSprites />
        <PokemonContainer />
        <Footer />
      </div>
    )
  };



}

export default connect()(App);
