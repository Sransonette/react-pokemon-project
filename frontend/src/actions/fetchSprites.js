import React, { Component } from 'react';
import axios from "axios";

class fetchSprites extends Component {

    const = pokemon = (
        await axios
            .get('https://pokeapi.co/api/v2/pokemon')
    ).data;




    render(pokemon) {

        return (

            <div>
                {console.log(pokemon)}
            </div>
        );
    }
}

export default fetchSprites;