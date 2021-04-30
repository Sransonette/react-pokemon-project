export function fetchPokedex(page) {

    const perpage = 150;
    

    return (dispatch) => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${perpage}&offset=${0}`)
        .then(resp => resp.json())
        .then(pokemon => dispatch({
            type: 'FETCH_POKEDEX',
            payload: pokemon
    
        }))
    }
    
}