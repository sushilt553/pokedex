export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = pokemon => {
    return {
        action: RECEIVE_ALL_POKEMON,
        pokemon
    }
}