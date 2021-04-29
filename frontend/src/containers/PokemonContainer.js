import React, { Component } from 'react';
import PokemonInput from '../components/PokemonInput.js';
import PokemonList from '../components/PokemonList.js'
import Pokemon from '../components/Pokemon.js'
import Pokedex from '../components/Pokedex'
import {Route, Switch} from 'react-router-dom'
import { fetchPokemon } from '../actions/fetchPokemon'
import { fetchPokedex} from '../actions/fetchPokedex'
import { connect } from 'react-redux'


class PokemonContainer extends Component {

    componentDidMount() {
        this.props.fetchPokemon()
        // this.props.fetchPokedex()
    }


    render() {
        return (
            <div>
                <Switch>
                    PokemonContainer
                    REEEEEEEEEEEE
                    <Route exact path='/' component={Pokedex}/>
                    <Route exact path='/pokemon/new' component={PokemonInput}/>
                    <Route exact path='/pokemon/user_pokemon' render={(routerProps) => <PokemonList {...routerProps} pokemon={this.props.pokemon}/>}/>
                    <Route exact path='/pokemon/:id' render={(routerProps) => <Pokemon {...routerProps} pokemon={this.props.pokemon}/>}/>
                </Switch>
            </div>
        )
    }

}

//gives props information from store to this container
const mapStateToProps = state => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {fetchPokemon})(PokemonContainer)