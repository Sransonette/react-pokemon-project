import React from 'react'
import AddPokemonBtn from './AddPokemonBtn'

const Pokedex = (props) => {


    return (
        <div className={"allPokemon"}>
            {props.pokemon.results && props.pokemon.results.map(pokemon =>
                <div className={"allPokemonNames"}>
                    <li key={pokemon.id}>{pokemon.name}</li>
                    <img src={pokemon.sprites} />
                    <AddPokemonBtn />
                </div>)}
        </div>
    )

}

export default (Pokedex)