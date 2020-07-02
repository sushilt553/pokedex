import React from 'react';

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        const list = this.props.pokemon.map((poke, i) => <li key={i}>{poke.name}</li>)
        return (
            <ul>
                {list}
            </ul>
        )
    }
}

export default PokemonIndex;