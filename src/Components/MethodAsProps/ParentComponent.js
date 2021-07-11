import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div> 
                {/* <button onClick={this.greetParent}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button> */}
                {/* ~~~~~~ Above button is recommend for this page   ~~~~~~ */}

                <ChildComponent greetHandeler={this.greetParent} isCondition={this.state.isToggleOn}  />
            </div>
        )
    }
}

export default ParentComponent;