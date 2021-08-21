import React, { Component } from 'react';


class AddPokemonBtn extends Component {
    render() {

        onClick = (event) => {
            event.preventDefault()
            this.props.postPokemon(this.state)
        }

        return (

            <div>
                <button onClick={() => HandleClick()}>Add Pokemon</button>
            </div>
        );


    }
}

export default AddPokemonBtn;

