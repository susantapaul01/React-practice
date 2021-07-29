import React from 'react';

const WithCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count: 0,
            count2: 0
        };
        increaseEvent = () => {
            this.setState((preValue) => ({
                count: preValue.count + 1
            }));
            this.setState((preValue2) => ({
                count2: preValue2.count2 + 2
            }))
        }
        render() {
            const { count, count2 } = this.state;
            return <OriginalComponent count={count} count2={count2} increaseEvent={this.increaseEvent} />
        }
    }
    return NewComponent;
}

export default WithCounter;

