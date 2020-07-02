import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestOnePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestOnePokemon: (pokemonId) => dispatch(requestOnePokemon(pokemonId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);