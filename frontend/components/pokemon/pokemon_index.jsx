import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        const list = this.props.pokemon.map((poke, i) => <PokemonIndexItem key={i} poke={poke}/>)
        return (
            <ul>
                {list}
            </ul>
        )
    }
}

export default PokemonIndex;