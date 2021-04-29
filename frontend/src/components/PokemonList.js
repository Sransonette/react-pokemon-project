import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePokemon} from '../actions/deletePokemon'

const PokemonList = (props) => {

    const handleDelete = (id) => {
        props.deletePokemon(id)

    }
    
    return( 
        <div>
            {props.pokemon.map(pokemon => 
            <div>
                <li key={pokemon.id}><Link to={`/pokemon/${pokemon.id}`}>{pokemon.name} </Link>
                <button onClick={() => handleDelete(pokemon.id)}>Delete</button>
                </li>
            </div>)}
        </div>
    )

}

export default connect(null, {deletePokemon})(PokemonList)