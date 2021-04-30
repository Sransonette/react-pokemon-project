import React from 'react'

const Pokedex = (props) => {


    return( 
        <div>
            {props.pokemon.results && props.pokemon.results.map(pokemon => 
            <li key={pokemon.id}>{pokemon.name}</li>)}
        </div>
    )

}

export default (Pokedex)