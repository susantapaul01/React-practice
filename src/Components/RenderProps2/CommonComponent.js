import React from 'react';

class CommonComponent extends React.Component {
    state = {
        count: 0
    }
    incrementHandler = () => {
        this.setState((preValue) => ({
            count: preValue.count + 1
        }))
    }
    render() {
        const { count } = this.state;
        const { render } = this.props;
        return render(count, this.incrementHandler);
    }
}
export default CommonComponent;
