import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestOnePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, props) => {
    // debugger
    const pokemon = state.entities.pokemon[props.match.params.pokemonId];
    // debugger;
    let items = [];
    if (pokemon && pokemon.item_ids) {
        items = pokemon.item_ids.map((id) => state.entities.items[id]);
    }
    return {
        pokemon,
        items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestOnePokemon: (pokemonId) => dispatch(requestOnePokemon(pokemonId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);