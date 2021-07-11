import React from 'react';

class EventBind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.EventBinding = this.EventBinding.bind(this);
    }
    EventBinding() {
        this.setState((preValue) => ({
            count: preValue.count + 1
        }))
        console.log('Event Binding');
    }
    render() {
        return (
            <div className='mt-3'>
                <h4>Count: {this.state.count}</h4>
                <button className='mt-3' onClick={this.EventBinding}>Click</button>
            </div>
        )
    }
}
export default EventBind;


