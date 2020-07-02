const { default: PokemonIndex } = require("./pokemon_index")

import {connect} from 'react-redux';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);