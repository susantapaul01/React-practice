import React from 'react';

const WithComponent = (CommonRulesComponent) => {
    class newComponent extends React.Component {
        state = {
            count: 0
        }
        incrementHandeler = () => {
            this.setState((preValue) => ({
                count: preValue.count + 1
            }))
        }
        render() {
            const { count } = this.state
            return <CommonRulesComponent count={count} incrementHandeler={this.incrementHandeler} />
        }
    }
    return newComponent;
}
export default WithComponent;