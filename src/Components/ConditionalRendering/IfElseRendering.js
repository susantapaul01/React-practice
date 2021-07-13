import React, { Component } from 'react';

class IfElseRendering extends Component {
    constructor() {
        super()
        this.state = {
            isToggledIn: true
        }
    }
    render() {
        let message;
        if(this.state.isToggledIn === true) {
            message = 'Logged in';
        } else {
            message = 'Log Out';
        }
        return (
            <div>
                <h3>{message}</h3>
            </div>
        )
    }
}

export default IfElseRendering;
