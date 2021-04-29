import React from 'react'

const Pokedex = (props) => {

    return( 
        <div>
            {props.pokemon.map(pokemon => 
            <li key={pokemon.id}>{pokemon.name}</li>)}
        </div>
    )

}

export default (Pokedex)