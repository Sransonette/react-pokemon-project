import React, { Component } from 'react';
import PokemonInput from '../components/PokemonInput.js';
import PokemonList from '../components/PokemonList.js'
import Pokemon from '../components/Pokemon.js'
import Pokedex from '../components/Pokedex.js'
import { Redirect, Route, Switch } from 'react-router-dom'
import { fetchPokemon } from '../actions/fetchPokemon'
import { fetchPokedex } from '../actions/fetchPokedex'
import { connect } from 'react-redux'



class PokemonContainer extends Component {

    componentDidMount() {
        this.props.fetchPokemon()
        this.props.fetchPokedex()
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={(routerProps) => <Pokedex {...routerProps} pokemon={this.props.allPokemon} />} />
                    <Route exact path='/pokemon/new' component={PokemonInput} />
                    <Route exact path='/pokemon/user_pokemon' render={(routerProps) => <PokemonList {...routerProps} pokemon={this.props.pokemon} />} />
                    <Route exact path='/pokemon/:id' render={(routerProps) => <Pokemon {...routerProps} pokemon={this.props.pokemon} />} />
                    <Redirect to={"/"} />
                </Switch>
            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        allPokemon: state.allPokemon
    }
}

export default connect(mapStateToProps, { fetchPokemon, fetchPokedex })(PokemonContainer)