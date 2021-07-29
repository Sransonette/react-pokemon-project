import React, { Component } from 'react';
import { connect } from 'react-redux'

class SearchBar extends Component {


    render() {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" onChange={handleChange} placeholder="Enter Pokemon Name" />
                    </label>
                </form>
            </div>
        );
    }

}


export default connect(null, null)(SearchBar)
