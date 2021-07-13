import React, { Component } from 'react';

class IfElseRendering2 extends Component {
    constructor() {
        super()
        this.state = {
            isToggledIn: false
        }
    }
    render() {
        console.log(this.state.isToggledIn)
        return (
            this.state.isToggledIn ? <h3>Logged in</h3> : <h3>Log out</h3>
        )
    }
}

export default IfElseRendering2;
