import React, { Component } from 'react';

export class EventBind2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Welcome'
        }
        this.binding = this.binding.bind(this); // ...for only 3rd way otherwise delete this line
    }

    binding() {
        this.setState({
            message: 'Thank You for Subscribe'
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                {/* <button onClick={this.binding.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.binding()}>Click</button> */}
                <button onClick={this.binding}>Click</button>
            </div>
        )
    }
}

export default EventBind2;
