import React from 'react'

const Pokemon = (props) => {

    
    let pokemon = props.pokemon.filter(pokemon => pokemon.id == props.match.params.id)[0]
    
    return (
        <li> 
        {/* {pokemon ? null : <Redirect to='/pokemon/user_pokemon'/>} */}
        {pokemon ? pokemon.name : null } - {pokemon ? pokemon.pokemon_type : null}
        </li>

    )

}

export default Pokemon