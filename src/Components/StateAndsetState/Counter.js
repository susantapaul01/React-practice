import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    createEvent() {
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () => console.log('value', this.state.count))
        // console.log(this.state.count)

        this.setState((preValue) => ({
            count: preValue.count + 1
        }))
        console.log(this.state.count)
        
    }

    incrementGroup() {
        this.createEvent()
        this.createEvent()
        this.createEvent()
    }
    render() {
        return (
            <div className='mt-3'>
                <h3>Count: {this.state.count}</h3>
                <button className='btn btn-primary btn-sm mt-2' onClick={() => this.incrementGroup()}>increase</button>
            </div>
        )
    }
}

export default Counter
