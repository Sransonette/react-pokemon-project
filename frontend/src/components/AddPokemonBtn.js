import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postPokemon } from '../actions/postPokemon'

class AddPokemonBtn extends Component {
    render() {

        let HandleClick = () => {
            this.props.postPokemon(this.state)

        }

        return (

            <div>
                <button onClick={() => HandleClick()}>Add Pokemon</button>
            </div>
        );


    }
}

export default connect(null, { postPokemon })(AddPokemonBtn)

