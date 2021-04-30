export default function manageStore(state = {pokemon: [], allPokemon: []}, action) {

  switch(action.type) {
    case 'FETCH_POKEMON':
      return {...state, pokemon: action.payload}
    case 'POST_POKEMON':
      return {...state, pokemon: [...state.pokemon, action.payload]}
    case 'FETCH_POKEDEX':
      return {...state, allPokemon: action.payload}
    case 'DELETE_POKEMON':
        return {...state, pokemon: action.payload}
    default:
      return state
  }
}
