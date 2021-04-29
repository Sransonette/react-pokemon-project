import React, { Component } from 'react';
import './App.css';
import PokemonContainer from './containers/PokemonContainer.js'
import { connect } from 'react-redux'
import NavBar from './components/NavBar.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header/>
      <NavBar/>
        <PokemonContainer/>
      <Footer/>
      </div>
  )};

  
  
}

export default connect()(App);
