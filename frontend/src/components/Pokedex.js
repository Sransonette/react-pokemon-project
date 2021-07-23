import React from 'react'

const Pokedex = (props) => {


    return( 
        <div className={"allPokemon"}>
            {props.pokemon.results && props.pokemon.results.map(pokemon =>
            <div className={"allPokemonNames"}>
            <li key={pokemon.id}>{pokemon.name}</li>
            <button>Test</button>
            </div>)}
        </div>
    )

}

export default (Pokedex)