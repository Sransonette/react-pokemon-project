export const deletePokemon = (pokemonId) => {

    return (dispatch) => {
        return fetch (`http://localhost:3001/api/v1/pokemons/${pokemonId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(pokemon => dispatch({type: 'DELETE_POKEMON', payload: pokemon}))
    }

}