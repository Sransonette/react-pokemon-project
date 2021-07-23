import React from 'react'
import addPokemonBtn from '../addPokemonBtn'

const Pokedex = (props) => {

   


    return( 
        <div className={"allPokemon"}>
            {props.pokemon.results && props.pokemon.results.map(pokemon =>
            <div className={"allPokemonNames"}>
            <li key={pokemon.id}>{pokemon.name}</li>
            <addPokemonBtn/>
            </div>)}
        </div>
    )

}

export default (Pokedex)