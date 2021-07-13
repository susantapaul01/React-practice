import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true,
            count: 0
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
        if(this.state.isToggleOn === true) {
            this.setState({
                count: this.state.count + 1
            }, () => console.log('Like Value', this.state.count))
        } else {
            this.setState({
                count: this.state.count - 1
            }, () => console.log('Unlike Value', this.state.count))
        }
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.greetParent}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button> */}
                {/* ~~~~~~ Above button is recommend for this page   ~~~~~~ */}
                <h3>Count: {this.state.count}</h3>
                <ChildComponent greetHandeler={this.greetParent} isCondition={this.state.isToggleOn}  />
            </div>
        )
    }
}

export default ParentComponent;