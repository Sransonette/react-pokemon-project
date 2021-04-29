import React, { Component } from 'react';
import {connect} from 'react-redux'
import {postPokemon} from '../actions/postPokemon'

class PokemonInput extends Component {

    state = {name: '', pokemon_type: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postPokemon(this.state)
        this.setState({name: '', pokemon_type: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search</label><br></br>
                        <input type='text' placeholder='Pokemon Name' value={this.state.name} name="name" onChange={this.handleChange}/><br></br>
                        <input type='text' placeholder='Pokemon Type' value={this.state.pokemon_type} name="pokemon_type" onChange={this.handleChange}/><br></br>
                        <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default connect(null, {postPokemon})(PokemonInput)