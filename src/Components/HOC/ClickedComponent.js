import React from 'react';
import WithComponent from './WithComponent';

const ClickedComponent = (props) => {
    const { count, incrementHandeler } = props;
    return (
        <button type='button' onClick={incrementHandeler}>Increase { count }</button>
    )
}

export default WithComponent(ClickedComponent);
