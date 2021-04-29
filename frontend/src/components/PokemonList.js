import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePokemon} from '../actions/deletePokemon'

const PokemonList = (props) => {

    const handleDelete = (pokemon) => {
        props.deletePokemon(pokemon.id)

    }
    
    return(
        <div>
        {/* getting props from Pokemoncontainer */}
            {props.pokemon.map(pokemon => 
            <div key={pokemon.id}>
                <li key={pokemon.id}><Link to={`/pokemon/${pokemon.id}`}>{pokemon.name} </Link>
                <button onClick={() => handleDelete(pokemon)}>Delete</button>
                </li>
            </div>)}
        </div>
    )

}

export default connect(null, {deletePokemon})(PokemonList)