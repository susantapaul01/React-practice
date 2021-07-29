import React from 'react';

class Counter extends React.Component {
    state = {
        message: 'Welcome',
        count: 0
    }
    changeMessage = () => {
        this.setState({
            message: 'Thank you'
        })
    }
    increaseCount = () => {
        this.setState((prev) => ({
            count: prev.count + 1
        }))
    }
    render() {
        const { message, count } = this.state;
        const { render } = this.props;
        return render(message, count, this.changeMessage, this.increaseCount);
    }
}

export default Counter;
