import React from 'react';
import {withRouter} from 'react-router-dom';

class PokemonDetail extends React.Component {

    componentDidUpdate(prevProps) {
        let id = this.props.match.params.pokemonId
        if (id !== prevProps.match.params.pokemonId) {
            this.props.requestOnePokemon(id);
        }
    }

    componentDidMount(){
        this.props.requestOnePokemon(this.props.match.params.pokemonId);
    }

    render() {
        let poke;
        if (this.props.pokemon) {
            poke = this.props.pokemon
        }else{
            return null;
        }

        return (
            <ul>
                <h1>{poke.name}</h1>
                <img src={`${poke.image_url}`} alt={`${poke.name}`}/>
                <li>{poke.attack}</li>
                <li>{poke.defense}</li>
                <li>{poke.poke_type}</li>
                <li>{poke.moves}</li>
            </ul> 
        )
    }
}

export default PokemonDetail;