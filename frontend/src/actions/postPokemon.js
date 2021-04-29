export const postPokemon = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/pokemons', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(pokemon => dispatch({type: 'POST_POKEMON', payload: pokemon}))
    }

}