import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super()

        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thank you for Subscribe'
        })
        console.log(this)
    }
    render() {
        return (
            <div className='mt-3'>
                <h2>{this.state.message}</h2>
                <button className='btn btn-primary btn-sm mt-1' onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;
