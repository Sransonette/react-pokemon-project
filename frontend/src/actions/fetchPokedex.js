export function fetchPokedex() {
    return (dispatch) => {
        fetch(`https://pokeapi.co/api/v2/pokemon ?limit=20&offset=0`)
        .then(resp => resp.json())
        .then(pokemon => dispatch({
            type: 'FETCH_POKEDEX',
            payload: pokemon

        }))
    }
}