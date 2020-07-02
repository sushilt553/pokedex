import React from 'react';
import { Provider } from 'react-redux';
import {Route, HashRouter} from 'react-router-dom';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}></Route>
            <Route path="/" component={PokemonIndexContainer}></Route>
        </HashRouter>
    </Provider>
);

export default Root;