export function fetchPokemon() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/pokemons')
        .then(resp => resp.json())
        .then(pokemon => dispatch({
            type: 'FETCH_POKEMON',
            payload: pokemon

        }))
    }
}



