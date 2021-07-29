import React from 'react';

class Bracket extends React.Component {
    Bracket = (text, openBr, closeBr) => `${openBr} ${text} ${closeBr}`
    render() {
        return (
            this.props.children({ Bracket : this.Bracket})
        );
    }
}

export default Bracket;