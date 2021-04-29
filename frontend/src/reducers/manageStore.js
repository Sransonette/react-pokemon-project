export default function manageStore(state = {pokemon: []}, action) {

  switch(action.type) {
    case 'FETCH_POKEMON':
      return {pokemon: action.payload}
    case 'POST_POKEMON':
      return {...state, pokemon: [...state.pokemon, action.payload]}
    case 'FETCH_POKEDEX':
      return {pokemon: action.payload}
    case 'DELETE_POKEMON':
      let pokemon = state.pokemon.map(pokemon => {
         if (pokemon.id === action.payload.id) {
           debugger
           return action.payload
        } else {
           return pokemon
        }
      })
      return {...state, pokemon: pokemon}

    default:
      return state
  }
}
