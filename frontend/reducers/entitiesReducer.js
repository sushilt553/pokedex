import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemsReducer from './itemsReducer';
import uiReducer from './uiReducer';

const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
    items: itemsReducer,
    ui: uiReducer
})

export default entitiesReducer;