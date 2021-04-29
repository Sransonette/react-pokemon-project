export function fetchPokedex(page) {

    const perpage = 15;
    const offset = (page * perpage) - perpage;

    return (dispatch) => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${perpage}&offset=${offset}`)
        .then(resp => resp.json())
        .then(pokemon => dispatch({
            type: 'FETCH_POKEDEX',
            payload: pokemon
    
        }))
    }
    
}