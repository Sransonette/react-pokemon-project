import React, { Component } from 'react';

class Like extends Component {
    state = {
        like: " "

    }

    onClick= () => {
        let currentLike = this.state.like === " " ? " <3 " : " "
        this.setState({
            like: currentLike
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>{this.state.like}Like</button>
            </div>
        );
    }
}

export default Like;
