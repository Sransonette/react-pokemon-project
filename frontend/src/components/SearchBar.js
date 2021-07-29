import React, { Component } from 'react';
import { connect } from 'react-redux'

class SearchBar extends Component {


    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="text" placeholder="Enter Pokemon Name" />
                    </label>
                </form>
            </div>
        );
    }

}


export default connect(null, null)(SearchBar)