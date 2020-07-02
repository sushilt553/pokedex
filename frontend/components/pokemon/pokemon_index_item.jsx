import React from 'react';
import {Link} from 'react-router-dom';

class PokemonIndexItem extends React.Component {

    render() {
        return (
            <li><Link to={`/pokemon/${this.props.poke.id}`}>{this.props.poke.name}</Link></li>
        )
    }
}

export default PokemonIndexItem;