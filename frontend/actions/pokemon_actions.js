import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = pokemon => {
    return {
        type: RECEIVE_ALL_POKEMON,
        pokemon
    }
}

export const receiveOnePokemon = res => {
    return {
        type: RECEIVE_ONE_POKEMON,
        res
    }
}

export const requestAllPokemon = () => dispatch => (
    APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestOnePokemon = (pokemonId) => dispatch => (
    APIUtil.fetchOnePokemon(pokemonId)
    .then(res => dispatch(receiveOnePokemon(res)))
)