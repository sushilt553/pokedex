import React from 'react';

class PokemonIndexItem extends React.Component {

    render() {
        return (
            <li>{this.props.poke.name}</li>
        )
    }
}

export default PokemonIndexItem;